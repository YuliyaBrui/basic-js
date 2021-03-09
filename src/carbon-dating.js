const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports =function dateSample(sampleActivity) {if (isNaN(Number(sampleActivity)) || Number(sampleActivity)==0)
  {return 'false'}
else{ return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity)) * HALF_LIFE_PERIOD / Math.LN2)
}}
