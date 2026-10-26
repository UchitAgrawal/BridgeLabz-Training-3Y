// Q7 – Customer Feedback Processor
"use strict";

const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const containsNegativeWord = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
const feedbackStatus = containsNegativeWord ? "Needs Improvement" : "Positive Feedback";

console.log("===== CUSTOMER FEEDBACK =====");
console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${words.length}`);
console.log(`Contains bad/poor: ${containsNegativeWord}`);
console.log(`Result: ${feedbackStatus}`);
