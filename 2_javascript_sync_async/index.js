// // Example1
// function f1() {
//     console.log('f1')
// }

// function f2() {
//     f1();
// }

// function f3() {
//     f2();
// }


// f3();

// Async => Not occurring at the same time

// Fetch data from server
// Want to execute something with a delay
// Want to execute something after an event

// 1. Browser APIs / Web APIs
// setTimeout, click, mouse over

// 2. Promises

// Example 2

// function printMe() {
//     console.log('Print Me');
// }

// function test(){
//     console.log('test');
// }

// setTimeout(printMe, 2000);
// setTimeout(printMe, 0);
// test();



// Example 3

// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }


// function main() {
//     console.log('main');
//     setTimeout(f1, 0);
//     f2();
// }

// main();


// Example 



// const promise=new Promise(function(resolve, reject) {
//     resolve('I am a promise');
// })
// .then(resolve => console.log(resolve));

// promise.then(result=>console.log(result));


// Example 5

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    setTimeout(f1, 0);

    new Promise(function(resolve, reject) {
        resolve('I am a promise');
    }).then(resolve => console.log(resolve));

    f2();
}

main();
