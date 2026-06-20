let a9 = [1, 2, 3, 4, 6, 8, 11, 13, 15, 19, 20, 18];

//Map using
console.log(
  "Built-in map:",
  a9.map((x) => x * 2),
);
console.log(
  "Built-in map:",
  a9.map((x) => x * 3),
);
console.log(
  "Built-in map:",
  a9.map((x) => x * 4),
);

//Filter using
console.log(
  "Built-in filter:",
  a9.filter((x) => x > 2),
);
console.log(
  "Built-in map:",
  a9.map((x) => x * 4),
);
//Filter using
console.log(
  "Built-in filter:",
  a9.filter((x) => x % 2 == 0),
);
console.log(
  "Built-in filter:",
  a9.filter((x) => x % 2 != 0),
);
console.log(
  "Built-in filter:",
  a9.filter((x) => x < 18 == 0),
);
//Reduce using
console.log(
  "Built-in reduce:",
  a9.reduce((sum, x) => sum + x, 0),
);
//ForEach using
let arr = [1, 2, 3, 4];

arr.forEach((item) => {
  console.log(item);
});
//Find using
let arr1 = [5, 7, 10, 20, 30, 40, 50, 60, 70, 80, 90];

let result = arr1.find((num) => num > 8);

console.log(result);
//FindIndex using

let index = arr1.findIndex((num) => num === 30);

console.log(index);
//Some

let result2 = arr1.some((num) => num % 2 === 0);

console.log(result2);
//Every

let result1 = arr1.every((num) => num % 2 === 0);

console.log(result1);
//reduce using

let sum = arr1.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
//
let arr2 = [1,2,3];

let a = arr2.map(x => x * 2);

let b = arr2.forEach(x => x * 2);

console.log(a); // [2,4,6]
console.log(b); // undefined
//reduce
let max = arr2.reduce((acc, curr) => curr > acc ? curr : acc);
console.log(max); // 3
//
const words = ["hi", "hello", "js"];

const total = words.reduce((acc, curr) => acc + curr.length, 0);

console.log(total); // 10