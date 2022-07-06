// ARRAYS IN JS
// let arr = [1, 2, 3, "RUDRESH", 1.2, true, null, 1.2222222];
// let arr1 = new Array("RAM", "JOHN", "NICK");
// index of arr [0,1,2,3,4,5,6,7]
// let name1 = arr[3];
// let bool1 = arr[5];
// console.log(name1, "bool", bool1);
// console.log(typeof arr1,'arr',typeof arr,arr1,arr)
// console.log(arr);
// arr[3] = "JOHN";
// console.log(arr);

// looping in array
// for loop
// arr.forEach((ele, i) => {
//   //   console.log("element", ele, "index", i, "typeof", typeof ele);
// });

// console.log("length of our arr", arr.length);
// for2 loop
// for (let index = 0; index < arr.length; index++) {
//      const element = arr[index];
//      console.log('ele',element,'index',index);
// }

// while loop
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// methods in array
let arr = [3, 4, 1, 7, 10, 11, 44];
let arr3 = [9, 6, 8, 4, 5, 2];
let arr2 = [10, 20, 30, 40];
// arr.push(55)
// let poppedEle = arr.pop();
// arr.unshift(58)
// let poppedValue = arr.shift();
// let arrToString = arr.toString();
// let arrToStringViaJoin = arr.join(" $ ");
// let mergedArr = arr.concat(arr2);
// let mergedArr = [...arr,...arr2];
// splice
// arr.splice(3,2,'ABC','XYZ')
// let removedEle = arr.splice(0, 2);
// let removedEle = arr.slice(0, 2);
// let sortedEle = arr.sort((ele) => ele);
// let reverseEle = arr.reverse()
// console.log(reverseEle);
// console.log(Math.max.apply(null,arr));
// console.log(Math.min.apply(null,arr));
// console.log(Math.min(...arr));

// convert string to array & reversing the string

let str1 = "MANGO";
let splitStr = str1.split("");
console.log({ splitStr });
let revStr = splitStr.reverse();
console.log({ revStr });
let joinStr = revStr.join("");
console.log({ joinStr });
