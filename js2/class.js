class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  changecolor(color) {
    this.color = color;
    return this;
  }
  showcolor() {
    return this.color;
  }
}

const car = new Car("toyota", "black");
const car2 = new Car("nissan", "white");

//method chaining
car.showcolor();
car.changecolor("grey").showcolor;

class Supercar extends Car {
  constructor(model, color, turbo, heatedSeats) {
    super(model, color);
    this.turbo = turbo;
    this.heatedSeats = heatedSeats;
  }
  changeTurbo(turbo) {
    this.turbo = turbo;
  }
}

const superCar = new Supercar("ferrari", "red", true, false);
console.log(superCar);

superCar.changeTurbo("false");
console.log(superCar);

superCar.changeTurbo("false");

console.log(superCar);

//not working
// const Car2 = (model, color) => {
//   this.model = model;
//   this.color = color;
// };

// const car = new Car2("ford", "red");

function Car2(model, color) {
  this.model = model;
  this.color = color;
}

Car2.prototype.showColor = function () {
  console.log(this.color);
};
const car3 = new Car2("ford", "red");
console.log(car3);

car3.showColor();

const arr = [1, 2, 3, 4, 5];

Array.prototype.showElement2 = function () {
  console.log(this[2]);
};

arr.showElement2();
