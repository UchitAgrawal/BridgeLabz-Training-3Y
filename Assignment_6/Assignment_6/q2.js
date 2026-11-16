// Q2: Task Scheduler — Microtasks vs Macrotasks

console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

/*
Expected output:
Start
Synchronous log
End
Promise callback (microtask)
setTimeout callback (macrotask)

Explanation:
1. Synchronous statements run first, in their written order.
2. Promise.then() callbacks are queued as microtasks.
3. setTimeout() callbacks are queued as macrotasks (tasks).
4. After the current synchronous script finishes, JavaScript drains
   the microtask queue before starting the next macrotask.
*/
