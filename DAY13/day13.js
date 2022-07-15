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

const findObjInArr = arr.indexOf(obj);
console.log({ findObjInArr });
