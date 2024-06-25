const Joi = require("joi");

const periodSchema = Joi.object({
  period: Joi.string().required(),
});

module.exports = {
  periodSchema,
};
