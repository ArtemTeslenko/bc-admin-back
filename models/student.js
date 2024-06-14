const { Schema, model, Types } = require("mongoose");
const { handleMongooseError } = require("../helpers");

// const validateGender = ["male", "female"];
// const validateStudentStatus = ["new", "return"];

const studentSchema = new Schema(
  {
    pageId: {
      type: Number,
    },
    field2224355: {
      type: String,
    },
    field2224356: {
      type: String,
    },
    field2224357: {
      type: Number,
    },
    field2224358: {
      type: String,
    },
    field2224359: {
      type: String,
    },
    field2224360: {
      type: String,
    },
    field2224363: {
      type: String,
    },
    field2224364: {
      type: String,
    },
    field2224365: {
      type: String,
    },
    field2224366: {
      type: String,
    },
    field2224369: {
      type: String,
    },
    // name: {
    //   type: String,
    //   required: true,
    // },
    // surname: {
    //   type: String,
    //   required: true,
    // },
    // middlename: {
    //   type: String,
    //   required: true,
    // },
    // client: {
    //   gender: {
    //     type: String,
    //     enum: validateGender,
    //     required: true,
    //   },
    //   dateOfBirth: {
    //     type: String,
    //     match: /^\d{2}-\d{2}-\d{4}$/,
    //   },
    //   // age: {
    //   //   type: Number,
    //   //   required: false,
    //   // },
    //   parent: {
    //     type: String,
    //     required: true,
    //   },
    //   studentStatus: {
    //     type: String,
    //     enum: validateStudentStatus,
    //     required: true,
    //   },
    //   crmLink: {
    //     type: String,
    //     required: true,
    //   },
    //   bookingNumber: {
    //     type: String,
    //     required: true,
    //   },
    //   manager: {
    //     type: String,
    //     required: true,
    //   },
    // },
    // orderDate: {
    //   type: String,
    //   match: /^\d{2}-\d{2}-\d{4}$/,
    //   required: true,
    // },
    // paymentAgreement: {
    //   firstPaymentDate: {
    //     type: String,
    //     match: /^\d{2}-\d{2}-\d{4}$/,
    //     required: true,
    //   },
    //   totalUahSum: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: true,
    //   },
    //   totalEurSum: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: false,
    //   },
    //   debtEur: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: false,
    //   },
    //   afterPayment: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: false,
    //   },
    //   privateEntrepreneur: {
    //     type: String,
    //     required: true,
    //   },
    //   currencyRate: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: true,
    //   },
    //   afterPaymentPlanedDate: {
    //     type: String,
    //     match: /^\d{2}-\d{2}-\d{4}$/,
    //     required: false,
    //   },
    //   afterPaymentFactDate: {
    //     type: String,
    //     match: /^\d{2}-\d{2}-\d{4}$/,
    //     required: false,
    //   },
    //   eurSum: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: false,
    //   },
    //   agreementPriceUah: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: true,
    //   },
    //   sale: {
    //     type: Number,
    //     required: false,
    //   },
    // },
    // comment: {
    //   type: String,
    //   required: false,
    // },
    // service: {
    //   manager: {
    //     type: String,
    //     required: false,
    //   },
    //   accommodationComent: {
    //     type: String,
    //     required: false,
    //   },
    //   afterPayment: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: false,
    //   },
    //   questionnaire: {
    //     type: String,
    //     required: false,
    //   },
    //   starterCall: {
    //     type: String,
    //     required: false,
    //   },
    //   transferTo: {
    //     type: String,
    //     required: false,
    //   },
    //   transferFrom: {
    //     type: String,
    //     required: false,
    //   },
    //   eurSum: {
    //     type: Types.Decimal128,
    //     get: getFloatNumberValue,
    //     required: false,
    //   },
    //   coordinatorComment: {
    //     type: String,
    //     required: false,
    //   },
    //   durationCall: {
    //     type: String,
    //     required: false,
    //   },
    //   passport: {
    //     type: String,
    //     required: false,
    //   },
    //   nameEng: {
    //     type: String,
    //     required: true,
    //   },
    //   surnameEng: {
    //     type: String,
    //     required: true,
    //   },
    // },
  },
  { toJSON: { getters: true }, versionKey: false, timestamps: true }
);

studentSchema.post("save", handleMongooseError);

const Student = model("student", studentSchema);

// function getFloatNumberValue(value) {
//   if (typeof value !== "undefined") {
//     return parseFloat(value.toString());
//   }
//   return value;
// }

module.exports = Student;
