const validate = require("../middlewares/validate");
const schema = require("../validations/User");
const express = require("express");
const { create, index ,login} = require("../controller/Users");
const router = express.Router();


router.route("/").post(validate(schema.userValidation),create)
router.route("/").get(validate(schema.userValidation),index);
router.route("/login").post(validate(schema.loginValidation),login)



module.exports=router
