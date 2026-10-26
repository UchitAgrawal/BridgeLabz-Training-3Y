"use strict";

/*
Q10 – Nested Hoisting and Closures
Expected output:
outer logs undefined because its var count is hoisted and initialized to undefined.
inner logs undefined because inner has its own local var count, also hoisted.
The inner count shadows outer count; the function has its own execution context.
Arrow version behaves the same here because the arrow body declares its own count.
If the inner declaration is removed, the arrow reads the outer count through lexical scope.
*/

function outer() {
  console.log("outer count before assignment:", count);
  var count = 5;

  function inner() {
    console.log("inner count before assignment:", count);
    var count = 10;
  }
  inner();
  console.log("outer count after inner:", count);
}
outer();

function outerArrowDemo() {
  var count = 5;
  const innerArrow = () => {
    console.log("arrow inner sees outer count:", count);
    // No local count here, so lexical scope resolves outer's count.
  };
  innerArrow();
}
outerArrowDemo();

function outerArrowShadowDemo() {
  var count = 5;
  const innerArrow = () => {
    console.log("arrow with local count before assignment:", count);
    var count = 10;
  };
  innerArrow();
}
outerArrowShadowDemo();

/*
Debug session guide:
1. Set breakpoints on each console.log.
2. Start Run and Debug (F5), choose Node.js.
3. In VARIABLES, expand Local and Closure scopes.
4. In WATCH, add: count
5. In CALL STACK, observe outer -> inner; arrow calls appear as their function frame.
*/
