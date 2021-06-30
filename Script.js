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
*/

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