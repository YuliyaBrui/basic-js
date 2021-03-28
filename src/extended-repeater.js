const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.addition === undefined) {
    options.addition = "";
  }
  let partitive =
    (String(options.addition) + options.additionSeparator).repeat(
      options.additionRepeatTimes - 1
    ) + String(options.addition);

  return (
    (String(str) + partitive + options.separator).repeat(
      options.repeatTimes - 1
    ) +
    String(str) +
    partitive
  );
};
