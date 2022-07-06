// strings in JS

let carName = "CAR1234";
let carName1 = "CAR2 fff sad";
let newString = "                    HI HELLO BYE NICE              ";
let newString1 = "Hi everyone";

// string methods

const len = carName.length;
// console.log({ len }, { carName1 });

//  extracting strings
// SLICE
// const extractedString = carName1.slice(5, 8);
// const extractedString = carName1.slice(0,-8);
// console.log({ extractedString });

// SUBSTRING
// let subRes = newString1.substring(0, 2);
// console.warn({ subRes });

// SUBSTR deprecated
// let subStrRes = carName1.substr(5,2)
// console.log('====================================');
// console.log(subStrRes);
// console.log('====================================');

// RELACE methods in

// let replacedStr = carName1.replace("fff", "replaced text");
// console.log(replacedStr);

// CASE change methods

// let upperCaseStr = carName1.toUpperCase();
// console.log({ carName1 });
// let lowerCaseStr = carName1.toLowerCase();
// console.log({ upperCaseStr });
// console.log({ lowerCaseStr });

// concat methods

// let concatStr = carName.concat(" : ", carName1);
// console.log({ concatStr });

// TRIM methods is JS
console.log({ newString });
let trimmedStr = newString.trimStart();
// let trimmedStr = newString.trimEnd();
// let trimmedStr = newString.trim();
console.log({ trimmedStr });
