// Q2 – Multi-Type Data Summary
"use strict";

const userName = "Aarav";
const userAge = 21;
const isActive = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const userProfile = { city: "Mathura", role: "Student" };
const middleName = null;
let optionalValue;

const entries = [
  { label: "userName", value: userName, type: typeof userName },
  { label: "userAge", value: userAge, type: typeof userAge },
  { label: "isActive", value: isActive, type: typeof isActive },
  { label: "subjects", value: JSON.stringify(subjects), type: Array.isArray(subjects) ? "array" : typeof subjects },
  { label: "userProfile", value: JSON.stringify(userProfile), type: typeof userProfile },
  { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "optionalValue", value: String(optionalValue), type: typeof optionalValue }
];

console.table(entries);
