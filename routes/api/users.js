const express = require("express");
const usersController = require("../../controllers/users");
const {
  validateBody,
  isValidId,
  authenticate,
  isValidRole,
} = require("../../middlewares");
const schemas = require("../../schemas/user");

const router = express.Router();

router.get("/", authenticate, isValidRole, usersController.getUsersList);

router.get(
  "/:id",
  authenticate,
  isValidRole,
  isValidId,
  usersController.getUserById
);

router.patch(
  "/:id/role",
  authenticate,
  isValidRole,
  isValidId,
  validateBody(schemas.updateRoleSchema),
  usersController.updateUserRole
);

router.delete(
  "/:id",
  authenticate,
  isValidRole,
  isValidId,
  usersController.deleteUserById
);

module.exports = router;
