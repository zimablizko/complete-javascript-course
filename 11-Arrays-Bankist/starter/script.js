'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann', movements: [200, 450, -400, 3000, -650, -130, 70, 1300], interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis', movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30], interestRate: 1.5, pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams', movements: [200, -200, 340, -300, -20, 50, 400, -460], interestRate: 0.7, pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith', movements: [430, 1000, 700, 50, 90], interestRate: 1, pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements
    .reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`

  const interest = account.movements.filter(mov => mov > 0)
    .map(deposit => deposit * account.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}€`
}


const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner.toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
}
createUsernames(accounts)

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc)
}
//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    //clear input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //display stuff
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0 && receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.user) {
    //Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
  if (amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "Log in to get started"
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(1, -1));
console.log(arr.splice(-1));

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h'];
console.log(arr2.reverse());

const letters = arr.concat(arr2);
console.log(letters);

console.log(letters.join('-'));*/

///FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
*/

/*
movements.forEach(function (movement, index,array) {
  if (movement > 0) {
    console.log(`${index+1}: You deposited ${movement}`);
  } else {
    console.log(`${index+1}: You withdrew ${Math.abs(movement)}`);
  }
})*/

const currencies = new Map([['USD', 'United States dollar'], ['EUR', 'Euro'], ['GBP', 'Pound sterling'],]);

/*currencies.forEach(function (val, key, map) {
  console.log(`${key}: ${val}`);
})

const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);

currenciesUnique.forEach(function (val, _) {
  console.log(`${val}: ${val}`);
})*/

const eurToUsd = 1.1;
/*const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
})*/
/*
const movementsUSD = movements.map((mov) => mov * eurToUsd)
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) => {
  return `${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});
console.log(movementsDescriptions)*/

/*const deposits = movements.filter(function (mov) {
  return mov > 0;
})
console.log(deposits);

const withdrawals = movements.filter(mov => mov <0)
console.log(withdrawals)

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`${i}: ${acc}`)
  return acc + cur;
}, 111);
console.log(balance)*/

const balance = movements.reduce((acc, cur) => acc + cur, 0);

//Maximum value
const maximum = movements.reduce((acc, cur) => acc < cur ? cur : acc, movements[0]);
console.log(maximum)

//CHALLENGE
const calcAverageHumanAge = function (ages) {
  const average = ages
    .map((val) => val <= 2 ? val * 2 : 16 + val * 4)
    .filter((val) => val >= 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
  console.log(average);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//EQUALITY
console.log(movements.includes(-130));
//CONDITION
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits)
//EVERY
const everyDeposits = movements.every(mov => mov > 0);
console.log(everyDeposits)
//FLAT
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat())
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2))

const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, movements) => acc + movements, 0);
console.log(overallBalance)

//FLATMAP
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, movements) => acc + movements, 0);
console.log(overallBalance2)

//SORT
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort())

//return < 0, A, B
//return > 0, B, A switch order
/*movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});*/

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

const x = new Array(7);
x.fill(1);
console.log(x)

//Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y)

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);

const rolls = Array.from({length: 7}, (cur, i) => Math.trunc(Math.random() * 6) + 1);
console.log(rolls);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);
})

//Practice
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum)

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => cur >= 1000 ? ++acc : acc, 0);
console.log(numDeposits1000);

const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements)
  .reduce((sums, cur) => {
    //cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
  }, {deposits: 0, withdrawals: 0})
console.log({deposits, withdrawals})

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'in', 'on', 'with'];

  const titleCase = title.toLowerCase().split(' ')
    .map(
      word => exceptions.includes(word) ?
        word :
        capitalize(word))
    .join(' ');
  return capitalize(titleCase);
}
console.log(convertTitleCase('this is a nice title'));

//Challenge

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

//1
dogs.map(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);
//2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog)
console.log(sarahDog.recommendedFood > sarahDog.curFood ? 'too little' : 'too much');
//3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle)
//4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
//5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
//6
console.log(dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));
//7
console.log(dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1))
//8
let copyDogs = dogs.slice();
copyDogs.sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(copyDogs)