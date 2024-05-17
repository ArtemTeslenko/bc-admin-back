const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { HttpError, controllerWrapper } = require("../helpers");

const { SECRET_KEY, ENTRANCE_KEY } = process.env;

const register = async (req, res) => {
  const { email, password, key } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  if (key !== ENTRANCE_KEY) {
    throw HttpError(403);
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });
  const currentUser = await User.findOne({ email: newUser.email });
  const payload = {
    id: currentUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "7h" });

  await User.findByIdAndUpdate(currentUser._id, { token });

  res.status(201).json({
    name: currentUser.name,
    email: currentUser.email,
    token,
  });
};

const login = async (req, res) => {
  const { email, password, key } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  if (key !== ENTRANCE_KEY) {
    throw HttpError(403);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "7h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({ token });
};

const getCurrent = async (req, res) => {
  const { email, name } = req.body;

  res.json({
    email,
    name,
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logout success",
  });
};

module.exports = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
  getCurrent: controllerWrapper(getCurrent),
  logout: controllerWrapper(logout),
};
