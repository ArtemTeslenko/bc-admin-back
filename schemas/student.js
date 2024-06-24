const Joi = require("joi");

const validateCountry = ["ua", "pl"];
const validateLocation = [
  "miska",
  "girska",
  "termalna",
  "ozerna",
  "london",
  "richna",
  "valencia",
  "queens",
  "mountain",
  "sielanka",
];

const studentSchema = Joi.object({
  location: Joi.string()
    .required()
    .valid(...validateLocation),
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
});

module.exports = {
  studentSchema,
};
