// more about array & objects in JS
// array of object
const arr = [
  {
    name: "John",
    age: 30,
    salary: 3000,
  },
  {
    name: "Nick",
    age: 20,
    salary: 8000,
  },
  {
    name: "Rohan",
    age: 40,
    salary: 9000,
  },
  10,
];
const obj = {
  name: "Nick",
  age: 20,
  salary: 8000,
};
// console.log(obj.age)

// Imp predefined functions in JS

//  MAP function
// const mappedData = arr.map((ele) => ele.salary * 40);
// const mappedData1 = arr.map((ele) => ({
//   age: ele.age,
//   salary: ele.salary * 20,
// }));
// console.log({ mappedData });
// console.log({ mappedData1 });
// console.log({ arr });

// filter function

// const filterData = arr.filter((ele) => ele.age > 20);
// console.log({ filterData });

// indexOf

// const findObjInArr = arr.indexOf(10);
// console.log({ findObjInArr });

// reduce function

const num = [25, 9, 10, 100, 200, 5];
// let sum = 0;
// num.forEach((ele, i) => sum = sum + ele);
// console.log("sum", sum);
// const sumFun = (t, v, i, arr) => {
//   return t + v;
// };
// const sum = num.reduce((total, value, index, arr) => total + value);
// console.log(sum);

//INCLUDES
// const checkIncludes = num.includes(10);
// const checkIncludes = num.some((ele) => ele === 10);
// const checkIncludes = num.every((ele) => ele === 10);
// console.log({ checkIncludes });

// Date Object in JS

// const date = new Date();
// new Date('12-20-2022').getMonth() +1
// date.getUTCDate()
// date.getMonth()
// console.log(new Date());

// Math method is JS

// const math = Math;
// const sum = math.sqrt(16);
// const sum = math.pow(4,2);
// const sum = math.random() + 'abc' + math.random();
// const password = math.trunc(math.random()) + 'abc' + math.random();
// console.log(password);

// classes
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar = new Car("Audi", 2022);
const myCar1 = new Car("BMW", 2021);

// console.log(myCar.name, myCar1);

// JSON methods
console.log(typeof myCar);
console.log(myCar.name);
const stringify = JSON.stringify(myCar);
console.log(stringify);
console.log(typeof stringify);
const convert_to_Obj = JSON.parse(stringify);
console.log(convert_to_Obj.name);
