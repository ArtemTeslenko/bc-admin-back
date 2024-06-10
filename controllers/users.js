const User = require("../models/user");
const { HttpError, controllerWrapper } = require("../helpers");

const getUsersList = async (req, res) => {
  const { page = 1, limit = 10, name, email } = req.query;
  const roles = req.query.role;
  const skip = (page - 1) * limit;

  const query = {};

  if (roles) {
    query.role = { $in: Array.isArray(roles) ? roles : [roles] };
  }
  if (name) {
    query.name = { $regex: name, $options: "i" };
  }
  if (email) {
    query.email = { $regex: email };
  }

  const totalItems = await User.countDocuments(query);
  const result = await User.find(query)
    .select("-token -password")
    .limit(Number(limit))
    .skip(Number(skip));

  res.json({ data: result, totalItems, itemsPerPage: result.length, page });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const result = await User.findById(id, { token: false, password: false });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    select: "_id name email role createdAt updatedAt",
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Delete success" });
};

module.exports = {
  getUsersList: controllerWrapper(getUsersList),
  getUserById: controllerWrapper(getUserById),
  updateUserRole: controllerWrapper(updateUserRole),
  deleteUserById: controllerWrapper(deleteUserById),
};
