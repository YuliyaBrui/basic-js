const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr) {
  let newArr = [];

  if (!Array.isArray(arr) && arr.length == 0) {
    return Error;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next" && arr[i + 1] !== undefined) {
      newArr.pop(arr[i + 1]);
    } else if (
      arr[i] == "--discard-prev" &&
      arr[i - 2] !== "--discard-next" &&
      arr[i - 1] !== undefined
    ) {
      newArr.pop(arr[i - 1]);
    } else if (arr[i] == "--double-next" && arr[i + 1] !== undefined) {
      newArr.push(arr[i + 1]);
    } else if (
      arr[i] == "--double-prev" &&
      arr[i - 1] !== undefined &&
      arr[i - 2] !== "--discard-next"
    ) {
      newArr.push(arr[i - 1]);
    } else if (
      arr[i] !== undefined &&
      arr[i] !== "--discard-prev" &&
      arr[i] !== "--discard-next" &&
      arr[i] !== "--double-next" &&
      arr[i] !== "--double-prev"
      //arr[i - 1] !== "--discard-next" &&
      //arr[i + 1] !== "--discard-prev"
    ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
