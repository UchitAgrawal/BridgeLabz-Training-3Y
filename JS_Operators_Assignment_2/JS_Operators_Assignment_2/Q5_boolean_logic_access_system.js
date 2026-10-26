// Q5 – Boolean Logic Access System
"use strict";

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Access/security is safe only when every required condition is true.
  const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(`Door locked=${isDoorLocked}, Window closed=${isWindowClosed}, Alarm=${isAlarmOn}, Owner inside=${isOwnerInside} => ${secure ? "Secure" : "Unsafe"}`);
  // ! demonstrates negation; || demonstrates a quick unsafe-condition check.
  const unsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;
  console.log(`Unsafe condition detected: ${unsafe}`);
}

checkSecurity(true, true, true, true);
checkSecurity(true, false, true, true);
checkSecurity(true, true, false, true);
checkSecurity(true, true, true, false);
