const Joi = require("joi")

const regCursista = data=>{
    const validator = Joi.object({
        name: Joi.string().min(6).max(40).required(),
        idade: Joi.number().integer().min(12).required(),
        email: Joi.string().min(6).max(255).email().required(),
        paroquia: Joi.string().min(4).max(100).required(),
        comunidade: Joi.string().min(4).max(100).required(),
        grupo: Joi.string()
    })
    return validator.validate(data)
}

module.exports = regCursista;


