'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
}

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 1961);
console.log(jonas);
// jonas.calcAge();
console.log(jonas instanceof Person)

Person.hey = function () {
  console.log('hey!');
};

Person.hey();
//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

jonas.calcAge();
Person.prototype.species = 'Homo';
console.log(jonas, matilda)
console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.hasOwnProperty('species'))
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 1, 2, 3, 12, 6];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique())

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

class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance method
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('hey!');
  }
}

const jessica = new PersonCl('Jessica Kek', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.fullName);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// }
jessica.greet();

PersonCl.hey();
PersonCl.hey();
//getters setters
const account = {
  owner: 'jonas',
  movements: [200, 300, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  }
}

console.log(account.latest);
account.latest = 45;
console.log(account)

//Object.Create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);
sarah.calcAge();

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
