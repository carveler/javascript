let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function filter(array) {
  let arrayOdd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      arrayOdd.push(array[i]);
    }
  }
  return arrayOdd;
}

filter(array);

let arrayOfOdds0 = filter(array);

console.log(arrayOfOdds0);

function filterE(array) {
  let arrayEven = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayEven.push(array[i]);
    }
  }
  return arrayEven;
}
filterE(array);
let arrayOfEven = filterE(array);
console.log(arrayOfEven);

function filter2(array) {
  let arrayOdd = [];
  let arrayEven = [];

  for (let i = 0; i < array.length; i++) {
    array[i] % 2 !== 0 ? arrayOdd.push(array[i]) : arrayEven.push(array[i]);
  }

  return arrayOdd, arrayEven;
}

function filter1(array, test) {
  let passedTest = [];

  for (let element of array) {
    if (test(element)) {
    }
  }
}

const people = [
  { name: "a", age: 20 },
  { name: "ba", age: 16 },
  { name: "c", age: 18 },
  { name: "d", age: 22 },
  { name: "f", age: 16 },
];

const numbers = [-5, 6, 2, -1];

let posNum = numbers.filter((num) => num > 0) * 2;

console.log(posNum);
