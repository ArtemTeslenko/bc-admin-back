const getFloatNumberValue = (value) => {
  if (typeof value !== "undefined") {
    return parseFloat(value.toString());
  }
  return value;
};

module.exports = getFloatNumberValue;
