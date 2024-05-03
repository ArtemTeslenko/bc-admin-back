const express = require("express");
const studentsController = require("../../controllers/students");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/student");

const router = express.Router();

router.get("/", studentsController.getStudentsList);

router.get("/:id", studentsController.getStudentById);

router.post(
  "/",
  validateBody(schemas.studentSchema),
  studentsController.addStudent
);

router.put(
  "/:id",
  validateBody(schemas.studentSchema),
  studentsController.updateStudentById
);

router.delete("/:id", studentsController.deleteStudentById);

module.exports = router;
