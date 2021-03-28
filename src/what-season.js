const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  if (date === null || date === undefined) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) != "[object Date]") {
    throw new Error("Error");
  }
  if (date.getMonth() <= 1 || date.getMonth() == 11) {
    return "winter";
  }
  if (2 <= date.getMonth() && date.getMonth() <= 4) {
    return "spring";
  }
  if (5 <= date.getMonth() && date.getMonth() <= 7) {
    return "summer";
  }
  if (8 <= date.getMonth() && date.getMonth() <= 10) {
    return "autumn";
  }
};
