// Q3 – Math Utility Dashboard
"use strict";

const x = 16.75;
const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10; // 10 through 50 inclusive.

console.log("===== MATH DASHBOARD =====");
console.log(`Input: ${x}`);
console.log(`Rounded: ${rounded}`);
console.log(`Square root: ${squareRoot.toFixed(4)}`);
console.log(`Cube: ${cube.toFixed(4)}`);
console.log(`Random (10–50): ${randomNumber}`);
