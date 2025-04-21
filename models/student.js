const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const studentSchema = new Schema(
  {
    locationSlug: {
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
    },
    campPeriod: {
      type: Map,
      of: String,
    },
    comments: {
      type: String,
    },
    country: {
      type: String,
    },
    agreementDate: {
      type: Date,
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
