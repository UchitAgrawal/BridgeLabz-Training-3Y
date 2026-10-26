// Q9 – Random Math Quiz Generator
"use strict";

const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;
switch (operator) {
  case "+":
    correctAnswer = firstNumber + secondNumber;
    break;
  case "-":
    correctAnswer = firstNumber - secondNumber;
    break;
  case "*":
    correctAnswer = firstNumber * secondNumber;
    break;
  case "/":
    correctAnswer = (firstNumber / secondNumber).toFixed(2);
    break;
  default:
    console.log("Unsupported operator.");
}

console.log("===== RANDOM MATH QUIZ =====");
console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct answer: ${correctAnswer}`);
