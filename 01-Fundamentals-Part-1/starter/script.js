/*
let js = 'amazing';


let PI = 3.1415;

let country = "Pepegastan";
let continent = "Memeland";
let population = 9000;

console.log(country + " " + continent + " " + population)
console.log(typeof ("qqq" + (10+1)))
console.log(typeof null)*/

/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
let markBMI, johnBMI, markHigherBMI;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI)*/

/*const name = 'Peepo';
const job = 'Pogger';
console.log(name + ' the ' + job);
console.log(`${name} the ${job}`);
console.log(`${name} 
the ${job}`);*/

/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Marks's BMI (${markBMI} is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI} is higher than Marks's (${markBMI})`);
}
*/
//type conversion
/*const inputYear = '1000';
console.log(Number(inputYear) + 10, inputYear);
console.log(String(1000) + 10);*/
//type coercion
/*
console.log('I m ' + 23 + ' years old');
console.log('23' - 10 - '3'); //10
console.log('23' + 10 + '3'); //23013
let n = '1' + 1;
n = n - 1;
console.log(n); //10
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('')); //false
console.log(Boolean({})); //false*/

/*
const dolphAvg = (97 + 112 + 11) / 3;
const koalaAvg = (114 + 95 + 11) / 3;
console.log(dolphAvg, koalaAvg)
if (dolphAvg > koalaAvg && dolphAvg >= 100)
    console.log("Dolph wins")
else if (dolphAvg < koalaAvg && koalaAvg >= 100)
    console.log("Koala wins")
else if (dolphAvg >= 100 && koalaAvg >= 100)
    console.log("Draw")
else
    console.log("No one wins")
*/

/*const day = 'tuesday';

switch (day) {
    case 'monday':
        console.log('Do some shit');
        break;
    case 'tuesday':
    case 'wednesday':
        console.log("Do nothing lol");
        break;
    default: console.log('Not a valid day');*/

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)
