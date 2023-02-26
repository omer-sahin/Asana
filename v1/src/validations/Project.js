const Joi = require("joi")


//! Joi ile validation işlemleri yapılıyor

const createValidation=Joi.object({
    name: Joi.string().required().min(4)


})
module.exports={
    createValidation
}