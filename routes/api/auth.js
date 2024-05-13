const express = require("express");
const usersController = require("../../controllers/auth");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../schemas/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(registerSchema),
  usersController.register
);

router.post("/login", validateBody(loginSchema), usersController.login);

router.get("/current", authenticate, usersController.getCurrent);

router.post("/logout", authenticate, usersController.logout);

module.exports = router;
