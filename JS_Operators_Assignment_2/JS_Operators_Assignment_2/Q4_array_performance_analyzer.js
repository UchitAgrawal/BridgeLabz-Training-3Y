// Q4 – Array Performance Analyzer
"use strict";

// Generate 8 integer scores from 30 through 100.
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;
const passedScores = scores.filter((score) => score >= 50);
const scoreReport = scores.map((score, index) => `Student ${index + 1}: ${score} (${score >= 50 ? "Pass" : "Fail"})`);

console.log("===== PERFORMANCE REPORT =====");
console.log(scoreReport.join("\n"));
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Passed students (>= 50): ${passedScores.length}`);
