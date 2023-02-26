const Joi=require("joi")




const userValidation = Joi.object({
  full_name: Joi.string().required().min(3),
  email: Joi.string().email().required().min(8),
  password: Joi.string().required().min(8),
});
const loginValidation = Joi.object({
 
  email: Joi.string().email().required().min(8),
  password: Joi.string().required().min(8),
});

module.exports = {
  userValidation,loginValidation
};
