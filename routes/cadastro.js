const router = require('express').Router();
const Joi = require('joi')
const authCheck = require('./authCheck')
const Cursista = require('../model/cursista')
const Grupo = require('../model/grupo')
const groupSorter = require("../groupSort")
const regValidation = require('../model/cursista_s');

router.post('/cursista', authCheck, async (req,res)=>{
    const data = {name, idade, email, paroquia, comunidade} = req.body
    const valid = regValidation(data)
    if(valid.error)
        return res.status(400).send(valid.error.details[0].message);
    const unique = await Cursista.findOne({email:data.email})
    if(unique)
        return res.status(400).send("Usuário já existente")
    const cursista = new Cursista(data)
    cursista.save()
    .then(
        res.status(200).send('Cadastrado com sucesso')
    ).catch(
        res.status(500).send('Erro ao cadastrar')
    )
})

router.post('/grupo', authCheck, async(req, res)=>{
    const data = {cor} = req.body;
    if(data.cor){
        const grupo = new Grupo(data)
        grupo.save()
        .then(res.status(200).send("Cadastrado com sucesso"))
        .catch(res.status(400))
    }else{
        return res.status(400).send("Erro ao cadastrar")
    }
})

module.exports = router