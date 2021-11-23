'use strict';


const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will
    be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  }
};

/*restaurant.orderDelivery({
  time: '22:30',
  address: 'Pepega street',
  mainIndex: 2,
  starterIndex: 2
})

restaurant.orderDelivery({
  address: 'Pepega street'
})*/

//destructuring array
/*let [main, , secondary] = restaurant.categories;
console.log(main, secondary);*/

//destructuring objects
/*
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const {
  menu = [],
  starterMenu: starters = []
} = restaurant;
console.log(menu, starters);

// Mutating vars
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);
console.log(a,b);

//Nested objects
const {fri: {open, close}} = openingHours;
console.log(open, close);*/

//Spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
//console.log(newArr);
//console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
//console.log(newMenu);

//COpy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Iterables: arrays, strings, maps, sets NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
//console.log(letters);

/*const ingredients = [
  prompt('Lets make pasta! Ing 1?'),
  prompt('Ing 2? '),
  prompt('Ing 3? ')
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);*/

//Objects
/*
const newRestaurant = {...restaurant, founder:'Pepega'};
console.log(newRestaurant);
const restaurantCopy = {...restaurant};*/

//1 DESTRUCTURING
//REST operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
//console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(pizza, risotto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
//console.log(sat, weekdays);

//2 FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  //console.log(sum);
};
add(5, 6, 4, 2);

const x = [1, 2, 3];
add(...x);

//restaurant.orderPizza('onion', 'mushroom', 'spinach')

//short Circuiting
/*
console.log(3 || 'Test');
console.log('' || 'Test');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || 'Hello' || null);
*/

const guests1 = restaurant.numGuests || 10;
//console.log(guests1);

//AND
//console.log(0 && 'Test'); //0
//console.log(7 && 'Test'); //Test
//console.log('Test' && 32 && null && 32); //null

//restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

//nullish coalescing operator (null, undefined)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
//console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
//console.log(guestsCorrect);

//CHALLENGE

const game1 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = game.players[0];
// const players2 = game.players[1];
/*const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
const {team1:team1, x:draw, team2:team2} = game.odds;
console.log(team1, draw, team2);
const printGoals = function (...playerNames) {
  console.log(`Players: ${playerNames}`, `Score: ${playerNames.length}`)
}
printGoals('Davies', 'Muller', 'Lewandoeski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('team1')
team1 > team2 && console.log('team2')*/

//Loop for-of
/*
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu1) console.log(item);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
console.log([...menu.entries()]);
*/

//Optional chaining
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`)
}

console.log(restaurant.order?.(1, 0) ?? 'Method doesnt exist');
console.log(restaurant.orderTest?.(1, 0) ?? 'Method doesnt exist');

const users = [
  {name: 'PEpega', email: 'ere@mail.ru'}
];
console.log(users[0]?.name ?? 'User array empty');

//Looping property names
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

//property values
for (const hours of Object.values(openingHours)) {
  console.log(hours);
}

//entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Challenge 2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
for (const [num, name] of game.scored.entries()) {
  console.log(`Goal ${num + 1}: ${name}`);
}

//2
let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
avg /= Object.values(game.odds).length;
console.log(avg);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[team] ? 'victory ' + game[team] : 'draw'}: ${odd}`);
}

//bonus
const scorers = {};
for (const name of game.scored) {
  scorers[name] = scorers[name] ? scorers[name]++ : 1;
}
console.log(scorers);

//Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pizza', 'Risotto']);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic');
ordersSet.delete('Pasta');
console.log(ordersSet);
ordersSet.clear();

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//Maps
const rest = new Map();
rest.set('open', 11)
rest.set('close', 23)
rest.set(true, 'we are open')
rest.set(false, 'we are closed');

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('open'))

//Quiz app
const question = new Map([
    ['question', 'What is the best prog lang in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct 🎈'],
    [false, 'Try again']
  ]
)
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key}: ${value}`)
  }
}
//const answer = Number(prompt('Your answer: '));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')))

//Convert map to array
console.log(...question)

//CHALLENGE 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);

//4
for (const [key, value] of gameEvents) {
  if (typeof key === 'number') {
    console.log(`[${key<=45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`)
  }
}

//STRINGS
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log((airline.toLowerCase()))
console.log((airline.toUpperCase()))

//Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() +
  passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.IO \n'

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97P';
const priceUS = priceGB.replace('P','$').replace(',','.');
console.log(priceUS)

const announce = 'door rer w door';
console.log(announce.replaceAll('door', 'gate'));
console.log(announce.replace(/door/g, 'gate'));

const plane2 = 'A320rere';
console.log(plane2.includes('A320'));
console.log(plane2.startsWith('A320'));

//Split and join
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Kek Pek'.split(' ');

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '))
}
capitalizeName('jessica ann smith');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '-'))

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(232323232343))

//Challenge
/*document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const strings = text.split('\n');
  console.log(strings);
  for (let str of strings) {
    const [first, second] = str.trim().toLowerCase().split('_');
    const output = first + second.replace(second[0], second[0].toUpperCase());
    console.log(`${output.padEnd(20)}${'✅'.repeat(strings.indexOf(str)+1)}`);
  }*/

  const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const flightsList = flights.split('+')
  console.log(flightsList)
  for (const flight of flightsList) {
    let [label, first, second, time] = flight.split(';');
    label = `${label.startsWith('_Delayed') ? '🔴' : ''}${label.replaceAll('_', ' ')}`;
    first = first.slice(0,3).toUpperCase();
    second = second.slice(0,3).toUpperCase();
    time = time.replace(':', 'h')
    const output = `${label} from ${first} to ${second} (${time})`
    console.log(output.padStart(45))

  }
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

/*
console.log(plane[0])
console.log(plane.length)
console.log(plane.indexOf('A'))
console.log(airline.lastIndexOf('r'))
console.log(airline.lastIndexOf('Port'))

console.log(airline.slice(4, 7))
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2))

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s ==='E') {
    console.log('middle seat');
  } else {
    console.log('not middle');
  }
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')*/
