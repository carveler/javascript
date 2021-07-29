// Create a class called Vehicle
// It should have three properties. Model, colour, maxSpeed
// It should have four methods. changeColour, showColour, changeMaxSpeed and showMaxSpeed
// Create three instances of land based vehicles
// using the methods described chain the methods to change the colour, show the colour, change max speed and show the max speed
// create another class called AirVehicle
// This class should inherit from Vehicle
// Add a property to this class called wingCount
// create two methods to this class called changeWingCount and showWingCount
// create two instances of AirVehicle

class Vehicle {
  constructor(model, color, maxspeed) {
    this.model = model;
    this.color = color;
    this.maxspeed = maxspeed;
  }
  changeColor(color) {
    console.log(`${this.model}'s color is ${this.color} ${this.maxspeed}`);
    this.color = color;
    return this;
  }
  showColor() {
    console.log(this.color);
    return this;
  }

  changeMaxSpeed(maxspeed) {
    this.maxspeed = maxspeed;
    return this;
  }

  showMaxSpeed() {
    console.log(this.maxspeed);
    return this;
  }
}

const car = new Vehicle("toyota", "red", "300km/hr");
console.log("1", car);
car.showColor();
console.log("2", car.showColor());
car.changeMaxSpeed("100km/hr");
console.log("4", car.showMaxSpeed());
console.log("5", car.changeColor("blue"));
car.changeColor("red").changeMaxSpeed("150km/hr");
console.log("#5", car.changeColor("red").changeMaxSpeed("150km/hr"));
class AirVehicle extends Vehicle {
  constructor(model, color, maxspeed, wingCount) {
    super(model, color, maxspeed);
    this.wingCount = wingCount;
  }
  changeColor(color) {
    super.changeColor(color);
    // console.log("6", `${this.model}'s color is ${color} ${this.maxspeed}`);
    return this;
  }

  changeWingCount(wingCount) {
    this.wingCount = wingCount;
    return this;
  }

  showWingCount() {
    console.log(this.wingCount);
    return this;
  }
}

let a = new AirVehicle("honda", "red", "100", 1);
a.changeColor("green");
console.log("10", a);
console.log("7", a.color);
a.changeColor("yellow");
console.log("8", a.changeWingCount(2));
console.log("9", a);
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // ゲッター
  get area() {
    return this.calcArea();
  }
  // メソッド
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

square.calcArea();
console.log(square.calcArea());

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

class Car {
  constructor() {
    this.fuel = 0;
    this.distance = 0;
  }
  move() {
    if (this.fuel < 1) {
      throw new RangeError("Fuel tank is depleted");
    }
    this.fuel--;
    this.distance += 2;
  }
  addFuel() {
    if (this.fuel >= 60) {
      throw new RangeError("Fuel tank is full");
    }
    return this.fuel++;
  }
}

class Tesla extends Car {
  move() {
    super.move();
    return (this.distance += 4);
  }
}

const car12 = new Tesla();
car12.addFuel();
car12.addFuel();
console.log(car12.addFuel());
car12.move();
console.log(car12.move());
console.log(car12.distance);
// <- 6

class Car13 {
  constructor(speed) {
    this.speed = speed;
  }
  dublespeed(speed) {
    this.speed = speed * 2;
  }
}
class Tesla2 extends Car13 {
  constructor(speed) {
    return super(speed * 2);
  }
  dublespeed(speed) {
    super.dublespeed(speed);
    return this.speed;
  }
}
const bb = new Car13(150);
const aa = new Tesla2(100);
console.log("aa.speed", aa.speed);
console.log("bb", bb.speed);
console.log(aa.dublespeed(100));
