const Location = require("../models/location");
const { HttpError, controllerWrapper } = require("../helpers");

const getLocationsList = async (req, res) => {
  const result = await Location.find();

  res.json({
    data: result,
  });
};

const getLocationById = async (req, res) => {
  const { id } = req.params;
  const result = await Location.findById(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const addLocation = async (req, res) => {
  const result = await Location.create({ ...req.body });

  res.status(201).json(result);
};

const updateLocationById = async (req, res) => {
  const { id } = req.params;
  const result = await Location.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

const deleteLocationById = async (req, res) => {
  const { id } = req.params;
  const result = await Location.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Delete success" });
};

module.exports = {
  getLocationsList: controllerWrapper(getLocationsList),
  getLocationById: controllerWrapper(getLocationById),
  addLocation: controllerWrapper(addLocation),
  updateLocationById: controllerWrapper(updateLocationById),
  deleteLocationById: controllerWrapper(deleteLocationById),
};
