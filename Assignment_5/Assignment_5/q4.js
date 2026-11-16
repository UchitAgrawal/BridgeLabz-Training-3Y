// Q4: Constructor function and shared prototype method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// This method is created once on Car.prototype and shared by Car objects.
Car.prototype.getDetails = function () {
  return `Brand: ${this.brand}, Model: ${this.model}`;
};

const firstCar = new Car("Toyota", "Fortuner");
const secondCar = new Car("Honda", "City");

console.log(firstCar.getDetails());
console.log(secondCar.getDetails());

// Both objects use the same function from the prototype.
console.log(
  "Shared prototype method:",
  firstCar.getDetails === secondCar.getDetails
); // true
