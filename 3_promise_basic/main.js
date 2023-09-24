console.log("Introduction of Promises!");

// let promise=new Promise(function(resolve,reject){
//     let value="Water";
//     resolve(value);
// });

// let promiseError=new Promise(function(resolve,reject){
//     reject(new Error("Disaster"));
// });


// Promise States (Internal)
// 1. Pending:When execution starts
// 2. Fulfilled: When Resolves successfully.
// 3. Rejected: When promise rejects.

// fulfilled /rejected =Settled

// Result:->
// undefined : Initial phase when state is pending
// value : When promise resolves successfully.
// error : When promise rejects.

// .then()
// .catch()
// finally()

// ✅Example 1
// let promise=new Promise(function(resolve,reject){
//     let value="Water";
//     resolve(value);
// });

// const grandParentsCooking = () => {
    
//     promise.then(function(result){
//         console.log(`Cooking with ${result}`);
//     })
// }

// grandParentsCooking();


// ✅Example2

// let promise=new Promise(function(resolve,reject){

//     setTimeout(function(){        
//         // Reject it as the disaster happened

//         reject(new Error("Jack fell down and ..."));
//     },2000)


   
// });

// const grandParentsCooking = () => {
    
//     promise.catch(function(error){
//         console.log(`OMG!!! ${error.message}`);
//     })
// }

// grandParentsCooking();


// ✅Example3

// let promise=new Promise(function(resolve,reject){

//     setTimeout(function(){        
//         // Reject it as the disaster happened

//         // reject(new Error("Jack fell down and ..."));
//         resolve("Water");
//     },2000)


   
// });

// const grandParentsCooking = () => {
//     promise
//     .then(function(result){
//         console.log(`Cooking starts with ${result}`);
//     })
//     .catch(function(error){
//         console.log(`OMG!!! ${error.message}`);
//     })
// }

// grandParentsCooking();


