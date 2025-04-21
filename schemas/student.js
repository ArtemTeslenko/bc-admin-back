const Joi = require("joi");

const validateCountry = ["ua", "pl", "en"];

const studentSchema = Joi.object({
  locationSlug: Joi.string().required(),
  parentName: Joi.string().required(),
  parentPassport: Joi.string().required(),
  parentTaxpayerNumber: Joi.string().required(),
  parentAddress: Joi.string().required(),
  parentPhoneNumber: Joi.string().required(),
  parentEmail: Joi.string().required(),
  studentName: Joi.string().required(),
  studentBirthday: Joi.string().required(),
  campPeriod: Joi.object().required(),
  comments: Joi.string().required(),
  country: Joi.string()
    .required()
    .valid(...validateCountry),
  agreementDate: Joi.date().iso(),
});

module.exports = {
  studentSchema,
};
