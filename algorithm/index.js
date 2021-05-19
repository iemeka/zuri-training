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
    (fahrType === "string" && fahrValue.trim().length > 0 && !isNaN(Number(fahrValue)))
  ) {
    return true;
  }
  return false;
}

// RETURNS REAL VALUE TYPE  
// FOR OBJECT - [OBJECT OBJECT], FOR TYPE ARRAY - [OBJECT ARRAY], FOR TYPE STRING - [OBJECT STRING]..ETC.WE JUST NEED TO EXTRACT THE SUBSTRING "ARRAY", "STRING", "OBJECT"..ETC.
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
console.log(convertFahrToCelsius("23dd"));

// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

function checkYuGiOh(inputParam) {
  const paramType = getType(inputParam);
  const isValidType = validateType(paramType, inputParam);
  if (isValidType) {
    const inputNumber = Number(inputParam);
    const arr = [];
    for (let i = 1; i < inputNumber + 1; i++) {
      let stringHolder = "";
      if (i % 2 === 0) stringHolder += "yu";
      if (i % 3 === 0) {
        if (stringHolder.length === 0) {
          stringHolder += "gi";
        } else {
          stringHolder += "-gi";
        }
      }
      if (i % 5 === 0) {
        if (stringHolder.length === 0) {
          stringHolder += "oh";
        } else {
          stringHolder += "-oh";
        }
      }
      if (stringHolder.length === 0) {
        arr.push(i);
      } else {
        arr.push(stringHolder);
      }
    }
    return arr;
  }
  return errorMessage(inputParam, null);
}

//HOW TO RUN:
console.log(checkYuGiOh("30"));



