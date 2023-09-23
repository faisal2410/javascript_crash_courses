console.log("Promise APIs");
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.resolve()
// Promise.reject()
// Promise.any()

// Example1
// const red=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Red");
//     }, 1000);
// })
// const green=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Green");
//     }, 3000);
// })
// const blue=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Blue");
//     }, 5000);
// })


// const allPromises=Promise.all([red, green, blue])

// allPromises.then(values => {
//     console.log(values)
// })


// Example2

const red=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Red");
    }, 1000);
})
const green=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Green");
    }, 3000);
})
const blue=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Blue");
    }, 5000);
})

//Example of  Promise.all()

// const testAll=async ()=>{
//     const colors=await Promise.all([red, green, blue]);
//     console.log(colors);
//     colors.forEach(color=>{
//         console.log(color);
//     })
// }

// Example of Promise.allSettled()
// const testAll=async ()=>{
//     const colors=await Promise.allSettled([red, green, blue]);
//     console.log(colors);
//     colors.forEach(color=>{
//         console.log(color.value);
//     })
// }


// Example of Promise.any()

// const testAll=async ()=>{
//     const colors=await Promise.any([red, green, blue]);
//     console.log(colors);
    
// }


// Example of Promise.race()

// const testAll=async ()=>{
//     const colors=await Promise.race([red, green, blue]);
//     console.log(colors);
    
// }


 // Promise.resolve()
// const test=async()=>{
//     const colors=await Promise.resolve(red);
//     console.log(colors)
// }
// Promise.reject()
// const test=async()=>{
//     const colors=await Promise.reject(red);
//     console.log(colors)
// }

// test();

// testAll()