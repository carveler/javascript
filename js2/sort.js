const arr = ["javascript", "python", "css", "html"];
console.log(arr.sort());

const numbers = [23, 44, 66, 88, 1, 3, 0, 6];

console.log(numbers.sort((a, b) => a - b));


console.log(numbers.sort((a, b) => console.log(a)));
