const express = require("express");
const studentsController = require("../../controllers/students");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/student");

const router = express.Router();

router.get("/", studentsController.getStudentsList);

router.get("/:id", isValidId, studentsController.getStudentById);

router.post(
  "/",
  validateBody(schemas.studentSchema),
  studentsController.addStudent
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.studentSchema),
  studentsController.updateStudentById
);

router.patch(
  "/:id/gender",
  isValidId,
  validateBody(schemas.updateGenderSchema),
  studentsController.updateStudentGender
);

router.delete("/:id", isValidId, studentsController.deleteStudentById);

module.exports = router;
