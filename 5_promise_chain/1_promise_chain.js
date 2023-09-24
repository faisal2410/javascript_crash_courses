// Chaining Promises - Basic Usage

//✅Example1 Handling resolve with the .then() handler
// Create a Promise
// let promise = new Promise(function(resolve, reject) {
//     resolve('Resolving a fake Promise.');
// });

// // Handle it using the .then() handler
// promise.then(function(value) {
//     console.log(value);
// });



// ✅Example2

// Create a Promise
// let promise = new Promise(function (resolve, reject) {
//     resolve("Resolving a fake Promise.");
//   });
  
//   // Create a Promise Chain
//   promise
//     .then(function (value) {
//       console.log(value);
//       return value;
//     })
//     .then(function (value) {
//       console.log(`${value} Second time.`);
//     });