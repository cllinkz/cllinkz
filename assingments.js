// const massMark = 75;
// const heightMark = 1.69;
// const massJohn = 105;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher`);
// }

// Assigment 1

// const averageScoreDolphin = (96 + 108 + 89) / 3;
// console.log(averageScoreDolphin);

// const averageScoreKoala = (88 + 91 + 110) / 3;
// console.log(averageScoreKoala);

// if (averageScoreDolphin > averageScoreKoala) {
//   console.log(`The Dolphin team is the winner`);
// } else {
//   console.log(`The Koala team is the winner`);
// }

// if (averageScoreDolphin === averageScoreKoala) console.log(`It's a draw`);

// BONUS 1

// const averageScoreDolphin = (97 + 112 + 101) / 3;
// console.log(averageScoreDolphin);

// const averageScoreKoala = (109 + 95 + 123) / 3;
// console.log(averageScoreKoala);

// const minimumScore = 100;

// if (averageScoreDolphin > averageScoreKoala && averageScoreDolphin >= 100) {
//   console.log(`The Dolphin is the winner`);
// } else if (
//   averageScoreKoala > averageScoreDolphin &&
//   averageScoreKoala >= 100
// ) {
//   console.log(`The Koala is the winner`);
// } else if (averageScoreDolphin === averageScoreKoala) {
//   console.log(`Both win the trophy`);
// }

// BONUS 2

// const averageScoreDolphin = (97 + 112 + 80) / 3;
// console.log(averageScoreDolphin);

// const averageScoreKoala = (109 + 95 + 50) / 3;
// console.log(averageScoreKoala);

// const minimumScore = 100;

// if (averageScoreDolphin > averageScoreKoala && averageScoreDolphin >= 100) {
//   console.log(`The Dolphin is the winner`);
// } else if (
//   averageScoreKoala > averageScoreDolphin &&
//   averageScoreKoala >= 100
// ) {
//   console.log(`The Koala is the winner`);
// } else if (
//   averageScoreDolphin === averageScoreKoala &&
//   averageScoreDolphin >= 100 &&
//   averageScoreKoala >= 100
// ) {
//   console.log(`Both win the trophy`);
// } else {
//   console.log(`Noone wins the troophy`);
// }

// CODING CHALLENGE 4

// First value 275

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// Second value 40

// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

//  Third value

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// Part 2 PRACTICE

// "use strict";
// function describeCountry(country, population, capitalCity) {
//   const state = `${country} has ${population} milion people and it's capital city is ${capitalCity}`;
//   return state;
// }

// const result1 = describeCountry("Finland", 6, "Helsinki");
// console.log(result1);
// const result2 = describeCountry("Macedonia", 2, "Skopje");
// console.log(result2);
// const result3 = describeCountry("USA", 340, "Washington DC");
// console.log(result3);

// Function Declarations vs Expressions
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const finland = percentageOfWorld1(6);
// console.log(finland);
// const macedonia = percentageOfWorld1(2);
// console.log(macedonia);
// const usa = percentageOfWorld1(340);
// console.log(usa);

// const percentage2 = function percentageOfWorld2(population) {
//   return (population / 7900) * 100;
// };
// const finland = percentage2(6);
// console.log(finland);
// const macedonia = percentage2(2);
// console.log(macedonia);
// const usa = percentage2(340);
// console.log(usa);

// Arrow function challenge
// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const result1 = percentageOfWorld3(6);
// console.log(result1);

// Functions calling other fucntions challenge

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const percentageResult = percentageOfWorld1(6);
// const percentageResult2 = percentageOfWorld1(2);
// const percentageResult3 = percentageOfWorld1(340);

// function describePopulation(country, population, percentageOfWorld1) {
//   const string = `${country} has ${population} milion people, which is about ${percentageOfWorld1} of the world`;
//   return string;
// }

// const result = describePopulation("Finland", 6, percentageResult);
// console.log(result);
// const secondResult = describePopulation("Macedonia", 2, percentageResult2);
// console.log(secondResult);
// const thirdResult = describePopulation("USA", 340, percentageResult3);
// console.log(thirdResult);

// FUCNTIONS CHALLENGE #1

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const averageDolphins = calcAverage(44, 23, 71);
// const averageKoalas = calcAverage(65, 54, 49);
// console.log(averageDolphins, averageKoalas);

// function checkWinner() {
//   if (averageDolphins > averageKoalas && averageDolphins >= 2 * averageKoalas) {
//     console.log(`Dolphins win by ${averageDolphins}vs${averageKoalas}`);
//     return averageDolphins;
//   } else if (
//     averageKoalas > averageDolphins &&
//     averageKoalas >= 2 * averageDolphins
//   ) {
//     console.log(`Koalas win by ${averageKoalas}vs${averageDolphins}`);
//     return averageKoalas;
//   } else {
//     console.log(`No one is the winner in this combination`);
//   }
// }

// checkWinner();

//Test data 2

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(averageDolphins, averageKoalas) {
//   if (averageDolphins > averageKoalas && averageDolphins >= 2 * averageKoalas) {
//     console.log(`Dolphins win (${averageDolphins} vs ${averageKoalas})`);
//     return averageDolphins;
//   } else if (
//     averageKoalas > averageDolphins &&
//     averageKoalas >= 2 * averageDolphins
//   ) {
//     console.log(`Koalas win (${averageKoalas} vs ${averageDolphins})`);
//     return averageKoalas;
//   } else {
//     console.log(`none`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// CODING CHALLENGE #2
// My way that works
// value 125
// const bill = calcTip1(125);

// function calcTip1(value) {
//   if (value >= 50 && value <= 300) {
//     return value * 0.15;
//   } else {
//     return value * 0.2;
//   }
// }

// console.log(bill);

// // value 555
// const bill2 = calcTip2(555);

// function calcTip2(value) {
//   if (value >= 50 && value <= 300) {
//     return value * 0.15;
//   } else {
//     return value * 0.2;
//   }
// }

// console.log(bill2);

// // value 44
// const bill3 = calcTip3(44);

// function calcTip3(value) {
//   if (value >= 50 && value <= 300) {
//     return value * 0.15;
//   } else {
//     return value * 0.2;
//   }
// }

// console.log(bill3);

// // array of bill values
// const bills = [125, 555, 44];
// // array of tip values from the function above
// const tip = [bill, bill2, bill3];

// // array total value+tip
// const total = [bills[0] + bill, bills[1] + bill2, bills[2] + bill3];
// console.log(total);

// Shorter way of writing all of the code above

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// Moja ekstra vezba e ova
// const calcTip = function (bill) {
//   return bill >= 150 && bill <= 300 ? bill * 0.05 : bill * 0.1;
// };

// const bills = [130, 206, 409];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// CODING CHALLENGE #3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBmi: function () {
//     const bmi = this.mass / this.height ** 2;
//     return bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     const bmi = this.mass / this.height ** 2;
//     return bmi;
//   },
// };

// if (mark.calcBmi() > john.calcBmi()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBmi()})`
//   );
// } else {
//   console.log(`It's the opposite way`);
// }

//  CODING CHALLENGE #4

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 80, 52];
// let tips = [];
// // let totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]) + bills[i]);
//   console.log(tips[i]);
// }

const sum = [0];

const totals = function (arr) {
  console.log(`${sum} + ${sum.length} / 2`);
};

for (i = 0; i < sum.length; i = i * 2) {
  // console.log(sum[i]);
}
