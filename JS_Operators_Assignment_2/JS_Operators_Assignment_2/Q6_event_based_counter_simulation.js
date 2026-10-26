// Q6 – Event-Based Counter Simulation
"use strict";

let count = 0;

function increment() {
  count++;
  console.log(`Increment click -> count: ${count}`);
}

function decrement() {
  count--;
  console.log(`Decrement click -> count: ${count}`);
}

// Nested function reads and updates the outer function's count through closure.
function runCounterDemo() {
  let nestedCount = count;
  function nestedIncrement() {
    nestedCount++;
    console.log(`Nested function count: ${nestedCount}`);
  }
  nestedIncrement();
  count = nestedCount;
}

increment(); // Simulated click
increment(); // Simulated click
decrement(); // Simulated click
runCounterDemo();
console.log(`Final count: ${count}`);
