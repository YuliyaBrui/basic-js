const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  encrypt(message, key) {
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let arrNumber = [];
    let ABC = message
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("");
    let messageArray = message.toUpperCase().split("");
    let keyRepeateArr = key
      .repeat(Math.ceil(message.length / key.length))
      .toUpperCase()
      .split("");
    let keyArr = [];
    for (let substr of ABC) {
      arrNumber.push(alphabet.indexOf(substr));
    }
    for (let sub of keyRepeateArr) {
      keyArr.push(alphabet.indexOf(sub));
    }
    let Sum = [];
    for (let i = 0; i < arrNumber.length; i++) {
      Sum.push(alphabet[(arrNumber[i] + keyArr[i]) % 26]);
    }

    for (let i = 0; i < messageArray.length; i++) {
      if (/[A-Z]/.test(messageArray[i]) != true) {
        Sum.splice(i, 0, messageArray[i]);
      }
    }

    return Sum.join("");
  }
  decrypt(encryptedMessage, key) {
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let arrNumber = [];
    let ABC = encryptedMessage
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("");
    let messageArray = encryptedMessage.toUpperCase().split("");
    let keyRepeateArr = key
      .repeat(Math.ceil(encryptedMessage.length / key.length))
      .toUpperCase()
      .split("");
    let keyArr = [];
    for (let substr of ABC) {
      arrNumber.push(alphabet.indexOf(substr));
    }
    for (let sub of keyRepeateArr) {
      keyArr.push(alphabet.indexOf(sub));
    }
    let Sum = [];
    for (let i = 0; i < arrNumber.length; i++) {
      Sum.push(alphabet[(26 + arrNumber[i] - keyArr[i]) % 26]);
    }
    for (let i = 0; i < messageArray.length; i++) {
      if (/[A-Z]/.test(messageArray[i]) != true) {
        Sum.splice(i, 0, messageArray[i]);
      }
    }
    return Sum.join("");
  }
}

module.exports = VigenereCipheringMachine;
