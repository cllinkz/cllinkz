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

// const bills = [125, 555, 44];

function calcTip(value) {
  if (value >= 50 && value <= 300) return value * 0.15;
}

const bill = calcTip(100);
console.log(bill);
