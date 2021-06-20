/*
let js='Amazing';
console.log(40+10+8-10)

console.log("Jonas");
console.log(23);

let firstName = "Irastus";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let kasper_jasper = "kj";
let _function = 27;
let $funtion = 27;
let PI = 3.14;

let myFirstJob = "Coder";
let myCurretJob = "teacher"

console.log(myFirstJob);

let myCountry = "India";
let myContinent = "Asia";

console.log(myCountry);
console.log(myContinent);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 18);
console.log(typeof 'Jasper');

javascriptIsFun ="yes";
console.log(typeof javascriptIsFun);

//undefine
let year;
console.log(year);
console.log(typeof year);

year = 2003;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 2003;
// birthYear = 2002;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Jasper";
console.log(lastName);
// Math operators
const now =2021
const ageJasper = now - 2003
const ageKasper = now - 2005
console.log(ageJasper, ageKasper);

console.log(ageJasper * 2, ageJasper / 2, 2**3);

const firstName = "Irastus";
const lastName = "Jasper";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;// 15
 x += 10; // x = x + 10 = 25
 x *= 4;; // x * 4 = 100
 x++; // x = x + 1
 x--; // x = x - 1
 x--;
 console.log(x);

//  comparison operation
console.log(ageJasper > ageKasper);
console.log(ageKasper > 18);

const isFullAge = ageKasper >= 18;
console.log(now - 2003 > now - 2005);

const now = 2021;
const ageJasper = now - 2003;
const ageKasper = now - 2005;

console.log(now - 2003 > now - 2005);

let x, y;
x = y =25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJasper + ageKasper) / 2
console.log(ageJasper, ageKasper, averageAge);
*/



// coding challenges
// const massMark = 78;
// const heightMark = 1.69; 
// const massJohn = 92;
// const heightJohn = 1.95;

// const markBMI = massMark/ (heightMark)**2;
// const johnBMI = massJohn/ (heightJohn)**2;

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markBMI > johnBMI);
/*
// Another test cases 
const massMark = 95;
const heightMark = 1.88; 
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark/ (heightMark)**2;
const johnBMI = massJohn/ (heightJohn)**2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

const firstName = 'Jasper';
const birthYear = 2003;
const now = 2021;
const job = 'Student';

const jasper = "I'm " + firstName + ", a " + (now - birthYear) + " year old " + job + "!";

console.log(jasper);

const irastus  = `I'm ${firstName}, a ${now - birthYear} year old ${job}!`;
console.log(irastus);

console.log(`Just a regular string.....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 11;
const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('You can start driving license');
}
else{
    const yearLeft =  18 - age;;
    console.log(`You are too young. Wait for another ${yearLeft} year: `);
}

const birthYear = 2009;

let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);*/

const massMark = 95;
const heightMark = 1.88; 
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark/ (heightMark)**2;
const johnBMI = massJohn/ (heightJohn)**2;

console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}