function birthdayCakeCalender(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  return sortedArr.filter((num) => sortedArr[0] === num).length;
}

////////////////////////////////////////////////

let array = [9, 3, 5, 1, 7];
function minMaxSum(arr) {
  //   let min = Math.min(...arr);
  //   let max = Math.max(...arr);

  //   let sum = array.reduce((acc, cur) => acc + cur);

  //   let maxSum = sum - min;
  //   let minSum = sum - max;
  //   return [maxSum, minSum];

  let sortedArr = arr.sort((a, b) => a - b);
  let minSum = sortedArr.slice(0, -1).reduce((acc, cur) => acc + cur);
  let maxSum = sortedArr.slice(1).reduce((acc, cur) => acc + cur);
  return [maxSum, minSum];
}
console.log(minMaxSum(array));

////////////////////////////////////////////////

function birthdayCakeCalender2(arr) {
  let maxValue = arr.reduce((acc, cur) => {
    if (acc > cur) {
      return acc;
    } else return cur;
  }, arr[0]);
  return maxValue;
}

console.log(birthdayCakeCalender2([4, 4, 1, 3]));

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let reformattedArray = kvArray.map((obj) => {
  let newObj = {};
  newObj[obj.key] = obj.value;
  return newObj;
});

// let change = {};
// change["key"] = value;

let kvArray2 = [
  { name: "red", age: 10, money: 1 },
  { name: "blue", age: 20, money: 10 },
  { name: "green", age: 30, money: 25 },
];

let reformattedArray2 = kvArray2.map((obj) => {
  const newObj = { ...obj };
  newObj.money += 5;
  newObj.age += 1;
  return newObj;
});

console.log(reformattedArray2);
console.log(kvArray2);

let reformattedArray3 = kvArray2.map(({ age, money, name }) => {
  return { name, age: age++, money: (money += 5) };
});
let reformattedArray4 = kvArray2.map(({ age, money, ...obj }) => {
  return { ...obj, age: age++, money: (money += 5) };
});

const person = { name: "red", age: 10, money: 1 };
// let { age, money, name } = person;
let { age, money, ...ll } = person;
console.log(age);
console.log(ll);
