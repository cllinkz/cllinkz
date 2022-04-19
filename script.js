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

// ARRAYS

// Without arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// // Data structures - array
// // Strings
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// // Numbers
// const y = new Array(1991, 1984, 2008, 2020);

// // How to target elements in the array
// console.log(friends[2], y[0]);
// console.log(friends.length);
// // How to target the last element in the array.
// console.log(friends[friends.length - 1]);

// // How to change the array
// friends[2] = "Jay";
// console.log(friends);

// // An array can hold values od different types
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1])];
// console.log(ages);

// Array Methods - basic
// push is a method(function) to add 1 more element at the end of the array
// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay");
// console.log(friends);

// // unshift is a method(function) to add 1 more element at the begining of the array
// friends.unshift("John");
// console.log(friends);

// // pop is a method(function) to remove the last element from the array
// friends.pop();
// console.log(friends);

// // shift is a method(function) to remove the first element from the array
// friends.shift();
// console.log(friends);

// // index of is a method(function) to get the element position in the array
// console.log(friends.indexOf("Steven"));

// // includes will turn true or false if the element is inside of the array
// console.log(friends.includes("Steven"));
// friends.push(23);
// console.log(friends.includes(23));

// // Most used case of the includes case
// if (friends.includes("Steven")) {
//   console.log(`You have a friend called Steven`);
// }

// OBJECTS
// We write objects with curly braces {} is the easiest way and its called the literal syntax
// The difference between obejcts and arrays is the order of the content,
// The orded of the content doesnt matter in the objects like it does in the array[0,1,2]

// const jonas = {
//   firstName: "Darko",
//   lastName: "Ilievski",
//   age: 2037 - 1990,
//   job: "teacher",
//   friends: ["Meco", "borche", "Koki", "kocule"],
// };
// console.log(jonas);

// DOT vs Bracket NOtation

// DOT notation
// const jonas = {
//   firstName: "Darko",
//   lastName: "Ilievski",
//   age: 2037 - 1990,
//   job: "teacher",
//   friends: ["Meco", "borche", "Koki", "kocule"],
// };
// console.log(jonas.lastName);

// Brackets notation
// const jonas = {
//   firstName: "Darko",
//   lastName: "Ilievski",
//   age: 2037 - 1990,
//   job: "teacher",
//   friends: ["Meco", "borche", "Koki", "kocule"],
// };
// console.log(jonas["lastName"]);

// // The difference is in the brackets notation we can put any expression in the []

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // Usually used feature for a popup window
// const interestedIn = prompt(
//   `What do you want to know about Darko? Choose between fisrtName, lastName, age, job and friends`
// );
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     `Wrong request. Choose between fisrtName, lastName, age, job and friends`
//   );
// }
// // When do we use DOT and when Brackets
// //DOT is easier for use and i should use it more often
// // Bracket notation is used usually when there is some compute to be executed for example 2+2 etc.

// // How to add new properties to the object
// jonas.location = "Skopje";
// jonas["twitter"] = "@jonas";
// console.log(jonas);

// Practice

// const jonas = {
//   firstName: "Jonas",
//   friendName: ["Michael", "peter", "Seven"],
// };

// console.log(
//   `${jonas.firstName} has ${jonas.friendName.length} friends, and his best friend is ${jonas.friendName[0]}`
// );

// OBJECT METHODS

// How to add functions in objects
// const jonas = {
//   firstName: "Darko",
//   lastName: "Ilievski",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Meco", "borche", "Koki", "kocule"],
//   hasDriversLicense: true,
// Adding a function (function expression) it's only allowed to use expression in the objects
// // calcAge: function (birthYear) {
// //   return 2037 - birthYear;
// },

// Adding the this keyword because we have the birthYear defined in the object
// It is the best use to use this. and the value so we dont repeat ourselves
// calcAge: function () {
//   return 2037 - this.birthYear;
// },

// If we need the result few times after in the later code it is usually
//  a good practice to store it in a new parameter

// calcAge: function () {
//   this.age = 2037 - this.birthYear;
//   return this.age;
// },

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// The same using bracket notation
// console.log(jonas["calcAge"]());

// Practice methods
// const jonas = {
//   firstName: "Darko",
//   lastName: "Ilievski",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Meco", "borche", "Koki", "kocule"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   checkLicense: function () {
//     return `${jonas.firstName} is a ${jonas.calcAge()} old ${
//       jonas.job
//     }, and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license`;
//   },
// };

// console.log(jonas.checkLicense());
