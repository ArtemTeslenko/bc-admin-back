const Joi = require("joi");

const validateGender = ["male", "female"];

const studentSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  gender: Joi.string()
    .required()
    .valid(...validateGender),
  seasonStartDate: Joi.string()
    .required()
    .pattern(/^\d{2}-\d{2}-\d{4}$/),
});

const updateGenderSchema = Joi.object({
  gender: Joi.string()
    .required()
    .valid(...validateGender),
});

module.exports = {
  studentSchema,
  updateGenderSchema,
};
