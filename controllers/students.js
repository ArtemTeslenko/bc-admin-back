const { HttpError, controllerWrapper } = require("../helpers");
const students = require("../models/students");

const getStudentsList = async (req, res) => {
  const result = await students.getStudentsList();

  res.json(result);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const result = await students.getStudentById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const addStudent = async (req, res) => {
  const result = await students.addStudent(req.body);

  res.status(201).json(result);
};

const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const result = await students.updateStudentById(id, req.body);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const result = await students.deleteStudentById(id);

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
  deleteStudentById: controllerWrapper(deleteStudentById),
};
