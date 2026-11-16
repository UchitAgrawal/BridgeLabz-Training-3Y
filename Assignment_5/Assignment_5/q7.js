// Q7: Closure using makeMultiplier()

function makeMultiplier(multiplier) {
  // The returned function remembers the multiplier variable
  // from this outer function, even after makeMultiplier() has finished.
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

/*
Closure explanation:
makeMultiplier() returns an inner function. The inner function still
has access to the outer function's multiplier variable. This retained
access to the outer scope is called a closure.
Each returned function remembers its own multiplier value.
*/
