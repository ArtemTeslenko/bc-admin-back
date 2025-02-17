const Joi = require("joi");

const locationSchema = Joi.object({
  slug: Joi.string().min(1).required(),
  name: Joi.string().min(1).required(),
});

module.exports = {
  locationSchema,
};
