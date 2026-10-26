// Q9 – Odd–Even Number Analyzer
"use strict";

const numbers = [];
const classifications = [];

for (let number = 1; number <= 30; number++) {
  numbers.push(number);

  let result;
  if (number % 3 === 0 && number % 5 === 0) {
    result = "FizzBuzz";
  } else if (number % 2 === 0) {
    result = "Even";
  } else {
    result = "Odd";
  }

  classifications.push({ number, result });
  console.log(`${number}: ${result}`);
}

console.log("===== CLASSIFICATION ARRAY =====");
console.log(classifications);
