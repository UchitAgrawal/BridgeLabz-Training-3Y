"use strict";

/*
Q4 – Debugging Mystery
Original issue: assigning greeting without let/const/var throws ReferenceError in strict mode.
Correct version declares greeting locally. Watch greeting and inspect Call Stack in VS Code.
*/

function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();
