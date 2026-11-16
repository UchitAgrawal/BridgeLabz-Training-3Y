// Q10: Final Delivery — Asynchronous food delivery pipeline

// Each pipeline step returns a Promise that settles after a random
// delay of 1–2 seconds. A failure is simulated with Math.random().
function runDeliveryStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const randomDelay = 1000 + Math.floor(Math.random() * 1001);

    setTimeout(() => {
      const stepFailed = Math.random() < 0.15;

      if (stepFailed) {
        reject(new Error(`${stepName} failed.`));
      } else {
        console.log(successMessage);
        resolve(successMessage);
      }
    }, randomDelay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // Each await waits for the current step to finish before
    // starting the next step. Other JavaScript work can continue
    // while the Promise is pending; await does not block the event loop.
    await runDeliveryStep("takeOrder", "Step 1: Order taken");
    await runDeliveryStep("prepare", "Step 2: Food prepared");
    await runDeliveryStep("pack", "Step 3: Package ready");
    await runDeliveryStep("dispatch", "Step 4: Out for delivery");
    await runDeliveryStep("deliver", "Delivery completed!");

  } catch (error) {
    // The first rejected Promise transfers control to this catch block.
    console.error("Pipeline failed!", error.message);
  }
}

// Calling an async function starts it; it returns a Promise.
runPipeline();
