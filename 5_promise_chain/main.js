console.log("Promise Chain");

// Example1
// const promise= new Promise(function(resolve,reject){
//     resolve("Resolving a fake promise");

// })

// // Handle it using the .then() method

// promise.then(function(value){
//     console.log(value);
// })


// Example2
// const promise= new Promise(function(resolve,reject){
//     reject(new Error("Rejecting a fake promise"));

// })

 // Handle it using the .catch() method

// promise.catch(function(error){
//     console.log(error.message);
// })

// 1.Return another promise
// 2.Return a synchronous value
// 3.Return/Throw an error


// Example3

// let getUser=new Promise(function(resolve,reject){
//     const user={
//         name:"John Doe",
//         email:"jdoe@email.com",
//         password:"jdoe.password"
//     }
//     resolve(user);
// })

// getUser
// .then(function(user){
//     console.log(`Got user ${user.name}`);
    // Fetch the address based on the user email/ returning a promise
    // return new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         resolve('Bangalore');
    //     },1000)

    // })

// Returning a static value not promise
    // return user.email
    
// })
// handling resolved promise
// .then(function(address){
//     console.log(`User address is ${address}`);    
// })

// handling static value email
// .then(function(email){
//     console.log(`User email is ${email}`);
// })


// Example4
// let getUser=new Promise(function(resolve,reject){
//     const user={
//         name:"John Doe",
//         email:"jdoe@email.com",
//         password:"jdoe.password",
//         permission:["db","hr","dev"]
//     }
//     resolve(user);
// })

// getUser
// .then(function(user){
//     if(user.permission.includes("hr")){
//         throw new Error("You are not allowed");
//     }
// })
// .then(function(email){
//     console.log(`User email is ${email}`);
// })
// .catch(function(error){
//     console.log(error);
// })


// Example5

// const number=new Promise(function(resolve,reject){
//     resolve(10);
    
// })

// number
// .then(function(value){
//     value++;
//     return value;
// })

// number
// .then(function(value){
//     value=value+10;
//     return value;
// })

// number
// .then(function(value){
//     value=value+20;
//     console.log(value);
//     return value;
// })



// Example6

// const number=new Promise(function(resolve,reject){
//     resolve(10);
    
// })

// number
// .then(function(value){
//     value++;
//     return value;
// })
// .then(function(value){
//     value=value+10;
//     return value;
// })
// .then(function(value){
//     value=value+20;
//     console.log(value);
//     return value;
// })

// Example7

// const promise=new Promise(function(resolve,reject){
//     reject(new Error("Rejecting a fake promise"));
// })


// promise.then(function(value){
//     console.log(value);
// })
// .catch(function(value){
//     console.log("❌",value);
// })
// .finally(function(){
//     console.log("Cleaned up");
    
// })
