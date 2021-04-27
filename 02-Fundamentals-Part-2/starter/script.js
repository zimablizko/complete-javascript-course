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
