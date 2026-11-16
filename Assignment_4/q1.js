// Q1: E-Commerce Product Manager (Classes + Objects)

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercent) {
    this.price = this.price - (this.price * discountPercent / 100);
  }

  displayDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(101, "Laptop", 55000, "Electronics"),
  new Product(102, "Headphones", 1500, "Electronics"),
  new Product(103, "Notebook", 80, "Stationery"),
  new Product(104, "Office Chair", 4500, "Furniture")
];

// Apply a 10% discount to the headphones.
products[1].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nProducts with price greater than ₹1000:");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));
