const CustomError = require("../extensions/custom-error");

module.exports =  function createDreamTeam(members) {
  let arr=members.flat()
  let teamName = []
  for (let member of arr) {
    if (typeof member == 'string') { teamName.push(member[0].match(/[A-Z]/g)) }
     arr1.sort();
  }return String(teamName.join(''))}