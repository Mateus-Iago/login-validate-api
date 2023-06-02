const Joi = require('joi')

const registerValidate = (data) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).max(30).required(),
    })

    return schema.validate(data)

}

const loginValidate = (data) => {

    const schema = Joi.object({
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(50)
    })

    return schema.validate(data)

}

module.exports.loginValidate = loginValidate
module.exports.registerValidate = registerValidate