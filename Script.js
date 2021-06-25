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
console.log(century);

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

// type conversion
const inputYear = '2003';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+ 18);

console.log(Number('Jasper'));
console.log(typeof NaN);

// type coercion
console.log('Iam '+ 18 + ' years old');
console.log('23' - '10 - 3');
console.log('23' / '2');
console.log('23' > '18');

let n ='1' + 1;// '11'
n = n - 1;
console.log(n);

// 5 falsy values: 0, '',undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jasper'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 2;
if(money){
    console.log("Don't spend it all");
}else{
    console.log('You should got a job');
}

let height;
if (height){
    console.log('YAY! Height is defined');
}else{
    console.log('Height is defined');
}

// Equality operator

const age = '18';
if(age === 18) console.log('You just became an adult (Strict)');

if(age == 18) console.log('You just became an adult (Loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23){ // 23 === 23 ->true
    console.log('cool! 23 is an amzaing number!');
}else if(favourite === 7){
    console.log('7 is also a cool number');
}else if(favourite === 9){
    console.log('9 is also a cool number');
}else{
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');*/
/*
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision){
//     console.log('Jasper is able to drive!');
// }else{
//     console.log('Someone else should drive.....')
// }

const isTired = false; // c
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log('Jasper is able to drive!');
}else{
    console.log('Someone else should drive.....')
}*/

// coding challenges

// const scoreDolphins = (96 + 108 + 89) /3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins < scoreKoalas){
//     console.log('Koalas win the competition');
// }else if(scoreKoalas === scoreDolphins){
//     console.log('Both win the competition');
// }else if (scoreKoalas < scoreDolphins){
//     console.log('Dolphins win the competition');
// }
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// bonus


/*const scoreDolphins = (97 + 112 + 80) /3;
const scoreKoalas = (109 + 95 + 50) / 3;

if (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log('Koalas win the competition');
}else if(scoreKoalas === scoreDolphins && scoreDolphins >=100 &&scoreKoalas >= 100){
    console.log('Both win the competition');
}else if (scoreKoalas < scoreDolphins && scoreDolphins){
    console.log('Dolphins win the competition');
}else{
    console.log('No one win the competition');
}
console.log(scoreDolphins);
console.log(scoreKoalas);

const day = 'friday';

switch (day){
    case 'monday':
        console.log('Go to code meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code for example');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
     case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a vaild day!');
}

if (day === 'monday'){
    console.log('Go to code meetup');
}else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code for example');
}else if(day === 'friday'){
    console.log('Record videos');
}else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend');
}else{
    console.log('Not a valid day!');
}*/

const age = 18;
// age >= 18 ? console.log('I like to drive bike') : console.log('I like to drive cycle');

const drive = age >= 18 ? 'bike' : 'cycle';
console.log(drive);

let drive2;
if (age >= 18){
    drive2 = 'bike';
}else{
    drive2 = 'cycle';
}
console.log(drive2);

console.log(`I like to drive ${age >= 18 ? 'bike' : 'cycle'}`)