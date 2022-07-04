console.log("Hi this is server side.");
function multiply(params) {
  console.log("multiply function", params);
  return params * params;
}
let multiplyData = 10;
let arr = [];
let obj = {};
let str = "";
let num = 0;
let bool = true;
multiplyData = multiply(3);
console.table({ multiplyData });
console.log(typeof multiplyData)
console.log(typeof arr)
console.log(typeof multiplyData)
console.log(typeof bool)
console.log(typeof num)
console.log(typeof null)
console.log(typeof undefined)