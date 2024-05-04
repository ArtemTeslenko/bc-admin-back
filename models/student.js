const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const validateGender = ["male", "female"];

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    isPayment: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: String,
      enum: validateGender,
      required: true,
    },
    seasonStartDate: {
      type: String,
      match: /^\d{2}-\d{2}-\d{4}$/,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

studentSchema.post("save", handleMongooseError);

const Student = model("student", studentSchema);

module.exports = Student;
