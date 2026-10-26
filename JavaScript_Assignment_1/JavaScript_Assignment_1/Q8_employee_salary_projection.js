// Q8 – Employee Salary Projection
"use strict";

let currentSalary = 50000;
const annualIncrementRate = 8; // Percent increase each year.
const projection = [];

for (let year = 1; year <= 5; year++) {
  currentSalary *= 1 + annualIncrementRate / 100; // Assignment operator applies yearly increment.
  currentSalary = Math.round(currentSalary);
  projection.push({ year: `Year ${year}`, salary: currentSalary });
}

console.log("===== 5-YEAR SALARY PROJECTION =====");
console.table(projection);
