const arr = ["harry", "fred", "max", "tom"];

const arr2 = arr.map((name, index) => `${name.toUpperCase()} ${index}`);
console.log(arr2);

const arr4 = arr.map((name, index, array) => array);
console.log(arr4);

const arr3 = arr.map((name) => {
  return name.length;
});

console.log(arr3);
