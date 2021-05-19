// HELPER FUNCTIONS - BOTH QUESTIONS SHARE THE SAME TYPE VALIDATION CHECKS.

// HELPER FUNCTIONS:

// DISPLAYS ERROR MESSAGES FOR BOTH ALGORITHMS.
function errorMessage(inputValue, inputValueType) {
  const inputValueString = JSON.stringify(inputValue);
  if (inputValueType !== null) {
    return `${inputValueString} is not a valid number but a/an ${inputValueType}`; //CONVERSION
  }
  return `invalid parameter : ${inputValueString}`; // YUGIHO
}

// VALIDATE TYPE.
// RETURNS TRUE IF A TYPE IS A "NUMBER" OR TYPE IS A STRING(BUT NOT AN EMPTY STRING(" ") AND NOT A STRING THAT CONTAINS LETTERS OR OTHER CHARACTERS("ABC123.?")
function validateType(fahrType, fahrValue) {
  if (
    fahrType === "number" ||
    (fahrType === "string" &&
      fahrValue.trim().length > 0 &&
      !isNaN(Number(fahrValue)))
  ) {
    return true;
  }
  return false;
}

// RETURNS REAL TYPE OF PARAMETER
// FOR TYPE ARRAY - [OBJECT ARRAY], FOR TYPE STRING - [OBJECT STRING], FOR OBJECT - [OBJECT OBJECT],
// ..ETC.WE JUST NEED TO EXTRACT THE SUBSTRING "ARRAY", "STRING", "OBJECT"..ETC.
function getType(fahrValue) {
  const internalType = Object.prototype.toString.call(fahrValue);
  const extractedType = internalType
    .substring(8, internalType.length - 1)
    .toLowerCase();
  return extractedType;
}

// MAIN FUNCTIONS. - THIS FUNCTIONS BELOW SHARE THE ABOVE FUNCTIONS.

// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

function convertFahrToCelsius(fahr) {
  const fahrType = getType(fahr);
  const isValidType = validateType(fahrType, fahr);
  if (isValidType) {
    const fahrenheit = Number(fahr);
    return Number(((fahrenheit - 32) * (5 / 9)).toFixed(4));
  }
  return errorMessage(fahr, fahrType);
}

//HOW TO RUN:
const TOCELSIUSparam = 343;
console.log(convertFahrToCelsius(TOCELSIUSparam));

// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

// FUNCTIONS TO HELP ONLY checkYuGiOh FUNCTION

function isEmptyString(stringHolder, stringValue) {
  const lengthOfStringHolder = stringHolder.length;
  if (stringValue !== null) {
    if (lengthOfStringHolder !== 0) {
      stringHolder += "-";
    }
    return stringHolder + stringValue;
  }
  return lengthOfStringHolder === 0 ? true : false;
}

function accumulator(i) {
  const table = { yu: 2, gi: 3, oh: 5 };
  const stringsTojoin = ["yu", "gi", "oh"];
  let stringAccumulator = "";
  for (let stringValue of stringsTojoin) {
    if (i % table[stringValue] === 0) {
      stringAccumulator = isEmptyString(stringAccumulator, stringValue);
    }
  }
  return stringAccumulator;
}

// MAIN FUNCTION

function checkYuGiOh(inputParam) {
  const paramType = getType(inputParam);
  const isValidType = validateType(paramType, inputParam);
  if (isValidType) {
    const inputNumber = Number(inputParam);
    const arr = [];
    for (let i = 1; i <= inputNumber; i++) {
      let accumulatedString = accumulator(i);
      if (isEmptyString(accumulatedString, null)) {
        arr.push(i);
      } else {
        arr.push(accumulatedString);
      }
    }
    return arr;
  }
  return errorMessage(inputParam, null);
}

//HOW TO RUN:
const YUGIHOparam = {test:[1,2,3],try:"nothing"};
console.log(checkYuGiOh(YUGIHOparam));
