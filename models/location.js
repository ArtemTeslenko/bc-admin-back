const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const locationSchema = new Schema(
  {
    slug: {
      type: String,
    },
    name: {
      type: String,
    },
    address: {
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

locationSchema.post("save", handleMongooseError);

const Location = model("location", locationSchema);

module.exports = Location;
