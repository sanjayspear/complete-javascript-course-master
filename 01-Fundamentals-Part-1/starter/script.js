//Values and Varibales
/*
let js = 'amazing';

//if (js === 'amazing') alert('Javascript is Fun');

let _firstName = "Jones";
console.log(_firstName);
console.log(_firstName);
console.log(_firstName);
console.log(23);

//Descriptive and readable variable names (Recommended)
let myFirstJob = 'programmer';
let myCurrentJob = 'Teacher';

//Not descriptive and not readbale (Not Recommended)
let _$job1 = 'programmer';
let _$job2 = 'Teacher';

console.log(`My first job was ${myFirstJob}`);
console.log(`My current job is ${myCurrentJob}`);
console.log(`My first job was ${myFirstJob} and my current job is ${myCurrentJob}`);

console.log("My first job was " + myFirstJob);
console.log("My current job is " + myCurrentJob);
console.log("My first job was " + myFirstJob + " My current job is " + myCurrentJob);

let country = "India";
let continent = "Asia";
let papulation = "1 Billion";

console.log("I'm from " + country + " It's part of the " + continent + " Continent " + " It's papulation is " + papulation);


//Data Types
// The 7 Primitive Datatypes (Number, String, Boolean, Undefined, Null, Symbol, BigInt)

//Learning boolean primitive data type

let flag = true;
if (flag === true) {
    console.log(flag + " Javascript is fun");
}

let x, y, z;
const PI = 3.14;

console.log(typeof flag);
console.log(typeof true);
console.log(typeof "Javascript");
console.log(typeof 'javascript');
console.log(typeof 1234);
console.log(typeof 23.2222);
console.log(typeof 3.14);
console.log(typeof x, y, z);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof PI);

//Javascript allowes dynamic typing: Means we changed the value of flag from boolean to string
console.log(`Before changing the type of the varible 'flag', it holds ${typeof flag} value.`);
flag = "YES";
console.log(`After changing the type of the varible 'flag' dynamically it holds ${typeof flag} value. Hence it proved, javascript allowes dynamic typing`);

//In javacript, a varibale without a value is called undefined.
let _year;
let _month;
let _day;

console.log(typeof _year);
console.log(typeof _month);
console.log(typeof _day);

year = 2024;
month = 'Jan';
day = 'Monday';

console.log(typeof year);
console.log(typeof month);
console.log(typeof day);

//let, const, var
//recommended let, const
//You can almost ignore var

//Note: If you need mutation over the existing varible value then go for 'let' datatype / kaeyword
//If you know throught the program value is not going to change then go for 'const' keyword.

//Example

let _age = 30;
_age = 31;

const yearOfBirth = 1991;
//yearOfBirth = 1992;

var job = 'Programmer';
job = 'Teacher';

//Note you will lean in the future section: What is funtion scope and what is block scope and function scope

//Note: You will learn later what is function scope and block scope throughly in the section 7 of this course.
//let ==> is block scope
//block ==> function scope

//Basic Operators

const currentYear = 2023;
const _peterAge = currentYear - 1991;
const _pinkyAge = currentYear - 1964;

console.log(`Mr. Peter born in the year 1991 and his current age is ${_peterAge} Ms Pinky born on 1964 and her current age is ${_pinkyAge}`);

console.log(_peterAge + 5, _pinkyAge - 5, _peterAge * 5, _pinkyAge * 4, _peterAge / 5, _pinkyAge ** 2);

// concatenation or join operation

const first_name = 'Sanjay';
const last_name = 'Singania';

console.log("Mr. " + first_name + " " + last_name);

let _x = 10 + 5; //15
_x += 10; // x = x + 10;
console.log(_x); //25
_x *= 4; // x = x * 4;
console.log(_x); // 100
_x++; //x=x+1;
console.log(_x);
_x--;
_x--;
console.log(x); //99

//Comparision Operators
// >, <, >=, <=, ==, ===
console.log(pinkyAge > peterAge);
console.log(pinkyAge < peterAge);

//Operator Precedence

const now = 2023;
const peterAge = now - 1991;
const pinkyAge = now - 1964;

console.log(now - 1991 > now - 1964);

let a, b;
a = b = 25 - 10 - 5; // Note: Assignmnet flows from right to left and math operation flows from left to right.
console.log(a, b); // Note: Assignment is the lowest precedence

//refer the MDN doc for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

const averageAge = (peterAge + pinkyAge) / 2;
console.log(peterAge, pinkyAge, averageAge);



//12. Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2013;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} old ${job}!`
console.log(jonasNew);

console.log(`Just a regular string!`)

console.log('String with \n\
multiple \n\
line');
//or
console.log(`String with
multiple
line`);

//BMI Calculation

const tomWeight = 105;
const tomHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const tomBMI = tomWeight / (tomHeight * tomHeight);
const johnBMI = johnWeight / (johnHeight ** 2);

console.log(`Tom current BMI is ${Math.round(tomBMI)}!`);
console.log(`John current BMI is ${Math.round(johnBMI)}!`);

if (tomBMI > johnBMI) {
    console.log(`Tom has higher BMI than john!`);
} else {
    console.log(`John has higher BMI than Tom!`);
}

console.log(Math.pow(2, 3)); //8
console.log(Math.pow(tomHeight, 2));
console.log(Math.pow(johnHeight, 2));



//Type conversion and type coercion

//In brief summary the type conversion is explicit and can be either implicit or explicit, while type coercion is implicitly //performed by JavaScript during operations or comparisons

//TYPE CONVESRION
const inputYear = '1991';
console.log(inputYear + 1);

//conver from string type to number type then do addtion operation
console.log(Number(inputYear) + 1);

const _name = 'Sanjay';
console.log(Number(_name)); //NaN (Not a number).

const inputYear2 = 1991;

console.log(`Before converting number to string ${inputYear2 + 1}`);

console.log(`After converting number to string ${String(inputYear2) + 1}`);

//TYPE COERCION
console.log("I'm " + 23 + " year old");
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); //10

console.log('2' + '3' + '4' + 5); // 2345
console.log(2 + 3 + 4 + '5'); //14
console.log('10' - '4' - '3' - 2 + '5'); //15


//Truthy and Falsy values
//Five falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(100)); //true
console.log(Boolean(undefined)); //false
console.log(Boolean('jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); //false
console.log(Boolean(''));//false
console.log(Boolean(NaN));//false

let money = 0; //falsy

if (money) {
    console.log("Don't spend it all;");
} else {
    console.log('You should get a job')
}

money = 100; //truthy

if (money) {
    console.log("Don't spend it all;");
} else {
    console.log('You should get a job')
}

let height; //Height is undefine so it is by default falsy

if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

height = 0; //Height is 0 so it is by default falsy

if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

height = 101; //Height is defined so it is by default truthy

if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

height = null; //Height is defined with null and it is by default falsy

if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

height = NaN; //Height is defined with NaN and it is by default falsy

if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}



//Equality Operator == vs ===
//=== Strict eqality operator (Recommended)
//== Loose equality operator

const _$age = '18';

if (_$age === 18) {
    console.log(`You just became an adult`);
} else {
    console.log(`18 is not a number and it's type is ${typeof (age)}`);
}

if (_$age == 18) {
    console.log(`You just became an adult`);
} else {
    console.log('NaN');
}
//Number(age) ==> Conversion from string typr to number type
if (Number($_age) === 18) {
    console.log(`You just became an adult`);
} else if ($_age === 8) {
    console.log("Not an adult")
} else if ($_age >= 18) {
    console.log("your age is >=18")
} else if ($_age <= 18) {
    console.log("your age is <=18")
} else if ($_age != 18) {
    console.log("your age is !=18")
} else {
    console.log(`18 is not a number and it's type is ${typeof (age)}`);
}


//Boolean Logic or Logical Operator

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision); //false
console.log(hasDriverLicense || hasGoodVision); //true
console.log(!hasDriverLicense); //false
console.log(!hasGoodVision); //true

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive ...`);
}

const isTired = true

console.log(hasDriverLicense && hasGoodVision && isTired); // false


//The Switch statements:

let day = 'Sunday';

switch (day) {
    case 'Monday': //day === 'Monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thrusday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

//========Implemented the above logic through conditional and logical operator==========

if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Write code examples');
} else if (day === 'Friday') {
    console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}


//Statements and Expressions

//Expressions ==> Produces bvalues
3 = 4
1992
true && false && !false

//Statements
if (23 > 3) {
    const str = '23 is bigger';
}



//Conditional (Ternary) Operator

const age = 16;

age >= 18 ? console.log("I want to drink wine 🍷") : console.log("I want to drink water 💦");

const drink = age >= 18 ? 'Wine 🍷' : 'Water💧';
console.log(drink);

let _drink;

if (age >= 18) {
    _drink = `Wine 🍷`;
} else {
    _drink = `Water 💧`;
}

console.log(_drink);

//Inside the console is an expression and the expression is something that produces a value.
console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'Water💧'}`);

// ${.....} ==> Is template literal
//Ternary operator is not replacement of if else statement. Still we need if else statment for example if need to execute bigger chunk of code inside the if else block. In that case ternary operator is not suitable and it's only useful if in case if we wanted tot take some quick decision. ex: age >= 18 ? 'Wine 🍷' : 'Water💧';

const bill = 1117;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${Math.round(bill)}, the tip was ${Math.round(tip)}, and total amout to be paid is ${(Math.round(bill + tip))}`);

*/