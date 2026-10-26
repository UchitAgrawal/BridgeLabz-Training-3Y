// Q10 – Citizen Eligibility Validator
"use strict";

const age = 22;
const isCitizen = true;

let eligibility;
if (isCitizen) {
  if (age >= 21) {
    eligibility = "Eligible for all services.";
  } else if (age >= 18 && age <= 20) {
    eligibility = "Eligible to vote only.";
  } else {
    eligibility = "Not eligible yet.";
  }
} else {
  if (age >= 18) {
    eligibility = "Only age criteria met.";
  } else {
    eligibility = "Not eligible yet.";
  }
}

console.log(`Age: ${age} | Citizen: ${isCitizen}`);
console.log(eligibility);
