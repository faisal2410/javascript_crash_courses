console.log("Async Await");

// async
// await

// We use async to return a Promise
// We use await to wait and handle a promise

// Example1
// Normal function
//  function fetchUserDetails(userId){
//     // Pretend we are making an async call
//     return {
//         name:"Robin",
//         like:['pizza']
//     }

// }

// console.log(fetchUserDetails(1));

// Async Function
// async function fetchUserDetails(userId){
//     // Pretend we are making an async call
//     return {
//         name:"Robin",
//         like:['pizza']
//     }

// }

// async function caller(){
//     const user=await fetchUserDetails(1);
//     console.log(user)
// }
// caller();


// Example2
// function getHi(){
//     return "Hi";
// }

// async function caller1(){
//     const message=await getHi();
//     console.log(message);
// }
// caller1()

// Example3

const validateUser=({userId,password})=>{
    return new Promise((resolve,reject)=>{
        if(userId && password){
            resolve("Authenticated");
        }else{
            reject({message:"userId or password is missing"});
        }
        
    })
}


const app=async()=>{
    const data={
        userId:"test",
        password:"123"
    };

    try {
        const result=  await validateUser(data);
        console.log(result)
        
    } catch (error) {
        console.log(error.message)
        
    }

  

}
app();