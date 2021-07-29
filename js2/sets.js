let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
let o = { a: 1, b: 2 };
mySet.add(o);
console.log("9", mySet);
mySet.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet.has(1); // true
mySet.has(3); // 3 は集合にないため、false
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // Set から 5 を削除
mySet.has(5); // 5 が削除されているため false

mySet.size; // 要素を 1 つ削除しているため 4

console.log(mySet);
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

const arr = [1, 2, 3, 4, 5];
console.log(arr);

const set = new Set();

set.add("fred");

console.log(set);

const set3 = new Set(arr);
console.log("1", set3);
const [...arr3] = set3;
console.log("2", arr3);
const [...arr2] = new Set(arr);
console.log("3", arr2);
