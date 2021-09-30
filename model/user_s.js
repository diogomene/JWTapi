const Joi = require('joi');

const regValidation = data=>{
    const validator = Joi.object({
        name: Joi.string().min(6).max(40).required(),
        email: Joi.string().min(6).max(255).email().required(),
        password: Joi.string().min(4).max(1024).required()
    })
    return validator.validate(data)
}

const loginValidation = data=>{
    const validator = Joi.object({
        email: Joi.string().min(6).max(255).email().required(),
        password: Joi.string().min(4).max(1024).required()
    })
    return validator.validate(data)
}
module.exports.regValidation = regValidation;
module.exports.loginValidation = loginValidation;