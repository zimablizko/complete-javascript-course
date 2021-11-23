'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {

  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123')

const flight = 'KF232';
const jonas = {
  name: 'wewe wewe',
  passport: 232312121
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'fd4343';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 232312121) {
    alert('Check In')
  } else {
    alert('Wrong pass')
  }
}

// checkIn(flight, jonas);
// console.log(flight)
// console.log(jonas)

//High-order functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`)
  console.log(`Transformed by: ${fn.name}`)
}

transformer('Javasctript is the best!', upperFirstWord);
transformer('Javasctript is the best!', oneWord);

//function return function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey')
greeterHey('KEK')
greet('Hello')('LUL')

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet2('Hello')('LUL')

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}, name`})
  }
};

lufthansa.book(239, 'Kek Pekavich');
lufthansa.book(569, 'Pepe Pepovna');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],

};

const book = lufthansa.book;
// book(23, 'Meme Memovish');
//Call method
book.call(eurowings, 23, 'Meme Memovna')
book.call(lufthansa, 231, 'Meme 2 Memovna')
//Apply method
const flightData = [231, 'Meme 3 Memovna'];
book.apply(eurowings, flightData)
//Bind method
const bookEW = book.bind(eurowings);
bookEW(3, 'Steven KEKE')
const bookEW23 = book.bind(eurowings, 23);
bookEW23('wewe wewe');
// WIth event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100))

const newAddTax = function (rate) {
  return function (value) {
    return value + value * rate;
  }
}

const newAddVAT = newAddTax(0.23);
console.log(newAddVAT(100))

//Challenge 1

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));
    if (answer>=0 && answer<=3) {
      this.answers[answer]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers)
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`)
    }
  }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

const poll2 = {
  answers: [5, 3, 2]
}
poll.displayResults.call(poll2, 'string')
poll.displayResults.call({answers: [1,4,6,7,8]}, 'string')*/

const runOnce = function() {
  console.log("This will never run again");
};
runOnce();

(function () {
  console.log("This will never run again");
})();

(() => console.log("This will ALSO never run again"))();

//Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
booker();
booker();

//Example 1
let f;

const g = function (){
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
}

g();
f(); //46

h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function (){
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`each group ${perGroup} passengers`)
  }, wait * 1000)

  console.log(`will start boarding in ${wait} seconds`)
}

boardPassengers(180, 3);

//Challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  })
})();