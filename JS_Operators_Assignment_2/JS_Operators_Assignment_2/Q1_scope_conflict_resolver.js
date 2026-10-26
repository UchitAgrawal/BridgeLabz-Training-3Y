// Q1 – Scope Conflict Resolver
"use strict";

let bonus = 5000; // Global bonus amount.

function calculateSalary(isPermanent) {
  const salary = 40000; // Local salary.
  // isPermanent is a function parameter (local scope).
  const totalSalary = salary + (isPermanent ? bonus : 0);
  console.log(`Permanent: ${isPermanent} | Salary: ${salary} | Bonus: ${isPermanent ? bonus : 0} | Total: ${totalSalary}`);
  // Changing the parameter does not change a global variable with the same name.
  isPermanent = !isPermanent;
  console.log(`Changed local isPermanent to ${isPermanent}; global bonus remains ${bonus}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus outside function: ${bonus}`);
