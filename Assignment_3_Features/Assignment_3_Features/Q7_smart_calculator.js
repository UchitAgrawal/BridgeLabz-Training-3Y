"use strict";

/*
Q7 – Smart Calculator
The assignment's operations list is iterated. num1/num2 are supplied values.
Custom InvalidOperationError is thrown for an unknown operation.
*/

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
  constructor(message) { super(message); this.name = "InvalidOperationError"; }
}
class CalculationError extends Error {
  constructor(message) { super(message); this.name = "CalculationError"; }
}

function calculate(operation, first, second) {
  switch (operation) {
    case "add": return first + second;
    case "subtract": return first - second;
    case "divide":
      if (second === 0) throw new CalculationError("Cannot divide by zero.");
      return first / second;
    case "power": return first ** second;
    case "root":
      if (first < 0) throw new CalculationError("Cannot calculate square root of a negative number.");
      return Math.sqrt(first);
    default:
      throw new InvalidOperationError(`Operation "${operation}" is not recognized.`);
  }
}

console.log("===== SMART CALCULATOR =====");
for (const operation of operations) {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`${operation.padEnd(10)} | ${num1} and ${num2} | Result: ${result}`);
  } catch (error) {
    console.log(`${operation.padEnd(10)} | ERROR ${error.name}: ${error.message}`);
  }
}

try {
  calculate("multiply", num1, num2);
} catch (error) {
  console.log(`Unknown operation test: ${error.name}: ${error.message}`);
}
