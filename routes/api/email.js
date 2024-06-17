const express = require("express");
const multer = require("multer");
const emailController = require("../../controllers/email");
const { validateBody, authenticate } = require("../../middlewares");
// const { registerSchema, loginSchema } = require("../../schemas/user");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/",
  authenticate,
  //   validateBody(emailSchema),
  upload.single("pdf"),
  emailController.sendEmail
);

module.exports = router;
