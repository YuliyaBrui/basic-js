const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let teamName = [];
  for (let member of members) {
    if (typeof member == "string") {
      for (let i = 0; i < member.length; ++i) {
        if (member[i] != " ") {
          teamName.push(member[i].toUpperCase());
          break;
        }
      }
    }
  }
  teamName.sort();
  return teamName.flat().join("");
};
