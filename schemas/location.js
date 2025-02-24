const Joi = require("joi");

const locationSchema = Joi.object({
  slug: Joi.string().min(1).required(),
  name: Joi.string().min(1).required(),
  address: Joi.string().min(1),
});

module.exports = {
  locationSchema,
};
