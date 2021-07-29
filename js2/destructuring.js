const obj1 = {
  name: "amax",
  age: "34",
  eyecolor: "blue",
};

console.log(obj1);
const { name, age, eyecolor } = obj1;

console.log(name);

const arr1 = [1, 2, 3, 4];

const [a, b, c, d] = arr1;
console.log(a);

const obj1 = {
  name: "alan",
  age: "39",
};

const { name, age } = obj1;

const alan2 = `${name} is ${age} old`;

console.log(alan2);
