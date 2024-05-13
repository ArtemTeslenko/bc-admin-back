const student = {
  name: "string.required",
  surname: "string.required",
  middlename: "string.required",
  client: {
    gender: "male/fimale.required",
    dateOfBirth: "string.DDMMYYYY.required",
    age: "number", //calculated
    parent: "string(name surname).required",
    studentStatus: "new/return.required",
    crmLink: "string.required",
    bookingNumber: "string.required",
    manager: "string.required",
  },
  orderDate: "date.DDMMYYYY.required",
  paymentAgreement: {
    firstPaymentDate: "date.DDMMYYYY.required",
    totalUahSum: "number(float).required", //❗️❗️❗️❗️❗️❗️
    totalEurSum: "number(float)", //❗️❗️❗️❗️❗️❗️
    debtEur: "number(float)", //❗️❗️❗️❗️❗️❗️
    afterPayment: "number(float)",
    privateEntrepreneur: "string.required",
    currencyRate: "number(float).required",
    afterPaymentPlanedDate: "date.DDMMYYYY",
    afterPaymentFactDate: "date.DDMMYYYY",
    eurSum: "number(float)", //❗️❗️❗️❗️❗️❗️
    agreementPriceUah: "number(float).required",
    sale: "number",
  },
  comment: "string",
  service: {
    manager: "string", //❗️❗️❗️❗️❗️❗️
    accommodationComent: "string",
    afterPayment: "number(float)", //❗️❗️❗️❗️❗️❗️
    questionnaire: "", //❗️❗️❗️❗️❗️❗️
    starterCall: "", //❗️❗️❗️❗️❗️❗️
    transferTo: "", //❗️❗️❗️❗️❗️❗️
    transferFrom: "", //❗️❗️❗️❗️❗️❗️
    eurSum: "number(float)", //❗️❗️❗️❗️❗️❗️
    coordinatorComment: "string",
    durationCall: "", //❗️❗️❗️❗️❗️❗️
    passport: "string",
    nameEng: "string.required",
    surnameEng: "string.required",
  },
};
