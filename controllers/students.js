const Student = require("../models/student");
const { HttpError, controllerWrapper } = require("../helpers");

const getStudentsList = async (req, res) => {
  const result = await Student.find();

  res.json(result);
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
  const result = await Student.create(req.body);

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

const updateStudentGender = async (req, res) => {
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

  // res.status(204).send();
  res.json({ message: "Delete success" });
};

module.exports = {
  getStudentsList: controllerWrapper(getStudentsList),
  getStudentById: controllerWrapper(getStudentById),
  addStudent: controllerWrapper(addStudent),
  updateStudentById: controllerWrapper(updateStudentById),
  updateStudentGender: controllerWrapper(updateStudentGender),
  deleteStudentById: controllerWrapper(deleteStudentById),
};
