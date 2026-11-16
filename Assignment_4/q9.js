// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  applyCoupon(couponCode) {
    // Accept SAVE20, DISC10, or the same pattern with another number.
    const couponPattern = /^(SAVE|DISC)(\d{1,2})$/i;
    const match = couponCode.trim().match(couponPattern);

    if (!match) {
      return false;
    }

    const discount = Number(match[2]);
    if (discount < 1 || discount > 100) {
      return false;
    }

    this.discountPercent = discount;
    return true;
  }

  getFinalTotal() {
    return this.getTotal() * (1 - this.discountPercent / 100);
  }
}

const cart = new Cart();

const cartForm = document.getElementById("cartForm");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const finalTotal = document.getElementById("finalTotal");
const couponMessage = document.getElementById("couponMessage");

function updateCartDisplay() {
  if (cart.items.length === 0) {
    cartItems.textContent = "Your cart is empty.";
  } else {
    cartItems.textContent = cart.items
      .map(item => `${item.name} — ₹${item.price.toFixed(2)} × ${item.quantity}`)
      .join("\n");
  }

  cartTotal.textContent = `Subtotal: ₹${cart.getTotal().toFixed(2)}`;
  finalTotal.textContent = `Final total: ₹${cart.getFinalTotal().toFixed(2)}`;
}

cartForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("itemName").value.trim();
  const price = Number(document.getElementById("itemPrice").value);
  const quantity = Number(document.getElementById("itemQuantity").value);

  if (!name || !Number.isFinite(price) || price <= 0 ||
      !Number.isInteger(quantity) || quantity < 1) {
    couponMessage.textContent = "Enter a valid item name, price and quantity.";
    couponMessage.style.color = "red";
    return;
  }

  cart.addItem(name, price, quantity);
  cart.discountPercent = 0; // Reapply the coupon after changing the cart.
  couponMessage.textContent = "Item added. Apply your coupon again if needed.";
  couponMessage.style.color = "green";
  cartForm.reset();
  document.getElementById("itemQuantity").value = 1;
  updateCartDisplay();
});

document.getElementById("applyCoupon").addEventListener("click", function () {
  const couponCode = document.getElementById("coupon").value;

  if (cart.items.length === 0) {
    couponMessage.textContent = "Add an item before applying a coupon.";
    couponMessage.style.color = "red";
    return;
  }

  if (cart.applyCoupon(couponCode)) {
    couponMessage.textContent = `${cart.discountPercent}% discount applied successfully.`;
    couponMessage.style.color = "green";
  } else {
    cart.discountPercent = 0;
    couponMessage.textContent = "Invalid coupon. Use a code such as SAVE20 or DISC10.";
    couponMessage.style.color = "red";
  }

  updateCartDisplay();
});

updateCartDisplay();
