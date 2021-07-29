const space = ' ';
const sharp = '#';
const size = 8;
let array2 = '';

for (let i = 1; i <= size; i++) {
  let array = '';
  for (let j = 1; j <= size; j++) {
    // if (j % 2 === 0) {
    //   array += sharp;
    // } else {
    //   array += space;
    // }
    j % 2 === 0 ? (array += sharp) : (array += space);
  }
  if (i % 2 === 0) {
    array2 += array.split('').reverse().join('') + '\n';
  } else {
    array2 += array + '\n';
  }
}

console.log(array2);

for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n);
}

function min(a, b) {
  return Math.min(a, b);
}

function min2(a, b) {
  return a < b ? a : b;
}

console.log(min2(0, 10));
// → 0
console.log(min2(0, -10));
// → -10

const array1 = [2, 3, 1];

console.log(Math.min(...array1));

function isEven(num) {
  if (num === 0) return true;
  if (num === 1) return false;
  else if (num < 0) return -num;
  else isEven(num - 2);
}
console.log('55', isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

function countBs(string) {
  const stringArray = string.split('');
  console.log(stringArray);
  let count = 0;
  stringArray.map((item) => {
    if (item === 'B') {
      count++;
    }
  });
  return count;
}

console.log(countBs('BBC'));
// → 2

// for (item of stringArray) {
// }

function countChar(string, char) {
  const stringArray = string.split('');
  console.log(stringArray);
  let count = 0;
  stringArray.map((item) => {
    if (item === char) {
      count++;
    }
  });
  return count;
}

function range(start, end, step) {
  let num = [];
  if (step === '') step = 1;
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      num.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      num.push(i);
    }
  }
  return num;
}

// let num = range(1, 10, 2);
function sum(num) {
  let sum = 0;
  for (n of num) {
    sum += n;
  }

  return sum;
}

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10, -2));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10, -2)));
// → 55

function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[array.length - 1 - i]);
  }
  return newArray;
}

console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(arrayValue) {
  for (let i = 0; i < Math.floor(arrayValue.length / 2); i++) {
    // let old = array[i];
    // array[i] = array[array.length - 1 - i];
    // array[array.length - 1 - i] = old;

    [arrayValue[i], arrayValue[arrayValue.length - 1 - i]] = [
      arrayValue[arrayValue.length - 1 - i],
      arrayValue[i],
    ];
  }
  return arrayValue;
}

let arrayValue = [1, 2, 3, 4, 5];
arrayValue = ['A', 'B', 'C'];
console.log(reverseArrayInPlace(arrayValue));

function arrayToList(array) {
  let listNest = null;
  for (let i = 0; i < array.length; i++) {
    listNest = { value: array[array.length - 1 - i], rest: listNest };
  }

  return listNest;
}
// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = {value: array[i], rest: list};
//     }
//     return list;
//   }

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log('185', arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += 's';
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, 'can', 'chickpeas');
  ingredient(0.25, 'cup', 'tahini');
  ingredient(0.25, 'cup', 'lemon juice');
  ingredient(1, 'clove', 'garlic');
  ingredient(2, 'tablespoon', 'olive oil');
  ingredient(0.5, 'teaspoon', 'cumin');
};

hummus(2);
///////////////////closure//////////////
function greet(who) {
  console.log('Hello ' + who);
}
greet('Harry');
console.log('Bye');

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
// console.log(chicken() + ' came first.');
// // → ??

function greet(whattosay) {
  return function (name) {
    console.log(whattosay + ' ' + name);
  };
}

greet('hi')('tony');

let sayhi = greet('hi');

sayhi('tony');

function buildFunctions() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  console.log(arr);
  return arr;
}

let fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap1(2));
console.log(wrap2(5));
// → 2

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
twice(5);
console.log(twice(5));
// → 10

