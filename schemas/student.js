const Joi = require("joi");

const studentSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
});

module.exports = {
  studentSchema,
};
