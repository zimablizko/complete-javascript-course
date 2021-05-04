'use strict';
/*
//function declaration
function calcAge (birthYear) {
    return 2033 - birthYear;
}
//function expression
const calcAge2 = function (birthYear) {
    return 2033 - birthYear;
}
//Arrow function
const calcAge3 = birthYear => 2033 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement>0)
        return retirement;
    else
        return -1;
}

console.log(yearsUntilRetirement(1999, 'Bob'))*/

/*
const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    console.log(avgDolphins, avgKoalas);
    if (avgDolphins >= avgKoalas * 2){
        console.log(`Dolphs win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('Nobody wins')
    }
}
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);
*/

/*
const friends = ['Biba', 'Boba', 'Booba'];
const years = [1, 2, 3];
console.log(years+10);

console.log(friends.length);
console.log(friends[friends.length-1]);
const pepega = ['Pepega', 1000-32, friends];
console.log(pepega);

//add elems
friends.push('Bilbo');
friends.unshift('Baba'); //add to begin

//remove elems
friends.pop(); //Last
friends.shift(); //First

console.log(friends.indexOf('Boba'));
console.log(friends.includes('Boba'));*/

/*
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, total);*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "wwww",
    job: "teacher",
    birthYear: 1991,
    friends: ['Michael', 'f', 'v'],
    hasDriversLicense: true,

/!*    calcAge: function () {
        return 2037 - this.birthYear;
    }*!/
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver license`
    }
}

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());*/

/*
const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    getBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

const jonas = {
    name: 'Jonas',
    mass: 92,
    height: 1.95,
    getBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

if (mark.getBMI() > jonas.getBMI())
    console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${jonas.name}'s BMI (${jonas.bmi})`)
else
    console.log(`${jonas.name}'s BMI (${jonas.bmi}) is higher than ${mark.name}'s BMI (${mark.bmi})`)*/

/*
const friends = ['Biba', 'Boba', 'Booba', 1, true];
const types = [];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    types.push(typeof friends[i]);
}
console.log(types);

const years = [1999, 2008, 1923, 2020];
const ages = [];
for (let i = 0; i<years.length; i++) {
    ages.push(2037-years[i]);
}
console.log(ages);

//only strings
for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] !== 'string') continue;
    console.log(friends[i]);
}
//break with number
for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] === 'number') break;
    console.log(friends[i]);
}*/

/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}*/

/*
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
const calcAverage = function (arr) {
   let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    return avg / arr.length;
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}
console.log(tips, totals);
console.log(calcAverage(tips), calcAverage(totals));*/

/*
const temps = [17, 21, 2, -5, 0];

const printForecast = function (arr) {
    let forecast = '';
    for (let i = 0; i < arr.length; i++){
        forecast += `${arr[i]}C in ${i+1} days ... `;
    }
    console.log('... ' + forecast);
}

printForecast(temps);*/
