const { objectExpression } = require('@babel/types');

const person = {
  a: 'jon',
  b: 'tom',
  c: 'yumi',
  d: 'julia',
};
console.log(Object.entries(person));
// [ [ 'a', 'jon' ], [ 'b', 'tom' ], [ 'c', 'yumi' ], [ 'd', 'julia' ] ]
Object.entries(person);
for (let key in person) {
  console.log(`${key}:${person[key]}`);
}
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
///2//////////////////////////////////////
getObjectValues = {
  choice1: 'tea',
  choice2: 'coffee',
  choice3: 'milk',
};
console.log(Object.values(getObjectValues));
//3/////////////////////////////////////
let first = { firstName: 'John' };
let last = { lastName: 'Smith' };

function mergeObjects(a, b) {
  //   let merged = {};
  //   for (let key in a) {
  //     merged[key] = a[key];
  //   }
  //   for (let key in b) {
  //     merged[key] = b[key];
  //}
  let mergeObj = { ...a, ...b };
  console.log(mergeObj);
  let merged = Object.assign(a, b);

  return merged;
}

console.log(mergeObjects(first, last));
//4//////////////////////////////////////
let person2 = {
  name: 'John',
  job: 'teacher',
};
function switchKeyValue(obj) {
  let copy = {};

  for (key in person2) {
    let switchValue = obj[key];
    copy[switchValue] = key;
  }

  return copy;
}

console.log(switchKeyValue(person2));
////////////////////////////////////////

////////////////////////////////////////

////////////////////////////////////////
let myObject = { a: 1, b: 2, c: 3 };

////////my object 2倍に
let doubleObject = {};
for (let key in myObject) {
  myObject[key];
  doubleObject[key] = myObject[key] * 2;
}

console.log('76', doubleObject);

Object.keys(myObject).map(function (key, index) {
  myObject[key] *= 2;
});

console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 }
let myObject2 = { a: 1, b: 2, c: 3 };

for (var key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    myObject[key] *= 2;
  }
}

console.log(myObject2);
// { 'a': 2, 'b': 4, 'c': 6 }
