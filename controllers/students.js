const Student = require("../models/student");
const { HttpError, controllerWrapper } = require("../helpers");

const getStudentsList = async (req, res) => {
  const { page = 1, limit = 10, location } = req.query;
  const skip = (page - 1) * limit;

  const query = {};

  if (location) {
    query.location = { $regex: location };
  }

  const totalItems = await Student.countDocuments(query);
  const totalPages = Math.ceil(totalItems / limit);
  const result = await Student.find(query)
    .limit(Number(limit))
    .skip(Number(skip));

  res.json({
    data: result,
    totalItems,
    totalPages,
    itemsPerPage: result.length,
    page,
  });
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const result = await Student.findById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const addStudent = async (req, res) => {
  const { location = "default" } = req.params;
  const result = await Student.create({ location, ...req.body });

  res.status(201).json(result);
};

const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const result = await Student.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const result = await Student.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Delete success" });
};

module.exports = {
  getStudentsList: controllerWrapper(getStudentsList),
  getStudentById: controllerWrapper(getStudentById),
  addStudent: controllerWrapper(addStudent),
  updateStudentById: controllerWrapper(updateStudentById),
  deleteStudentById: controllerWrapper(deleteStudentById),
};
