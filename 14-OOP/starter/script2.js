'use strict';

//Challenge 1
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.name} speed: ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.name} speed: ${this.speed}`);
};

const bmw = new Car('BMW', 120)
const merc = new Car('Mercedes', 95)

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

merc.brake();


//Challenge 2
class Car2 {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate(){
    this.speed += 10;
    console.log(`${this.name} speed: ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.name} speed: ${this.speed}`);
  }
  get speedUS() {
    return this.speed/1.6;
  }

  set speedUS(speed) {
    this.speed = speed*1.6;
  }
}

const ford = new Car2('Ford', 120);
ford.speedUS = 120;
ford.accelerate();

//Challenge 3
const EV = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.name} is going at ${this.speed} with charge ${this.charge}%`)
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();