function printFarmInventory(cows, chickens) {
  //num to string
  let cowString = String(cows);
  console.log(cowString);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  function compose(fn1, fn2) {
    (x) => fn2(fn1(x));
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

function zeroPod(number, keta) {
  let string = String(number);
  while (string.length < keta) {
    string = '0' + string;
  }
  return string;
}

/*
Declare a function 'compose'.

'compose' takes two functions as inputs: 'funcA' and 'funcB'. 
Assume 'funcA' and 'funcB' each take one input 'x'.

'compose' returns a new function. This function takes in one input 'x'.

When invoked, this returned function returns the result of passing 
the input 'x' from 'funcA' to 'funcB'.
*/

// Your code here

function multiplyTwo(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}
// const compose = (fn1, fn2) => (x) => fn2(fn1(x));

// const compose = function (f, g) {
//   return function (x) {
//     return g(f(x));
//   };
// };

// function compose(fn1, fn2) {
//   (x) => fn2(fn1(x));
// }
// const addmulti = (multiplyTwo, addOne) => addOne(multiplyTwo());

// const compose = (x) => addmulti(x);

// console.log('346', fnCo(5));

// function compose(fn1, fn2) {
//   (x) => fn2(fn1(x));
// }

// add10 = (num) => num + 10;
// add100 = (num) => num + 100;
// const compose = (num) => add10(add100(num));
// function addOne(multiplyTwo, x) {
//   x = multiplyTwo(x);
//   return x + 1;
// }

// console.log(addOne(multiplyTwo, 5));
// Tests

// function multiplyTwo(x) {
//   return x * 2;
// }

// function addOne(x) {
//   return x + 1;
// }

// const foo = compose(multiplyTwo, addOne);
// console.log(foo);
// let actual = foo(5);
// console.log(actual);
let expected = 11;

// if (actual === expected) {
//   console.log('Yay!');
// } else {
//   console.log('Try again!');
// }

// actual = foo(100);
// expected = 201;

// if (actual === expected) {
//   console.log('Yay!');
// } else {
//   console.log('Try again!');
// }

const oneWOrd = function (str) {
  return str.replace(/ /g, '').toLowercase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformar = function (str, fn) {
  console.log(`Original string ${str}`);
  console.log(`transformed strig: ${fn(str)}`);
  console.log(`transformed by : ${fn.name}`);
};

transformar('Javascript is the best!', upperFirstWord);

const high5 = function () {
  console.log('✋');
};

['jon', 'martha', 'adam'].forEach(high5);

const greet2 = function (greeting) {
  return function (name) {
    console.log(`${greeting}${name}`);
  };
};

const greet3 = (greeting) => (name) => console.log(`${greeting}${names}`);
const greeterHey = greet2('hey');

greeterHey('Jonas');
greeterHey('steven');
greet2('helllooo')('jonas');
////////////////////////////////////////
let numbers = [1, 2, 3, 4];

function square(x) {
  (x) => x * x;
}

let squaredNumbers = numbers.map(square);

console.log(squaredNumbers);
// [1, 4, 9, 16]

function multiplier(x) {
  return function (f) {
    return x * f;
  };
}

let multiplyByTwo = multiplier(2);

console.log(multiplyByTwo(10));
// 20

// [Function: returnedFunc]

function getNumber() {
  return 5;
}
function invokeSomething(fn) {
  return fn();
}
// invokeSomething(getNumber()); // Choice A
invokeSomething(getNumber); // Choice B

const object = {
  a: 1,
  b: 2,
  c: 3,
};

let key = 'a';
console.log('464', object.key);
console.log('465', object[key]);
console.log('466', object.a);
console.log('467', object['a']);

function sayHi() {
  console.log('470', 'Hello');
  return 'Hi';
}
let foo = sayHi();
console.log('471', foo);
console.log('472', foo);

function foo2() {
  console.log('foo');
  bar();
}
function bar() {
  console.log('bar');
}
function baz(fn) {
  console.log('baz');
  fn();
}
baz(foo2);

function noReturn() {
  console.log('Print!');
}
let whatsMyReturn = noReturn();
console.log(whatsMyReturn);

function getFunction() {
  return function () {
    return 'This is my function’s function output!';
  };
}

getFunction();
getFunction()();
let whatIsThis = getFunction();
console.log(typeof whatIsThis);
whatIsThis();

console.log(getFunction());
console.log(getFunction);

console.log(getFunction()());

console.log(whatIsThis());

function greetDevelopers(list) {
  list.map(
    (item) =>
      (item.greeting = `Hi ${item.firstName},
  what do you like the most about ${item.language}?`)
  );
  return list;
}

var list1 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];
console.log(greetDevelopers(list1));

// multiplyAll([1, 2, 3])(2)

const multiplyAll = (array) => {
  return (e) => array.map((item) => item * e);
};
console.log(multiplyAll([1, 2, 3])(2));

var make_lazy2 = function (fn, num, num2) {
  // TODO: implement this function

  return fn(num, num2);
};
// var double = function (n) {
//   return n * 2;
// };

// var lazy_value = make_lazy(double, 5);
// console.log(make_lazy(double, 5));
// console.log(lazy_value);

// var add = function (a, b) {
//   return a + b;
// };

// var lazy_sum = make_lazy(add, 2, 3);

// console.log(lazy_sum);

function FindIntersection(strArr) {
  let arrOne = strArr[0].split(', ');
  let arrTwo = strArr[1].split(', ');

  // let result = [];

  // for(let i = 0; i < arrOne.length; i++) {
  //   if(arrTwo.indexOf(arrOne[i]) !== -1) {
  //     result.push(arrOne[i]);
  //   }
  // }

  // result = result.length > 0 ? result.join() : false;
  // // code goes here
  // return result;

  return arrOne.reduce((accumulator, currentValue) => {
    if (arrTwo.includes(currentValue) === true) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}
console.log('622', FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']));

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.reduce((acc, cur) => {
    if (geese.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter((b) => !geese.includes(b));
}

const compose = (fn1, fn2) => (x) => fn2(fn1(x));

const compose = function (f, g) {
  return function (x) {
    return f(g(x));
  };
};



function compose(fn1, fn2) {
 return (x) => fn2(fn1(x));
}


/*
Declare a function 'compose'.

'compose' takes two functions as inputs: 'funcA' and 'funcB'. 
Assume 'funcA' and 'funcB' each take one input 'x'.

'compose' returns a new function. This function takes in one input 'x'.

When invoked, this returned function returns the result of passing 
the input 'x' from 'funcA' to 'funcB'.
*/

// Your code here

function compose(funcA, funcB) {
  return function 
}

// Tests

function multiplyTwo(x) {
  return x * 2;
}

function addOne(x) {
  return x + 1;
}

const foo = compose(multiplyTwo, addOne);

let actual = foo(5);
let expected = 11;

if (actual === expected) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}

actual = foo(100);
expected = 201;

if (actual === expected) {
  console.log("Yay!");
} else {
  console.log("Try again!");
}