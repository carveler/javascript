//function declaration
de();

function de() {
  console.log("hello");
}
//expression
const ex = function () {
  console.log("hi");
};
const ex2 = function () {
  console.log("oh");
};
ex(); //cannot call no hoisting
ex2();

const hello = function (parameter = "bob") {
  console.log(`hello ${parameter}`);
};
hello();
hello("jon");

const calcArea = function (radius) {
  let area = Math.PI * radius ** 2;
  return area;
};

const area = calcArea(5);
console.log(area);

const rest = function (name, ...friends) {
  console.log(friends);
  console.log(`${name} is funny`);
  console.log(friends.map((friend) => `hello ${friend}`));
};

rest("bob", "jon", "max", "tim");
