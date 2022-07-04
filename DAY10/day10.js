// operators in JS

// 1. assigment operators
let a = 15;
let b = 18;
// let total = a * b;
// let total = a + b;
// let total = a / b;
// let total = a % b;
// let total = a - b;
// let total = ++a;
// let total = a++;
// let total = ++b;
// let total = b++;
// a++
// ++a
// a--
// --a
// console.log(a);
// let total = a + b;

// console.table({ total });

// let str,
//   str1,
//   total = "";

// str = "ABC";
// str1 = "XYZ";
// let num = 2;
// let num1 = 10;
// let totalNum = num + num1;
// total = str + " " + str1 + " " + num + " " + num1 + " " + totalNum;

// // total = `${str} ${str1}`
// console.table({ total });
// 4. comparision operators
// let name1 = '12'; // ascii values
// let name2 = 12;
// let comp2 = name1 === name2;
// let comp = name1 == name2;
// let name1 = 10; // ascii values
// let name2 = 2;
// let comp2 = name1 < name2;
// let comp = name1 > name2;
// let name1 = 10;
// let name2 = 10;
// let comp2 = name1 != name2;
// let comp = name1 != name2;
// console.table({ comp });
// console.table({ comp2 });

// 2. terniary operator in JS

// let num = 10;
// let num1 = 10;
// let total = 0;
// // true ----->>> total =10
// // false --->>> total = 20
// num === num1 ? (total = 10) : (total = 20);
// console.log({total});

// 3. logical operators.
// && ||
// let bool = true;
// let bool1 = true;
// console.log(bool || bool1)
// if (bool && bool1) {
//   console.log("if");
// } else {
//   console.log("ELSE");
// }
// bool1 || bool ? console.log('true' , +true):console.log('false', +false)

// program using above operators

let total = a + b;
let res = "";
a = 20;
total > 30 ? (res = "GREATER") : (res = "LESSER");
// console.table({ res });
let msg = "";
// if (a / 5 === 0) {
//   msg = "divisible by 5";
// } else {
//   msg = "not divisible";
// }
console.log((a / 5) % 2);
if ((a / 5) % 2 === 0) {
  msg = "mutiple  of 2";
} else {
  msg = "not a mutiple  of 2";
}
console.table({ msg });
