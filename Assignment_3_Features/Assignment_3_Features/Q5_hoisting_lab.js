"use strict";

/*
Q5 – Hoisting Lab
Original var score is hoisted and initialized as undefined, so first log prints undefined.
Function declaration is hoisted, so announce() can be called before its source line.
let status is hoisted but stays in the Temporal Dead Zone until initialized.
Therefore startGame() before status initialization throws ReferenceError.
*/

function runCorrectedHoistingExample() {
  var score = 50;
  function announce() { console.log("Game started"); }
  let status = "ready";

  console.log(score);
  announce();
  startGame();

  function startGame() {
    console.log(status);
  }
}

runCorrectedHoistingExample();

/*
Arrow comparison:
Arrow functions assigned to const are not callable before initialization (TDZ).
They are expressions, not hoisted function declarations.
*/
const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log("ready");

announceArrow();
startGameArrow();
