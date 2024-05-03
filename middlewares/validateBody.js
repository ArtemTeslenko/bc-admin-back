const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const wrapper = async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return wrapper;
};

module.exports = validateBody;
