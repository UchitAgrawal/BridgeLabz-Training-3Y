"use strict";

/*
Q6 – Pyramid Pattern Generator
Default outer-loop limit is 5. In Node.js, an optional command-line argument can
override it: node Q6_pyramid_pattern_generator.js 4
Debug: step through outer row and inner column. var is function-scoped; let is block-scoped.
*/

const requestedLimit = Number(process.argv[2]);
const limit = Number.isInteger(requestedLimit) && requestedLimit > 0 ? requestedLimit : 5;

for (let row = 1; row <= limit; row++) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    line += "* ";
  }
  console.log(line.trimEnd());
}

/*
Changing let to var in these for-loop headers still produces the same printed pyramid
because each loop runs synchronously and the variables are not used after the loop.
But var is function-scoped and can be reused/leak into surrounding function scope;
let is block-scoped. Strict mode catches undeclared variables, not var/let differences.
*/
