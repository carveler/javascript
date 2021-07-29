let boolean1 = true;
let boolean2 = false;

let hiddenBoolean1 = null;
console.log("hiddenBoolean1 ==> null ==>", !!hiddenBoolean1); //false
let hiddenBoolean2 = undefined;
console.log("hiddenBoolean1 ==> undefined ==>", !!hiddenBoolean2); //false

let hiddenBoolean3 = "";
console.log("hiddenBoolean1 ==> '' ==>", !!hiddenBoolean3); //false

let hiddenBoolean4 = 0;
console.log("hiddenBoolean1 ==> 0 ==>", !!hiddenBoolean4); //false

let hiddenBoolean5 = 1;
console.log("hiddenBoolean1 ==> 1 ==>", !!hiddenBoolean5); //true

let hiddenBoolean6 = -1;
console.log("hiddenBoolean1 ==> -1 ==>", !!hiddenBoolean6); //true
