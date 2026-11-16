// Q8: Order Processing Flow — Retry mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // The order submission has a 50% chance of failure.
      if (Math.random() < 0.5) {
        reject(new Error("Order submission failed"));
      } else {
        resolve("Order submitted successfully");
      }
    }, 500);
  });
}

async function processOrder() {
  const maximumAttempts = 3;

  for (let attempt = 1; attempt <= maximumAttempts; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      console.log(result);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);

      if (attempt === maximumAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

processOrder().catch(error => {
  console.error("Final order status:", error.message);
});
