const User = require("../models/user");
const { HttpError, controllerWrapper } = require("../helpers");

const getUsersList = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await User.find(
    { skip, limit },
    { token: false, password: false }
  )
    .limit(limit)
    .skip(skip);

  const totalItems = await User.find().countDocuments();

  res.json({ data: result, totalItems, itemsPerPage: limit, page });
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
