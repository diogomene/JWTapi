const router = require('express').Router();
const Joi = require('joi');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const Usuario = require('../model/user')
const {regValidation, loginValidation} = require('../model/user_s')

router.post('/register', async (req,res)=>{
    const conf = {name, email, password, date} = req.body
    const valid = regValidation(conf)
    if(valid.error)
        return res.status(400).send(valid.error.details[0].message);

    const already = await Usuario.findOne({email:conf.email})
    if(already)
        return res.status(400).send("Email já utilizado")
    
    conf.password = await bcrypt.hash(conf.password, 10);
    const user = new Usuario(conf)
    user.save().then(
        saved=>res.status(200).send(saved._id)
    ).catch(
        err=>res.sendStatus(400)
    )
})

router.post('/login', async (req,res)=>{
    const conf = {email, password} = req.body
    const valid = loginValidation(conf)
    if(valid.error)
        return res.sendStatus(400)
    const user = await Usuario.findOne({email:conf.email})
    if(!user)
        return res.status(403).send("Falha no login")
    if( !await bcrypt.compare(conf.password, user.password))
        return res.status(403).send("Falha no login")
    const user_token = await jwt.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn: 43200})
    res.header('auth-token', user_token)
    return res.json({success:true})
})
module.exports = router;