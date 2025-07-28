const { Schema } = require("mongoose");

const studentCampInfo = new Schema(
  {
    group: {
      type: String,
    },
    materialsTaught: {
      type: String,
    },
    finalTestResult: {
      type: String,
    },
    topicsCovered: {
      type: String,
    },
    workingMode: {
      type: String,
    },
    speaking: {
      type: String,
    },
    reading: {
      type: String,
    },
    listening: {
      type: String,
    },
    speakingOfWriting: {
      type: String,
    },
    additionalInfo: {
      type: String,
    },
  },
  { _id: false }
);

module.exports = studentCampInfo;
