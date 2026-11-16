// Q5: Frontend Rush — Callback Hell vs async/await

// ----- Version 1: Nested callbacks (callback hell) -----

function designCallback(next) {
  setTimeout(() => {
    console.log("Design completed.");
    next();
  }, 1000);
}

function buildCallback(next) {
  setTimeout(() => {
    console.log("Build completed.");
    next();
  }, 1000);
}

function testCallback(next) {
  setTimeout(() => {
    console.log("Testing completed.");
    next();
  }, 1000);
}

function deployCallback(next) {
  setTimeout(() => {
    console.log("Deployment completed.");
    next();
  }, 1000);
}

function celebrateCallback() {
  setTimeout(() => {
    console.log("Celebration time!");
  }, 1000);
}

function runCallbackPipeline() {
  console.log("Starting callback pipeline...");
  designCallback(() => {
    buildCallback(() => {
      testCallback(() => {
        deployCallback(() => {
          celebrateCallback();
        });
      });
    });
  });
}

// ----- Version 2: Promise-based functions with async/await -----

function runStage(stageName) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${stageName} completed.`);
      resolve();
    }, 1000);
  });
}

async function runAsyncPipeline() {
  console.log("Starting async/await pipeline...");

  await runStage("Design");
  await runStage("Build");
  await runStage("Test");
  await runStage("Deploy");
  await runStage("Celebrate");

  console.log("Async pipeline finished.");
}

// Run one version at a time to keep the console output easy to follow.
// Uncomment the version you want to demonstrate.
runCallbackPipeline();

// Start the async/await version after the callback version has completed.
setTimeout(() => {
  runAsyncPipeline().catch(error => {
    console.error("Async pipeline failed:", error);
  });
}, 5100);

/*
Why async/await is easier to read:
- It lets asynchronous steps look like normal sequential code.
- It avoids deeply nested callback functions.
- try/catch can handle errors in a familiar way.
- await pauses this async function until its Promise settles;
  it does not block the JavaScript event loop.
*/
