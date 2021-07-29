const func = function () {
  console.log("I am a function");
};

const arrow1 = () => console.log("I am an arrow function");

const arrow2 = () => {
  console.log("dfnerjej");
};

const a = (num) => {
  return num + 10;
};

const ab = (num) => num + 10;
func();
arrow1();
arrow2();

let b = a(10);

// console.log(b);

a(10);
