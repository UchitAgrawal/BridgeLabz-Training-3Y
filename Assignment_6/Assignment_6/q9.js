// Q9: Debugging the Event Loop

/*
Predicted output:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback

Reason:
Synchronous statements run first. Promise.then() queues a microtask,
while setTimeout() queues a macrotask (task). Once the synchronous
script finishes, the event loop processes queued microtasks before
moving on to the next macrotask.
*/

console.log("Script start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("Script end");

// Actual output should match the predicted order above.
