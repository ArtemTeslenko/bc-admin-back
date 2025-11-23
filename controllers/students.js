const Student = require("../models/student");
const Location = require("../models/location");
const { HttpError, controllerWrapper } = require("../helpers");

const getStudentsList = async (req, res) => {
  const { page = 1, limit = 10, locationSlug, studentName } = req.query;
  const skip = (page - 1) * limit;
  const query = {};

  if (locationSlug) {
    query.locationSlug = {
      $in: [].concat(locationSlug),
    };
  }

  if (studentName) {
    query.studentName = { $regex: studentName, $options: "i" };
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
  let { location: locationSlug } = req.params;

  if (!locationSlug && req.body.locationSlug) {
    locationSlug = req.body.locationSlug;
  }

  const location = await Location.findOne({ slug: locationSlug });

  if (!location) {
    throw HttpError(400);
  }

  console.log(req);
  const result = await Student.create({
    locationSlug,

    agreementDate: new Date(),
    reqInfo: JSON.stringify(req.body),
  });

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
