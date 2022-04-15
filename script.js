/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);
// console.log(`just a regular string ...`);

// console.log(`String
// with
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving license `);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23));
// console.log(typeof 23);

// // type coersion
// console.log("I am " + 26 + " years old");
// console.log("23" - "10" + 3);
// console.log("23" * "2");

// let n = "1" + 1; // Ova e ednakvo na 11 bidejki "1" e string a 1 e number
// n = n - 1; // Ova doaga 11-1=10
// console.log(n);

// const number = "10" - "4" - "3" - 2 + "5"; // Dodeka odzimame JS gi prepoznava strings kako numbers a vo slucaj na sobiranje si ostanuvaat strings i se dodavaat na vrednosta.
// console.log(number);

// 5 falsy values: 0, "", undefined, null, NaN; (ova se faulse po default)
// In practice this is not used but it's nice to know
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You should get a job`);
// }

// //How to use 0 falsy value by using logical operatoirs
// let height = 0;

// if (height) {
//   console.log(`Height is defined`);
// } else {
//   console.log(`Height is undefined`);
// }

// In programing with JS there are 2 equalities == and ===, the === is more used and below is the difference.
// The == is accepting type coersion and transforms strings to number or bulleting but is more confusing to use and makes bugs in the code.
// The === is almost always used but does not suppeort type coersion and doesnt transform strings to number etc.

// const age = 18;
// if (age === 18) console.log(`You just became an adult (strict)`);

// if (age == 18) console.log(`You just became an adult (loose)`);

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log(`Cool 23 is an amazing number`);
// } else if (favourite === 7) {
//   console.log(`Seven is also a cool number`);
// } else if (favourite === 9) {
//   console.log(`Nine is also a cool number`);
// } else {
//   console.log(`Number is not 23 or 7 or 9`);
//}

// There is also an operator in different and the most used is !== (strict version).
// if (favourite !== 23) console.log(`why not the 23`);

// BOOLEAN LOGIC USED FOR ALL PROGRAMING LANGUAGES

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

// // This is the AND logical operator and its defind with &&;
// console.log(hasDriversLicense && hasGoodVision);

// // This is the OR logical operator and its defined with ||
// console.log(hasDriversLicense || hasGoodVision);

// // This is the NOT logical operator and its defined with !, it inverts from true to false and back.
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log(`Sarah is able to drive!`);
// // } else {
// //   console.log(`Someone else should drive ...`);
// // }

// const isTired = false; //c
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive ...`);
// }

// The switch statement an easier way of writing the if-else code but is less used.
// You can use both ways shown below.

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday';
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; // the break is used to separate.
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day");
// }

// Statements and expressions

// // expressions
// 3 + 4;
// 1991;
// true && false && !false;

// // Statemens

// if (23 > 10) {
//   const str = "23 is bigger";
// }

// // console.log(`I'm ${2037 - 1991} years old.`); This is a statement
// // 2037 - 1991 This is an expression
// console.log(`I'm ${2037 - 1991} years old.`);

// The conditional (ternary) operator another way to use the if else operator and the switch operator.
// Explanation
// const age = 20;
// age >= 18
//   ? console.log(`I like to drink wine`)
//   : console.log(`I like to drink water`);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// // Best practice and uses
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// // Use it in a template literal
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
// //  The conditional (ternary) operator for short if else statements, usually when there is a bigger if/else code we still use the if/else.
