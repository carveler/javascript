const numbers = [12, 33, 56, 88, 309, 1, 23];

const numLess30 = numbers.filter((num) => {
  return num < 30;
});

console.log(numLess30);

const odds = numbers.filter((num) => {
  return num % 2 === 1;
});

console.log(odds);
