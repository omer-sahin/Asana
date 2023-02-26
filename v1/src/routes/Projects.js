//! validasyon tanımı
//! validate midlevare
const validate = require("../middlewares/validate");

const authtenticate = require("../middlewares/authtenticate");
const schema = require("../validations/Project");

const express = require("express");
const { create, index } = require("../controller/Project");
const router = express.Router();

router
  .route("/")
  .post(authtenticate, validate(schema.createValidation), create);
router.route("/").get(authtenticate, index);
module.exports = router;
