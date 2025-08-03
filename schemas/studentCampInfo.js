const Joi = require("joi");

const studentCampInfo = Joi.object({
  group: Joi.string().allow(""),
  materialsTaught: Joi.string().allow(""),
  finalTestResult: Joi.string().allow(""),
  topicsCovered: Joi.string().allow(""),
  workingMode: Joi.string().allow(""),
  speaking: Joi.string().allow(""),
  reading: Joi.string().allow(""),
  listening: Joi.string().allow(""),
  speakingOfWriting: Joi.string().allow(""),
  additionalInfo: Joi.string().allow(""),
});

module.exports = studentCampInfo;
