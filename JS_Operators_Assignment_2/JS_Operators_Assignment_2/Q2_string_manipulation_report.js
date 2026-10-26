// Q2 – String Manipulation Report
"use strict";

const productName = " wireless headphones PRO ";

// trim removes surrounding spaces; split/map/join title-case each word.
const trimmedName = productName.trim().toLowerCase();
const titleCaseName = trimmedName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// replace is case-sensitive, so replace the lowercase word after normalization.
const cleanedTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log("===== PRODUCT TITLE REPORT =====");
console.log(`Original: "${productName}"`);
console.log(`Cleaned: "${cleanedTitle}"`);
console.log(`Length: ${cleanedTitle.length}`);
