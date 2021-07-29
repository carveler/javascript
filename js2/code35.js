//1/////////////////////////////////

function isRange(num, obj) {
  console.log(obj.max);
  if (num >= obj.min && obj.max <= num) {
    console.log(obj.max);

    return true;
  } else return false;
}
console.log(isRange(4, { min: 6, max: 10 }));

const minmax = (num, object) => {
  if (num >= object.min && num <= object.max) {
    return true;
  } else {
    return false;
  }
};

console.log(minmax(4, { min: 0, max: 5 }));
///////////////////////////////////
let scrableScore = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
  { tile: 'E', score: 1 },
];
const maxScore = (obj) => {
  return scrableScore
    .map((item) => item.score)
    .reduce((acc, cur) => acc + cur, 0);
};

console.log(maxScore(scrableScore));

function calcTilesScore(arrTiles) {
  // let max = 0;
  // arrayOfTiles.map((tile) => (max += tile.score));
  // return max
  // or
  return arrayOfTiles.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0);
}
///3////////////////////////////////
const isEmpty = (obj) => {
  let newArrLength = Object.keys(obj).length;

  return newArrLength > 0 ? false : true;
};

console.log(isEmpty({ a: 1 }));
////4///////////////////////////////

const countLetters = (str) => {
  let strArr = str.split('');
  console.log(strArr);
  let result = {};

  strArr.map((letter) => {
    // console.log('letter', letter);
    // console.log(result);
    // result[letter] = 1;
    console.log(result[letter]);
    if (result[letter]) {
      return result[letter]++;
    } else result[letter] = 1;
  });

  return result;
};

let someString = 'onomatopoeia';

const letterOccurrenceCounter = (string) => {
  const occurrencesMap = {};

  for (let i = 0; i < string.length; i++) {
    if (!occurrencesMap[string[i]]) {
      occurrencesMap[string[i]] = 1;
    } else {
      occurrencesMap[string[i]]++;
    }
  }

  return occurrencesMap;
};

console.log(letterOccurrenceCounter(someString)); // { o: 4, n: 1, m: 1, a: 2, t: 1, p: 1, e: 1, i: 1 }

//5/////////////////////////////////

const freeShipping = (obj) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur) > 50;
};
console.log(
  freeShipping({ Wool: 13.99, 'Knitting Needles': 15.5, Bag: 13.99 })
);

///6////////////////////////////////

const programming = {
  languages: ['JavaScript', 'Python', 'Ruby'],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke',
};

programming.languages.push('Go');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

programming.languages.map((item) => console.log(item));

for (let i = 0; i < programming.languages.length; i++) {
  console.log(programming.languages[i]);
}

for (let key in programming) {
  console.log(key);
}

let arr = [];
for (let key in programming) {
  console.log('132', programming[key]);
  arr.push(programming[key]);
}
console.log(arr);

programming;

console.log(programming);
///////////////////////////////////
