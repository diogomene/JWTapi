const jwt = require('jsonwebtoken')

/**
 *  Verifica JWT
 */
module.exports = function(req, res, next){
    const token = req.header('auth-token')
    if(!token)
        return res.status(401).send("Não autorizado")
    try{
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    }catch(err){
        return res.status(400).send("Não autorizado")
    }

}