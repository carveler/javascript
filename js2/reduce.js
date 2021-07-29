const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

const movies = [
  "back to the future",
  "godfather",
  "alian",
  "the shining",
  "load of the ring",
];

const first = movies.reduce((acc, cur) => (acc < cur ? acc : cur));

console.log(first);
