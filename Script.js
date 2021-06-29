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
*/
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