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
*/

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