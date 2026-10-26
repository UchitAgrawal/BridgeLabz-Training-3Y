"use strict";

/*
Q9 – JSON Audit
A parse failure is caught per row, so later records still get checked.
Debug: breakpoint inside loop; watch lineNumber, parsed, clean, errors.
*/

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;
  try {
    const parsed = JSON.parse(rawData[index]);

    if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
        !Object.prototype.hasOwnProperty.call(parsed, "age")) {
      throw new Error("Missing required key (user or age).");
    }

    const age = Number(parsed.age);
    if (!Number.isFinite(age)) throw new TypeError("Age must convert to a valid number.");

    const normalized = { user: String(parsed.user), age };
    clean.push(normalized);
    if (age < 18) under18.push(normalized);
    console.log(`Line ${lineNumber}: VALID ${JSON.stringify(normalized)}`);
  } catch (error) {
    errors.push({ lineNumber, message: error.message, raw: rawData[index] });
    console.log(`Line ${lineNumber}: ERROR ${error.name}: ${error.message}`);
  }
}

console.log("\n===== JSON AUDIT REPORT =====");
console.log("Clean entries:", clean);
console.log("Errors:", errors);
console.log("Under-18 users:", under18);
console.log(`Valid: ${clean.length} | Invalid: ${errors.length}`);
