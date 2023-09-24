console.log("Learning Modules.....")



// 👉Example 1
// import {sum,sub} from "./calc.js"

// 👉Example 2
// import { sum as add, sub } from "./calc.js";


// 👉Example 3 (namespace)
// import * as calc from "./calc.js";

// 👉Example 4
// import { default as sayMyName } from "./whoami.js";
// import sayMyName from "./whoami.js";

// 👉Example 5
// import { default as myChannelName } from "./whoami.js";

// 👉Example 6
// import myChannelName from "./whoami.js";

// 👉Example 7
// import * as combine from "./combine.js";


// 👉Example 8  Static import
// import {sayHi,sayHola} from "./greeting.js";

// 👉Example 9 (Dynamic import)

// const {sayHi,sayHola}=await import("./greeting.js");


// ✅1
// console.log(sum(2,3))
// console.log(sub(2, 3))

// ✅2
// console.log(add(2,3))


// ✅3

// console.log(calc.sum(2, 3))
// console.log(calc.sub(2, 3))

// ✅4

// console.log(sayMyName())

// ✅5
// console.log(myChannelName())

// ✅6
// console.log(myChannelName())

// ✅7
// console.log(combine.calc.sum(2, 3))
// console.log(combine.calc.sub(2, 3));
// console.log(combine.channelName());


// ✅8

// sayHi();
// sayHola();

// ✅9 Dynamic import

// let myMode = false;
// if (myMode) {
//     const { sayHi, sayHola } = await import("./greeting.js");
//     sayHi();
//     sayHola();
// } else {
//     console.log("No greetings")
// }


// console.log(city)

// console.log(myFunc())


//✅ Example 10 
// const promises=Promise.all(
//     [
//         await import("./greeting.js"), 
//         await import("./calc.js")
//     ]
//     );

//     // console.log(promises);

// promises.then(result=>{
//     // console.log(result);
//     console.log(result[0].sayHi())
//     console.log(result[0].sayHola())
//     console.log(result[1].sum(2,3))
// })