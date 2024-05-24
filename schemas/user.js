const Joi = require("joi");
const { model } = require("mongoose");

const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const validateRole = ["super-admin", "admin", "user"];

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  key: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  key: Joi.string().required(),
});

const updateRoleSchema = Joi.object({
  role: Joi.string().valid(...validateRole),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateRoleSchema,
};
