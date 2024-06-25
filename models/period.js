const { Schema, model, Types } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const periodSchema = new Schema(
  {
    period: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

periodSchema.post("save", handleMongooseError);

const Period = model("period", periodSchema);

module.exports = Period;
