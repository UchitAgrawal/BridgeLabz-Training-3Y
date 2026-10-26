"use strict";

/*
Q2 – Employee Bonus Calculator
Strict mode prevents accidental assignment to undeclared variables.
Debug observation: place a breakpoint inside try and watch salary, years, and bonus.
*/

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

function calculateEmployeeBonus(employee) {
  try {
    if (!employee || typeof employee !== "object") {
      throw new TypeError("Employee record is missing or invalid.");
    }
    if (!("name" in employee) || !("salary" in employee) || !("years" in employee)) {
      throw new Error("Missing employee property.");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
      throw new RangeError("Salary or years is not a valid non-negative number.");
    }

    const bonusRate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * bonusRate;

    console.log(`${employee.name}: Salary ₹${salary.toFixed(2)} | Experience ${years} years | Bonus ${(bonusRate * 100).toFixed(0)}% = ₹${bonus.toFixed(2)} | Total ₹${(salary + bonus).toFixed(2)}`);
  } catch (error) {
    console.log(`Employee calculation failed: ${error.name}: ${error.message}`);
  }
}

for (const employee of employees) calculateEmployeeBonus(employee);
