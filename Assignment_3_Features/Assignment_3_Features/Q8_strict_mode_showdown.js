/*
Q8 – Strict Mode Showdown
Run this file with node. Strict-mode examples are wrapped in functions because a
duplicate parameter name is a syntax error in strict mode and would stop the file
from executing if written at top level.
*/

function sloppyDemo(a, a) {
  total = 10;          // In sloppy mode this creates/updates a global property.
  console.log("Sloppy duplicate parameters:", a);
  console.log("Sloppy total:", total);
  // delete total;     // Deleting an unqualified identifier is invalid in strict mode.
}

sloppyDemo(5, 10);

function strictDemo() {
  "use strict";
  // Duplicate parameter names are not permitted in strict functions.
  // The following two operations are intentionally demonstrated separately.
  try {
    undeclaredValue = 10;
  } catch (error) {
    console.log(`Strict undeclared assignment: ${error.name}`);
  }

  const total = 10;
  try {
    // delete total; // SyntaxError if uncommented: deleting an identifier is illegal.
    console.log("Strict declared total:", total);
  } catch (error) {
    console.log(`Strict delete: ${error.name}`);
  }
}
strictDemo();

/* Correct ES6 version: declare variables and use unique parameters. */
function correctDemo(first, second) {
  "use strict";
  const total = first + second;
  console.log("Correct ES6 total:", total);
}
correctDemo(5, 10);
