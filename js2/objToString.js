const obj1 = {
  name: "harry",
  age: 45,
  eyecolor: "blue",
};

console.log(obj1);

const obj2 = JSON.stringify(obj1);

console.log(obj2);

const obj3 = JSON.parse(obj2);

console.log(obj3);
