// Q4 – Academic Performance Evaluator
"use strict";

// Sample marks for five subjects; change these values to test other cases.
const marks = [88, 91, 76, 84, 90];
const minimumPassingMark = 35;
const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
const percentage = (marks.reduce((sum, mark) => sum + mark, 0) / (marks.length * 100)) * 100;
const hasSubjectBelowPass = marks.some((mark) => mark < minimumPassingMark);

let result;
if (hasSubjectBelowPass || percentage < 50) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else {
  result = "Promoted";
}

console.log("===== ACADEMIC REPORT =====");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Any subject below ${minimumPassingMark}: ${hasSubjectBelowPass}`);
console.log(`Result: ${result}`);
