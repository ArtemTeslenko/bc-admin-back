const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const User = require("../models/user");

const { SECRET_KEY } = process.env;

const isValidRole = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [_, token] = authorization.split(" ");

  const { id } = jwt.verify(token, SECRET_KEY);
  const user = await User.findById(id);

  if (!user.role || !user.role.length || !user.role.includes("super-admin")) {
    next(HttpError(403));
  }
  next();
};

const isPeriodAvailableRole = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [_, token] = authorization.split(" ");

  const { id } = jwt.verify(token, SECRET_KEY);
  const user = await User.findById(id);

  const isRoleAvailable =
    user.role.includes("admin") || user.role.includes("super-admin");

  if (!user.role || !user.role.length || !isRoleAvailable) {
    next(HttpError(403));
  }
  next();
};

module.exports = { isValidRole, isPeriodAvailableRole };
