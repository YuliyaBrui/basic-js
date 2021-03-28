const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let sum = 1;
    if (Array.isArray(arr)) {
      for (let sub of arr) {
        if (Array.isArray(sub)) {
          sum = Math.max(sum, 1 + this.calculateDepth(sub));
        }
      }
    }
    return sum;
  }
};
