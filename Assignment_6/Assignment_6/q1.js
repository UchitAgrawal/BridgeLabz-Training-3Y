// Q1: The Startup Morning — Async Coffee Maker

// Each step returns a Promise and resolves after 1–2 seconds.
// A small random chance of failure is included to demonstrate .catch().
function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;

    setTimeout(() => {
      if (Math.random() < 0.10) {
        reject(new Error("Could not boil the water."));
      } else {
        console.log("Step 1: Water boiled.");
        resolve("Hot water");
      }
    }, delay);
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;

    setTimeout(() => {
      if (Math.random() < 0.10) {
        reject(new Error("Coffee brewing failed."));
      } else {
        console.log(`Step 2: Coffee brewed using ${water}.`);
        resolve("Freshly brewed coffee");
      }
    }, delay);
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;

    setTimeout(() => {
      if (Math.random() < 0.10) {
        reject(new Error("Could not pour coffee into the cup."));
      } else {
        console.log(`Step 3: ${coffee} poured into a cup.`);
        resolve("Coffee ready for the team!");
      }
    }, delay);
  });
}

boilWater()
  .then(water => brewCoffee(water))
  .then(coffee => pourIntoCup(coffee))
  .then(message => console.log(message))
  .catch(error => console.error("Coffee process failed:", error.message));
