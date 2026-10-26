"use strict";

/*
Q1 – Dynamic Data Parser
Debug observation: inspect rawValue, convertedNumber, and both arrays in the debugger.
Number() converts null to 0 and ""/whitespace to 0, so we explicitly mark whitespace
strings invalid per assignment requirements. Boolean() uses truthiness, not text parsing:
"false" is true because it is a non-empty string.
*/

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let index = 0; index < apiData.length; index++) {
  const rawValue = apiData[index];
  const numberValue = Number(rawValue);
  const booleanValue = Boolean(rawValue);
  const stringValue = String(rawValue);

  const isWhitespaceOnly = typeof rawValue === "string" && rawValue.trim() === "";
  const isValidNumber = !Number.isNaN(numberValue) && Number.isFinite(numberValue) && !isWhitespaceOnly;

  console.log(`\n[Item ${index + 1}]`);
  console.log(`Original: ${stringValue}`);
  console.log(`Number: ${numberValue}`);
  console.log(`Boolean: ${booleanValue}`);
  console.log(`String: "${stringValue}"`);

  if (isValidNumber) {
    validNumbers.push(numberValue);
    console.log("Status: VALID numeric value");
  } else {
    invalidNumbers.push({ index, value: rawValue, reason: isWhitespaceOnly ? "whitespace-only string" : "NaN / non-finite conversion" });
    console.log("Status: INVALID numeric value");
  }
}

console.log("\n===== NUMERIC DATA REPORT =====");
console.log("Valid numeric values:");
for (const value of validNumbers) console.log(`  ✔ ${value}`);

console.log("Invalid values:");
for (const item of invalidNumbers) {
  console.log(`  ✘ index ${item.index}: ${String(item.value)} (${item.reason})`);
}
console.log(`Valid count: ${validNumbers.length}`);
console.log(`Invalid count: ${invalidNumbers.length}`);
