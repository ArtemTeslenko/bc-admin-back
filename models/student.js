const { Schema, model, Types } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const studentSchema = new Schema(
  {
    location: {
      type: String,
    },
    parentName: {
      type: String,
    },
    parentPassport: {
      type: String,
    },
    parentTaxpayerNumber: {
      type: String,
    },
    parentAddress: {
      type: String,
    },
    parentPhoneNumber: {
      type: String,
    },
    parentEmail: {
      type: String,
    },
    studentName: {
      type: String,
    },
    studentBirthday: {
      type: String,
      // match: /^\d{2}-\d{2}-d{4}$/,
    },
    campPeriod: {
      type: String,
    },
    comments: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  {
    strict: false,
    toJSON: { getters: true },
    versionKey: false,
    timestamps: true,
  }
);

studentSchema.post("save", handleMongooseError);

const Student = model("student", studentSchema);

module.exports = Student;
