const Joi = require("joi");

const studentCampInfo = Joi.object({
  group: Joi.string(),
  materialsTaught: Joi.string(),
  finalTestResult: Joi.string(),
  topicsCovered: Joi.string(),
  workingMode: Joi.string(),
  speaking: Joi.string(),
  reading: Joi.string(),
  listening: Joi.string(),
  speakingOfWriting: Joi.string(),
  additionalInfo: Joi.string(),
});

module.exports = studentCampInfo;
