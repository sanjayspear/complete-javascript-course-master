/*'use strict';

function logger() {
    console.log("My name is Jonas");
}
// Option  + CMD ==> To add cursor below.
//Shift + Option ==> Is a shortcut to duplicate the same line of code in Visual Studio Code using a keyboard shortcut.
logger();
logger();
logger();

function fruitProcessor(fruit1, fruit2) {
    const juice = `The Milkshake blended with honey, ${fruit1}, and ${fruit2} is ready to serve, enjoy your juice 🥤`;
    return juice;
}

//User defined function
let fruitJuice = fruitProcessor('Apple', 'Mango');
console.log(fruitJuice);

fruitJuice = fruitProcessor('Apple', 'Pineapple');
console.log(fruitJuice);

console.log(fruitProcessor('Orange', 'Grape'));
console.log(fruitProcessor('Banana', 'Apple'));
console.log(fruitProcessor('Papaya', 'Pomogranate'));

//Predefined or builtin functions:
//example:

Number('23');
console.log();
typeof ('23');



//Function declaaration and Function Expression

//Function Declaration
function calculateAge(birthyear) {
    return 2024 - birthyear;
}
let yourAge = calculateAge(1992);
console.log(`Your current age is ${yourAge}! 🫢`);

//Function Expression (Recommended), In fact in javascript expression produces values.
const calculateAge2 = function (birthyear) {
    return 2024 - birthyear;
}

yourAge = calculateAge2(2001);
console.log(`Your current age is ${yourAge}! 🫢`);


//Higher Order Function

// Higher-order function that applies a function to each element of an array

//A higher-order function is a function that takes one or more functions as arguments or returns a function.

//Here's an example of a higher-order function that takes a function as an argument and applies it to an array:

function applyFunctionToArray(array, func) {
    // Check if the provided argument is a function
    if (typeof func !== 'function') {
        console.error('Second argument must be a function.');
        return;
    }

    // Apply the function to each element of the array
    const resultArray = array.map(func);

    return resultArray;
}

// Example usage:

// Define a function that squares a number
function squareNumber(num) {
    return num * num;
}

// An array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the higher-order function to square each number in the array
const squaredNumbers = applyFunctionToArray(numbers, squareNumber);

// Output the result
console.log('Original Numbers:', numbers);
console.log('Squared Numbers:', squaredNumbers);


//Arroow function1 (It defines return statement and uses curly braces)
const calculateAge2 = (birthyear) => {
    return (2024 - birthyear);
}
console.log(calculateAge2(1991));

//Arrow function2 (It implicity use return statement and odesn't use curly brace)
const calculateAge3 = birthyear => 2023 - birthyear;
console.log(calculateAge3(1988));

//In the concept arrow function return statement must be defined explicity, if function contains more than onw statement
//also if function contains more than one arguments.

const yourRetirement = birthYear => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(`You'll be retired after ${yourRetirement(1991)} years!`)

const yourRetirement2 = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} your current age is ${age}, and you'll be retired after ${retirement} years, because by the time of your retirement your age will be ${(age + retirement)}! `;
}

console.log(yourRetirement2(1991, 'Sanjay'));
console.log(yourRetirement2(2001, 'Jonas'));



//Functions calling other functions

function fruitCutter(num) {
    return (8 * num);
}

function blendIntoJuice(f1, f2, numberOfPieces) {
    const pieces = fruitCutter(numberOfPieces);
    return `${f1} and ${f2} fruit juice is processed after cutting fruits into ${pieces} pieces!`
}
console.log(blendIntoJuice('Apple', 'Banana', 4));


fruitCutter = num => (8 * num);

blendIntoJuice = (f1, f2, numberOfPieces) => {
    const pieces = fruitCutter(numberOfPieces);
    return `${f1} and ${f2} fruit juice is processed after cutting fruits into ${pieces} pieces!`
}
console.log(blendIntoJuice('Apple', 'Banana', 4));

fruitCutter = num => {
    return (8 * num)
};

blendIntoJuice = (f1, f2, numberOfPieces) => {
    const pieces = fruitCutter(numberOfPieces);
    return `${f1} and ${f2} fruit juice is processed after cutting fruits into ${pieces} pieces!`
}
console.log(blendIntoJuice('Apple', 'Banana', 4));



function ageCalculator(birthYear) {
    return (2024 - birthYear);
}

function yourRetirementCal(birthYear, firstName) {
    const age = ageCalculator(birthYear);
    const retirement = 65 - age;
    return `${firstName} you are currently ${age} years old, you will be retired after ${retirement} years and by that time you will be 65 years old grand paa! `
}
console.log(yourRetirementCal(1991, 'Sanjay'));

//Convert the above into the arrow function
ageCalculator = (birthYear) => (2024 - birthYear);

yourRetirementCal = (birthYear, firstName) => {
    const age = ageCalculator(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} you are currently ${age} years old, you will be retired after ${retirement} years and by that time you will be 65 years old grand paa! `
    } else if (retirement <= 0) {
        return `${firstName} you already retired! ${retirement * (-1)} years ago! 🎉🥤`;
    }

}

console.log(yourRetirementCal(1991, 'Sagar'));
console.log(yourRetirementCal(1947, 'Mike'));

*/

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (val1, val2, val3) => ((val1 + val2 + val3) / 3);

// const checkWinner = (avgDolphins, avgKoalas, testData) => {
//     console.log(testData);
//     if (avgDolphins >= (2 * avgKoalas)) {
//         console.log(`Dolphins wins 🏆 (${Math.round(avgDolphins)} vs. ${Math.round(avgKoalas)})`);
//     } else if (avgKoalas >= (2 * avgDolphins)) {
//         console.log(`Koalas win 🏆 (${Math.round(avgKoalas)} vs. ${Math.round(avgDolphins)})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }
// //Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 41);
// checkWinner(scoreDolphins, scoreKoalas, "From Test Data One");

// //Test data 2
// scoreKoalas = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas, "From Test Data Two");

// //Randomly entered test data
// checkWinner(688, 111, "From the randomly entered average data");

const friends = ["Sanjay", "Sagar", "Viplav", "Aishwarya"];
console.log(friends);

console.log(`>>> Array elements printed using for loop`);
for (let i = 0; i < friends.length; i++) {
  const arr = friends[i];
  console.log(arr);
}

console.log(`>>> Array elements printed using for each loop`);

friends.forEach((element) => {
  console.log(`Length of string ${element} is ${element.length}`);
});

console.log(`>>> Appended array elements using push() method`);

friends.push("Amit");
friends.push("Sumit");

friends.forEach((element) => {
  console.log(`Length of string ${element} is ${element.length}`);
});

console.log(`>>> Updated array elements using based on index`);

friends[3] = "Dimpal";

friends.forEach((element) => {
  console.log(`Length of string ${element} is ${element.length}`);
});
