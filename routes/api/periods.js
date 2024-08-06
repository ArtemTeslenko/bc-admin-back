const express = require("express");
const periodsController = require("../../controllers/periods");
const schemas = require("../../schemas/period");
const {
  validateBody,
  isValidId,
  isValidRole,
  authenticate,
  isPeriodAvailableRole,
} = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, periodsController.getPeriodsList);

router.post(
  "/",
  authenticate,
  isPeriodAvailableRole,
  validateBody(schemas.periodSchema),
  periodsController.addPeriod
);

router.delete(
  "/:id",
  authenticate,
  isPeriodAvailableRole,
  isValidId,
  periodsController.deletePeriodById
);

module.exports = router;
