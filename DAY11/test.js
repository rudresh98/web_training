console.log("Hi this is server side.");
let multiplyData = 10;
let arr = [];
let obj = {};
let str = "";
let num = 0;
let bool = true;
function multiply(params) {
  // console.log("multiply function", params);
  return params * params;
}
multiplyData = multiply(10);
console.table({ multiplyData });
// console.log(typeof multiplyData)
// console.log(typeof arr)
// console.log(typeof bool)
// console.log(typeof num)
// console.log(typeof null)
// console.log(typeof undefined)