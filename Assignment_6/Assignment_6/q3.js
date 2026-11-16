// Q3: Bug Tracker — Convert callback code to a Promise.

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.30; // Simulate API failure.

      if (apiFailed) {
        reject(new Error("Bug tracking API request failed."));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log("Bugs retrieved successfully:");
    console.table(bugs.map((bug, index) => ({
      "Bug number": index + 1,
      "Bug description": bug
    })));
  })
  .catch(error => {
    console.error("Unable to fetch bugs:", error.message);
  });
