const Period = require("../models/period");
const { HttpError, controllerWrapper } = require("../helpers");

const getPeriodsList = async (req, res) => {
  const result = await Period.find();

  res.json({
    data: result,
  });
};

const addPeriod = async (req, res) => {
  const result = await Period.create({ ...req.body });

  res.status(201).json(result);
};

const deletePeriodById = async (req, res) => {
  const { id } = req.params;
  const result = await Period.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({ message: "Delete success" });
};

module.exports = {
  getPeriodsList: controllerWrapper(getPeriodsList),
  addPeriod: controllerWrapper(addPeriod),
  deletePeriodById: controllerWrapper(deletePeriodById),
};
