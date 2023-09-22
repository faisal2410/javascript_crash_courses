function f1() {
    // Some code
}

function f2() {
    f1();
}

function f3() {
    f2();
}

// Invoke the functions
f3();

// Async => Not occurring at the same time

// Fetch data from server
// Want to execute something with a delay
// Want to execute something after an event

// 1. Browser APIs / Web APIs
// setTimeout, click, mouse over

// 2. Promises


function printMe() {
    console.log('Print Me');
}

function test(){
    console.log('test');
}

setTimeout(printMe, 2000);
setTimeout(printMe, 0);
test();
