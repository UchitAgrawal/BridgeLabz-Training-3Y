// Q6 – Progressive Discount System
"use strict";

const purchaseAmount = 7500;
let discountRate;

if (purchaseAmount >= 10000) {
  discountRate = 0.25;
} else if (purchaseAmount >= 5000) {
  discountRate = 0.15;
} else if (purchaseAmount >= 2000) {
  discountRate = 0.05;
} else {
  discountRate = 0;
}

const discountAmount = Math.round(purchaseAmount * discountRate);
const finalPrice = Math.round(purchaseAmount - discountAmount);

console.log("===== DISCOUNT SUMMARY =====");
console.log(`Original total: ₹${purchaseAmount}`);
console.log(`Discount: ${(discountRate * 100).toFixed(0)}% (₹${discountAmount})`);
console.log(`Final price: ₹${finalPrice}`);
