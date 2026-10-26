// Q7 – Smart Guessing Game
"use strict";

const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // Test value; change to test different outcomes.

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const difference = Math.abs(userGuess - secretNumber);
  if (difference <= 3) {
    console.log(`Very close! Secret number was ${secretNumber}.`);
  } else if (userGuess > secretNumber) {
    console.log(`Too high. Secret number was ${secretNumber}.`);
  } else {
    console.log(`Too low. Secret number was ${secretNumber}.`);
  }
}
