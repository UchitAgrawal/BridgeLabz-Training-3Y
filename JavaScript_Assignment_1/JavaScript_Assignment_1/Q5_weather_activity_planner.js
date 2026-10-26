// Q5 – Weather Activity Planner
"use strict";

const temperature = 28;
const isRaining = false;
const windSpeed = 12;

let activity;
if (isRaining) {
  activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  activity = "Too cold and windy — stay home.";
} else if (temperature >= 20 && temperature <= 30 && !isRaining || windSpeed < 15) {
  // Demonstrates &&, ||, and !. Parentheses make mixed logic easier to read.
  activity = "Perfect day for a walk.";
} else {
  activity = "Check conditions and choose a comfortable activity.";
}

console.log(`Temperature: ${temperature}°C | Rain: ${isRaining} | Wind: ${windSpeed} km/h`);
console.log(`Recommendation: ${activity}`);
