/*
Declare a function 'filter'.

'filter' takes two inputs:
  1. a collection (an object or array) and
  2. a test function ('test') that outputs either true or false.

'filter' returns a new array of all the items from the collection that 
pass the 'test'.

You should not use the native methods .forEach, .map, or .filter.

() --> parentheses
{} --> curly braces/brackets
[] --> square braces/brackets
*/

const { returnStatement } = require('@babel/types');

// Your code here

// function filter(object, fn1) {
//   return object.map((item) => {
//     for (let i = 0; i < object.length; i++) {
//       console.log(item[i]);
//       // return item[i].value;
//     }
//   });
//   // return array.map((num) => fn1(num));
// }

function filter(obj, fn1) {
  // console.log('length', obj.length);
  // console.log('obj[0]', obj[0]);
  const numbers = Object.values(obj);
  const newArr = [];
  for (let num of numbers) {
    ///inはだめ
    if (fn1(num)) {
      newArr.push(num);
    }
  }
  return newArr;
}

///////working
// function filter(obj, fn1) {
//   const newArray = Object.values(obj);
//   console.log(newArray);
//   console.log(newArray.filter((num) => fn1(num)));
//   return newArray.filter((num) => fn1(num));
// }

/////////////////////////////////////////////
const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24 },
];

console.log(Object.values(persons[0].name));

const fullAge = persons.filter((person) => person.age >= 18);
console.log(fullAge);

const ageFilter = () => {
  let newArray = [];

  for (let i = 0; i < persons.length; i++) {
    console.log('Object.values(persons[i]', Object.values(persons[i]));
    console.log(persons[i]);
    if (persons[i].age >= 18) {
      newArray.push(persons[i]);
    }
  }
  return newArray;
};
console.log(ageFilter());
///without filter

const fullAge2 = [];
for (let i = 0; i < persons.length; i++) {
  if (persons[i].age >= 18) {
    fullAge2.push(persons[i].name);
  }
}
console.log('fullAge2', fullAge2);

// Tests

function isEven(number) {
  return number % 2 === 0;
}

let actual = filter([1, 2, 3, 4], isEven);
let expected = [2, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log('Yay!');
} else {
  console.log('Try again');
}

actual = filter([55, 60, 64, 1, 2, 10], isEven);
expected = [60, 64, 2, 10];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log('Yay!');
} else {
  console.log('Try again');
}

actual = filter({ a: 55, b: 60, c: 64, d: 1, e: 2, f: 10 }, isEven);
expected = [60, 64, 2, 10];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log('Yay!');
} else {
  console.log('Try again');
}
