const express = require("express");
const locationsController = require("../../controllers/locations");
const {
  validateBody,
  isValidId,
  isLocationAvailableRole,
  authenticate,
} = require("../../middlewares");
const schemas = require("../../schemas/location");

const router = express.Router();

router.get("/", authenticate, locationsController.getLocationsList);

router.get(
  "/:id",
  authenticate,
  isLocationAvailableRole,
  isValidId,
  locationsController.getLocationById
);

router.post(
  "/",
  authenticate,
  isLocationAvailableRole,
  validateBody(schemas.locationSchema),
  locationsController.addLocation
);

router.put(
  "/:id",
  authenticate,
  isLocationAvailableRole,
  isValidId,
  validateBody(schemas.locationSchema),
  locationsController.updateLocationById
);

router.delete(
  "/:id",
  authenticate,
  isLocationAvailableRole,
  isValidId,
  locationsController.deleteLocationById
);

module.exports = router;
