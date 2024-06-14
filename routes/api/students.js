const express = require("express");
const studentsController = require("../../controllers/students");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/student");

const router = express.Router();

router.get("/", authenticate, studentsController.getStudentsList);

router.get("/:id", authenticate, isValidId, studentsController.getStudentById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.studentSchema),
  studentsController.addStudent
);

router.post("/bc-client/", studentsController.addStudent);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.studentSchema),
  studentsController.updateStudentById
);

router.delete(
  "/:id",
  authenticate,
  isValidId,
  studentsController.deleteStudentById
);

module.exports = router;
