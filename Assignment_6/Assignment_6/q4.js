// Q4: DevOps Delay — Promise.all() and Promise.race()

function deployToServer(serverName, delayInMilliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Each server has a small chance of deployment failure.
      if (Math.random() < 0.20) {
        reject(new Error(`${serverName} deployment failed.`));
      } else {
        console.log(`${serverName} deployment finished.`);
        resolve(`${serverName} is ready`);
      }
    }, delayInMilliseconds);
  });
}

// Promise.all() waits until every server succeeds.
// It rejects as soon as any one of the supplied promises rejects.
Promise.all([
  deployToServer("Server A", 2000),
  deployToServer("Server B", 3000)
])
  .then(() => {
    console.log("Deployment completed for all servers");
  })
  .catch(error => {
    console.error("Deployment group failed:", error.message);
  });

// Promise.race() settles with the first promise to settle
// (either a fulfillment or a rejection).
Promise.race([
  deployToServer("Server A", 2000),
  deployToServer("Server B", 3000)
])
  .then(firstResponse => {
    console.log("Fastest response:", firstResponse);
  })
  .catch(error => {
    console.error("Fastest response failed:", error.message);
  });

/*
The two demonstrations above start separate simulated deployments.
Server A has the shorter delay, so it normally responds first.
A random failure can cause Promise.race() to reject before a server succeeds.
*/
