'use strict';

//Construction functions
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

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'CS');
mike.introduce();
console.log(mike)
mike.calcAge();
Student.prototype.constructor = Student;

const arr = [1, 2, 3, 1, 2, 3, 12, 6];
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique())


//ES6 classes
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
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not full name`);
    }
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`Im ${2037 - this.birthYear}, but Im student`);
  }
}

const martha = new StudentCl('Martha', 2012, 'CS');
martha.introduce();
martha.calcAge();

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

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
console.log(jay)
jay.introduce();

//Another class
class Account {
  //public fields
  locale = navigator.language;

  //private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

//Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }



  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  //private methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.getMovements());

//chaining
acc1.deposit(300).withdraw(100).requestLoan(2000);