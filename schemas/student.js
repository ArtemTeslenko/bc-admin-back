const Joi = require("joi");

const validateGender = ["male", "female"];
const validateStudentStatus = ["new", "return"];

const studentSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  middlename: Joi.string().required(),
  client: Joi.object({
    gender: Joi.string()
      .required()
      .valid(...validateGender),
    dateOfBirth: Joi.string()
      .required()
      .pattern(/^\d{2}-\d{2}-\d{4}$/),
    // age: Joi.number().min(10).max(18),
    parent: Joi.string().required(),
    studentStatus: Joi.string()
      .required()
      .valid(...validateStudentStatus),
    crmLink: Joi.string().required(),
    bookingNumber: Joi.string().required(),
    manager: Joi.string().required(),
  }),
  orderDate: Joi.string()
    .required()
    .pattern(/^\d{2}-\d{2}-\d{4}$/),
  paymentAgreement: Joi.object({
    firstPaymentDate: Joi.string()
      .required()
      .pattern(/^\d{2}-\d{2}-\d{4}$/),
    totalUahSum: Joi.number().precision(2).positive(),
    totalEurSum: Joi.number().precision(2).positive(),
    debtEur: Joi.number().precision(2).positive(),
    afterPayment: Joi.number().precision(2).positive(),
    privateEntrepreneur: Joi.string().required(),
    currencyRate: Joi.number().precision(2).positive(),
    afterPaymentPlanedDate: Joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/),
    afterPaymentFactDate: Joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/),
    eurSum: Joi.number().precision(2).positive(),
    agreementPriceUah: Joi.number().precision(2).positive(),
    sale: Joi.number().precision(0).positive().min(1).max(99),
  }),
  comment: Joi.string(),
  service: Joi.object({
    manager: Joi.string(),
    accommodationComent: Joi.string(),
    afterPayment: Joi.number().precision(2).positive(),
    questionnaire: Joi.string(),
    starterCall: Joi.string(),
    transferTo: Joi.string(),
    transferFrom: Joi.string(),
    eurSum: Joi.number().precision(2).positive(),
    coordinatorComment: Joi.string(),
    durationCall: Joi.string(),
    passport: Joi.string(),
    nameEng: Joi.string().required(),
    surnameEng: Joi.string().required(),
  }),
});

// const updateGenderSchema = Joi.object({
//   gender: Joi.string()
//     .required()
//     .valid(...validateGender),
// });

module.exports = {
  studentSchema,
  // updateGenderSchema,
};
