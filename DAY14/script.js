// console.log("HI WORLD");
// console.error("Hi this is a error.");
// console.debug("Hi this is a debug");
// console.warn("Hi this is warning.");
let obj = {};
// obj = {
//   name: "Nick",
//   age: 10,
//   gg: "jjjjj",
// };
// console.table(obj);
// console.dir(obj);

//  declaration of variable
var userName = "Rudresh";
var userName = "Nick";
let userAge = 60;
userAge = 70;
const userDetails = "Web Developer";
// console.log("username", userName);
// console.table({ userAge });
// console.table({ userDetails });

let arr = [];

let str = "";
let num = 0;
let bool = true;

// function is JAVASCRIPT

function multiply(params) {
  console.log("multiply function", params);
  return params * params;
}

const multiplyData = multiply(3);
console.table({multiplyData});
const add = (params) => {
  console.log("add function");
  return params + params;
};
const addData = add(10);
console.table({ addData });

// operators in JS
