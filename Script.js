/*
function logger(){
    console.log('My name is Jasper');
}

// running / calling / invoking function 
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
function calAge1(birthYear){
    return 2021 - birthYear;
}
const age1 = calAge1(2003);

// Function Expression

const calAge2 = function(birthYear){
    return 2021 - birthYear;
}
const age2 = calAge2(2003   );

console.log(age1, age2);

// arrow function

const calAge3 = birthYear => 2021 - birthYear;
const age3 = calAge3(2003);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName)  => {
    const age = 2021 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearUntilRetirement(2003, 'Jasper'));
console.log(yearUntilRetirement(2005, 'Kasper'));


// function calling other functions

function cutFruitPieces(fruit){
    return fruit * 3;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePiceces = cutFruitPieces(oranges);

    const juice =`Juice with ${applePieces} pieces of apple and ${orangePiceces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Reviewing the function

const calAge = function (birthYear){
    return 2021 - birthYear;
}

const yearUntilRetirement = function(birthYear, firstName)  {
    const age = calAge(birthYear);
    const retirement = 60 - age;

    if(retirement >  0){
        console.log (`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearUntilRetirement(1997, 'John'));
console.log(yearUntilRetirement(1955, 'mike'));


// coding challenge

const calAverge = (a, b, c) => (a + b + c) / 3;

// test 1
let scoreDolphins = (44, 23, 71);
let scoreKoalas = (65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log(`no one win......`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// test 2
scoreDolphins = (85, 54, 41);
scoreKoalas = (23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// Array

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends =  ['Michael', 'Steven', 'Peter'];
console.log(friends);

const year  = new Array(2003, 2005, 2009, 2015, 2020);
console.log(year);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jas';
console.log(friends);

const firstName = 'Irastus';
const jasper = [firstName, 'Jasper', 2021 - 2003, 'student', friends];
console.log(jasper);

const calAge2 = function(birthYear){
    return 2021 - birthYear;
}
const years  = [2003, 2005, 2009, 2015];

const age1 = calAge2(years[0]);
const age2 = calAge2(years[1]);
const age3 = calAge2(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calAge2(years[0]), calAge2(years[1]), calAge2(years[years.length - 1])];
console.log(ages);


// Basic array operator

const friends =  ['Michael', 'Steven', 'Peter'];
// Add element in last
const newLength = friends.push('Jas');
console.log(friends);
console.log(newLength);

// Add element in front

friends.unshift('Kas');
console.log(friends);


// Remove element in last

const remove = friends.pop();
friends.pop();
console.log(friends);
console.log(remove);

// Remove element in first

friends.shift();
console.log(friends);

// indexof - show the index value

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Jas'));

// include - it say true or false

console.log(friends.includes('Steven'));
console.log(friends.includes('Kas'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Kas'));
console.log(friends.includes(23));

if (friends.includes('Michael')){
    console.log('You have  a friend called Michael');
}


// coding challenge

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

 const bill = [125, 555, 44 ];

const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[bill.length - 1])];

const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(bill,  tips, total);

// recap of array

const sampleArray = [
    'Irastus',
    'Jasper',
    2021 - 2003,
    'student',
]
console.log(sampleArray);

// intro of object

const sample = {
    firstName: 'Irastus',
    lastName: 'Jasper',
    age: 2021-2003,   
}
console.log(sample);

const sample = {
    firstName: 'Irastus',
    lastName: 'Jasper',
    age: 2021-2003, 
    friends: ['Michael', 'Jas', 'Kas'],  
}
console.log(sample);

console.log(sample.lastName);
console.log(sample['lastName']);

const nameKey = 'Name';
console.log(sample['first' + nameKey]);
console.log(sample['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age');

if (sample[interestedIn]){
    console.log(sample[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age');
}

console.log(`${sample.firstName} has ${sample.friends.length} friends, and his best friend is called ${sample.friends[0]}`);
*/

/*
// object Methods

const sample = {
    firstName: 'Irastus',
    lastName: 'Jasper',
    birthYear: 2003,
    friends: ['Michael', 'Jas', 'Kas'],  
    hasDriverslicense: true,

    // calcAge: function(birthYear){
    //     return 2021 - birthYear;
    // }
    // this--->sample here
    // calcAge: function(){
    //     return 2021 - this.birthYear;
    // }
    calcAge: function(){
        this.age =2021 -this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}years old student, and he has ${this.hasDriverslicense ? 'a' :
        'no'} driver's license.`
    }
};

console.log(sample.calcAge());

console.log(sample.age);

// console.log(sample['calcAge'](2003));

// challenge
console.log(sample.getSummary());

// Coding Challenge

const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,

    calBMI: function(){
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
};

const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calBMI: function(){
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
};
john.calBMI();
mark.calBMI();

console.log(john.BMI, mark.BMI);



if(john.BMI > mark.BMI){
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than
    ${mark.fullName}'s BMI (${mark.BMI})`);
}
else if(john.BMI < mark.BMI){
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`)
}

// john smith'sBMI (28.3) is higher than mark miller's (23.9)!


// Iteration the for loop

for(let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const sampleArray = [
    'Irastus',
    'Jasper',
    2021 - 2003,
    'student',
    ['peter', 'steven'],
    true
];

const type = [];

for(let i = 0; i < sampleArray.length; i++){
    console.log(sampleArray[i], typeof(sampleArray[i]));

    // filling types array
    // type[i] = typeof sampleArray[i];
    type.push(typeof sampleArray[i]);
}

console.log(type)

const years = [1997, 2003, 2005, 2019];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);

// continue and break
console.log('----- ONLY STRING ------' );
for(let i = 0; i < sampleArray.length; i++){
    if(typeof sampleArray[i] !== 'string') continue
    console.log(sampleArray[i], typeof(sampleArray[i]));
}

console.log('----- Break with number ------' );
for(let i = 0; i < sampleArray.length; i++){
    if(typeof sampleArray[i] === 'number') break
    console.log(sampleArray[i], typeof(sampleArray[i]));
}

// Looping backwards and loops in loop

const jasper = [
    'Irastus',
    'Jasper',
    2021 - 2003,
    'student',
    ['peter', 'steven'],
    true
];

for(let i = jasper.length - 1; i >= 0; i--){
    console.log(i, jasper[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------Starting Exercise ${exercise}-------`);

    for (rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

// While loop

let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice != 6) {
    console.log(`You rolling a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('loop is about to an end....')
}

// Coding Challenge



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const total = [];
  
  for(let i = 0; i < bill.length; i++){
      const tip = calcTip(bill[i]);
      tips.push(tip);
      total.push(tip + bill[i]);
  }

console.log(bill,  tips, total);

const calcAverage = function (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));