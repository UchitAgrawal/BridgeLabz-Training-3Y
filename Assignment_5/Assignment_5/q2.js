// Q2: Passing callback functions to applyOperation()

function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double every number.
const doubledNumbers = applyOperation(numbers, function (number) {
  return number * 2;
});

// Square every number.
const squaredNumbers = applyOperation(numbers, function (number) {
  return number * number;
});

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Squared numbers:", squaredNumbers);
