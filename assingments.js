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
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    const bmi = this.mass / this.height ** 2;
    return bmi;
  },
};

if (mark.calcBmi() > john.calcBmi()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${
      john.fullName
    }'s (${john.calcBmi()})`
  );
} else {
  console.log(`It's the opposite way`);
}
