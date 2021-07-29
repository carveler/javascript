///Function composition
//trying to use function composition for following code
// new Array(1, 2, 3, 4)
// .filter(x => x % 2 === 0)
// .reduce((mem, x) => mem + x)

const { LOADIPHLPAPI } = require('dns');

////here is my code
// const array = [1, 2, 3, 4];

// const filterEven = (x) => x % 2 === 0;

// //////TypeError: x.reduce is not a function
// const addSum = (x) => x.reduce((acc, cur) => acc + cur);

// const compose = (fn1, fun2) => (x) => fun2(fn1(x));

// const foo = compose(filterEven, addSum);

// let see = foo([1, 2, 3, 4]);

// console.log(see);

// ///////following  code works!

const isEven = (x) => x % 2 === 0;
const filterOutOdd = (collection) => collection.filter(isEven);

const add = (x, y) => x + y;
const sum = (collection) => collection.reduce(add);

const sumEven = (collection) => sum(filterOutOdd(collection));

console.log(sumEven([1, 2, 3, 4]));

///////////////////////////codewar    https://www.codewars.com/kata/52567c56cb6ac86b56000516/train/javascript

function Adam(x) {
  return 'Adam' + x;
}
function has(x) {
  return ' has' + x;
}
function a(x) {
  return ' a' + x;
}
function dog() {
  return ' dog';
}
function The(x) {}
function name(x) {}
function of(x) {}
function the(x) {}
function is(x) {}
function also(x) {}

// console.log(Adam(has(a(dog()))));
// console.log(The(name(of(the(dog(is(also(Adam()))))))));

function accum(s) {
  // your code

  let array = s.toUpperCase().split('');
  console.log('65', array);

  let newArray = array.map((letter, index) => {
    let result = letter;

    for (let i = 1; i <= index; i++) {
      result += letter.toLowerCase();
    }
    return result;
  });
  let newString = newArray.join('-');
  return newString;
}

console.log(accum('abcd'));

function accum2(s) {
  return [...s]
    .map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index);
    })
    .join('-');
}

function getCount(str) {
  let vowelsCount = 0;
  let vowels = 'aeiou';
  let stringArray = [...str];

  let vowelsArray = [...vowels];

  stringArray.map((letter) => {
    if (vowelsArray.includes(letter)) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

console.log(getCount('chai'));

function getCount(str) {
  return str.split('').filter((c) => 'aeiouAEIOU'.includes(c)).length;
}

function getMiddle(s) {
  //Code goes here!
  let length = s.length;
  let half = length / 2 - 1;

  if (length % 2 === 0) {
    return s.slice(half, half + 2);
  }
  if (length % 2 === 1) {
    return s[Math.floor(length / 2)];
  }
}

function highAndLow(numbers) {
  let array = numbers.split(' ');
  let arrayNum = array.map((num) => Number(num));
  console.log(arrayNum);
  let maxNum = Math.max(...arrayNum);

  let minNum = Math.min(...arrayNum);

  let minMax = maxNum + ' ' + minNum + '';

  return minMax;
}
function getFirstPython(list) {
  const python = list.filter((person) => {
    return person.language === 'Python';
  });
  console.log(python);
  return python.length === 0
    ? 'There will be no Python developers'
    : python[0].firstName + ', ' + python[0].country;
}

function getFirstPython(list) {
  const dev = list.find((x) => x.language === 'Python');
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : 'There will be no Python developers';
}

function cubeOdd(arr) {
  arr
    .filter((num) => typeof num === number && num % 2 === 1)
    .reduce((acc, cur) => acc + cur);
}

function cubeOdd(arr) {
  const filOdd = arr.filter((num) => num % 2 === 1 || num % 2 === -1);
  //   const filNan = arr.filter((num) => typeof num !== 'number');
  const cubing = filOdd.reduce((acc, cur) => acc + cur ** 3, 0);
  console.log(filOdd);
  isNaN(cubing) ? undefined : cubing;
}

function cubeOdd(arr) {
  arr = arr.filter((num) => {
    return num % 2 != 0;
  });
  arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
  return isNaN(arr) ? undefined : arr;
}

function cubeOdd(arr) {
  const filOdd = arr.filter((num) => num % 2 !== 0);
  //   const filNan = arr.filter((num) => typeof num !== 'number');
  const cubing = filOdd.reduce((acc, cur) => acc + cur ** 3, 0);
  console.log(filOdd);
  return isNaN(cubing) ? undefined : cubing;
}

function isRubyComing(list) {
  // thank you for checking out my kata :)
  const isRuby = list.filter((person) => person.language === 'Ruby').length;

  return isRuby === 0 ? false : true;
}

function isRubyComing(list) {
  return list.some((e) => e.language === 'Ruby');
}

function countLetters(string) {
  //   let letterCount = {};
  //   for (let i = 0; i < string.length; i++) {
  //     if (letterCount[string[i]] === undefined) {
  //       letterCount[string[i]] = 1;
  //     } else {
  //       letterCount[string[i]]++;
  //     }
  //   }
  //   return letterCount;

  function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    let answer = {};
    list.map((person) => {
      if (answer[person.language] === undefined) {
        answer[person.language] = 1;
      } else {
        answer[person.language]++;
      }
    });

    return answer;
  }
}

function countLanguages(list) {
  return list.reduce(function (s, c) {
    if (c.language in s) s[c.language]++;
    else s[c.language] = 1;

    return s;
  }, {});
}

function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  let newArray = list.map((person) => person.language);
  console.log(newArray);

  return newArray;
}

///////////////////////////////////////////
function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  let newArray = list.map((person) => person.language);
  console.log(newArray);

  const allSame = () => {
    for (item of newArray) {
      if (item === newArray[0]) {
        return true;
      } else false;
    }
  };
  return allSame();
}

const obj = { a: 65, b: 33, c: 24, d: 55 };
// const obj = [2, 3, 4, 5];
console.log(Object.values(obj));

function filter2(obj, fn1) {
  const newArray = Object.values(obj);
  return newArray.map((num) => fn1(num));
}

function filter(n) {
  if (n % 2 === 0) return n;
  else return;
}

console.log('266', filter2(obj, filter));

// use filter() function. Let say we have array of object.
let arr = [
  { name: 'John', age: 30 },
  { name: 'Grin', age: 10 },
  { name: 'Marie', age: 50 },
];
//Now I want an array in which person having age more than 40 is not
//there, i.e, I want to filter it out using age property. So
//   //filter function expects a function if it return true then it added
//into new array, otherwise it is ignored. So new Array would be
/* [
      {name: "John", age: 30},
        {name: "Grin", age: 10},
     ]
  */

console.log(arr[0]);
