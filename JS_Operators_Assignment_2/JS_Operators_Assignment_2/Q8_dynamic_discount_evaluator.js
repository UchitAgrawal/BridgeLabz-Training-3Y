// Q8 – Dynamic Discount Evaluator
"use strict";

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
let discountedItemsTotal = 0;

for (const item of cart) {
  let discountRate = 0;
  if (item.category === "electronics") discountRate = 0.10;
  else if (item.category === "fashion") discountRate = 0.05;

  const discount = item.price * discountRate;
  const finalItemPrice = item.price - discount;
  discountedItemsTotal += finalItemPrice;
  console.log(`${item.item}: ₹${item.price} | Discount ${(discountRate * 100)}% (₹${discount}) | After discount ₹${finalItemPrice}`);
}

// Extra 5% applies to the total cart value if original subtotal > ₹50,000.
const extraDiscount = subtotal > 50000 ? discountedItemsTotal * 0.05 : 0;
const finalTotal = discountedItemsTotal - extraDiscount;

console.log("===== CART SUMMARY =====");
console.log(`Subtotal: ₹${subtotal}`);
console.log(`After category discounts: ₹${discountedItemsTotal}`);
console.log(`Extra cart discount: ₹${extraDiscount}`);
console.log(`Final total: ₹${finalTotal}`);
