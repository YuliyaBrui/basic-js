const CustomError = require("../extensions/custom-error");
const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    if (value == undefined) {
      this.str.push("( " + " )");
    } else {
      this.str.push("( " + value + " )");
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) == false || position > this.str.length) {
      throw new Error();
    }
    this.str.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    return this.str.join("~~");
  },
};

module.exports = chainMaker;
