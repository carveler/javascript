let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
/////////////////////////////////// Filter  //////////////////////////////////
//
//
//I want to filter an array of numbers and keep only the odd elements.
//I want to filter an array of numbers and keep only the even elements
//I want to filter an array of numbers and keep only the numbers strictly bigger than 8
//
//
/* ************************* 1st try ************************* */

//1st try
function filter0(array) {
  let arrayOdd = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      arrayOdd.push(array[i]);
    }
  }
  return arrayOdd;
}
let arrayOfOdds0 = filter0(array); // The expression filter0(array) it is evaluated in the return value of the function.
// console.log(arrayOfOdds0);

/* ************************* 2nd try ************************* */

//2nd try
function filter1(array, test) {
  let passedTest = [];

  for (let element of array) {
    if (test(element)) {
      passedTest.push(element);
    }
  }
  return passedTest;
}

function testOdd(el) {
  if (el % 2 !== 0) return el;
}

function testEven(el) {
  if (el % 2 === 0) return el;
}

function testBiggerThan8(el) {
  if (el > 8) return el;
}
function testSmallerThan4(el) {
  if (el < 4) return el;
}
let arrayOfOdds1 = filter1(array, testOdd);
// console.log(arrayOfOdds1);

/* ************************* 3rd try ************************* */
function filter2(array, test) {
  let passedTest = [];

  for (let el of array) {
    if (test(el)) {
      passedTest.push(el);
    }
  }
  return passedTest;
}

let arrayOdds2 = filter2(array, (num) => num % 2 !== 0);
let arrayEvens = filter2(array, (num) => num % 2 === 0);
// console.log(arrayEvens);
/* ************************* 4th try ************************* */
//
//
//4th try
let arrayOdds3 = array.filter((el) => el % 2 !== 0);
let arrayEvens3 = array.filter((el) => el % 2 === 0);
// console.log(arrayOdds3);

const people = [
  { name: "John Doe", age: 16 },
  { name: "Thomas Calls", age: 19 },
  { name: "Liam Smith", age: 20 },
  { name: "Jessy Pinkman", age: 18 },
];

function findAdult(arrayOfPeople) {
  let adultsArray = [];
  for (let person of arrayOfPeople) {
    if (person.age > 18) {
      adultsArray.push(person);
    }
  }
  return adultsArray;
}
let adultsArray1 = findAdult(people);
// console.log(adultsArray1);

//
let adultsArray = people.filter((person) => person.age > 18);
// console.log(adultsArray);

/////////////////////////////////// MAP //////////////////////////////////

//
//
//1st try
function myMap0(array) {
  let mapped = [];
  for (let element of array) {
    let transformedElement = element * 2;
    mapped.push(transformedElement);
  }
  return mapped;
}

const transformedArray0 = myMap0(array);
// console.log(transformedArray0);

// 2nd try
function myMap1(array, transform) {
  let mapped = [];
  for (let element of array) {
    let transformedElement = transform(element);
    mapped.push(transformedElement);
  }
  return mapped;
}
function multiplyBy2(num) {
  return num * 2;
}
function multiplyBy3(num) {
  return num * 3;
}
function add10(num) {
  return num + 10;
}
const transformedArray1 = myMap1(array, multiplyBy2);
// console.log(transformedArray1);

//
//
// 3rd try
function myMap2(array, transform) {
  let mapped = [];
  for (let element of array) {
    let transformedElement = transform(element);
    mapped.push(transformedElement);
  }
  return mapped;
}
const transformedArray2 = myMap2(array, (num) => num * 2);
const transformedArray3 = myMap2(array, (num) => num + 5);
// console.log(transformedArray3);

//
let transformedArray4 = array.map((el) => el * 2);
// console.log(transformedArray4);

/////////////////////////////////// REDUCE  //////////////////////////////////
// I want to get an array with all the positive numbers doubled
const numbers = [-5, 6, 2, -1]; // The sum of this array's elements is 2

/* numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
 */
// let positiveNumbersDoubled = numbers
//   .filter((num) => num > 0)
//   .map((el) => el * 2);
/* 
let sum = numbers.reduce((accumulator, current, i) => {
  console.log(`${i + 1} time accumulator`, accumulator);
  console.log(`${i + 1} time current`, current);
  if (current > 0) {
    let doubled = current * 2;
    accumulator.push(doubled);
  }
  return accumulator;
}, []);



console.log(sum); */
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Alice", "Bob", "Tiff"];

let countedNames = names.reduce((acc, curr) => {
  console.log("acc", acc);
  console.log("acc[curr]", acc[curr]);
  if (acc[curr]) {
    acc[curr]++;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

// {"Alice": 3, "Bob": 2, "Tiff": 2, "Bruce": 1}
console.log(countedNames);

const person = {
  name: "pepe",
};

person["Alice"] = 1;
console.log(person);
