// Q8: Add a custom myMap() method to Array.prototype

// Define it as non-enumerable, like the built-in Array.prototype.map.
Object.defineProperty(Array.prototype, "myMap", {
  value: function (callback, thisArg) {
    if (this === null || this === undefined) {
      throw new TypeError("myMap called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }

    const sourceArray = Object(this);
    const length = sourceArray.length >>> 0;
    const result = new Array(length);

    for (let index = 0; index < length; index++) {
      // Match map(): skip indexes that do not exist in a sparse array.
      if (index in sourceArray) {
        result[index] = callback.call(
          thisArg,
          sourceArray[index],
          index,
          sourceArray
        );
      }
    }

    return result;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function (number) {
  return number * 2;
});

console.log("Original array:", numbers);
console.log("myMap result:", doubledNumbers); // [2, 4, 6]

// It also supplies value, index and original array to the callback.
const descriptions = numbers.myMap((number, index) => `${index}: ${number}`);
console.log("With indexes:", descriptions);
