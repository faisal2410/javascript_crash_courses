// act like as an expert javascript tutor. please teach me closure with real world code examples
// ChatGPT
// Of course! Closures are a fundamental concept in JavaScript, and they are crucial for understanding how scope and data encapsulation work in the language. A closure occurs when a function "remembers" its lexical scope even when it's executed outside of that scope. This allows you to create private variables and maintain state across function calls.

// Let's explore closures with some real-world code examples:

// ✅Example 1: Counter using Closure

// In this example, we'll create a counter using a closure to maintain its state.


// function createCounter() {
//   let count = 0; // This variable is part of the closure.

//   function increment() {
//     count++;
//     console.log(count);
//   }

//   return increment; // Return the inner function, creating a closure.
// }

// const counter = createCounter();

// counter(); // Output: 1
// counter(); // Output: 2

//💕 Here, createCounter defines a count variable, and increment is an inner function that can access count. When createCounter is called, it returns increment, creating a closure. Each time you call counter(), it increments and displays the count, preserving its state between calls.

// ✅Example 2: Private Data

// You can use closures to encapsulate and protect data, making it private.


// function createPerson(name) {
//   let age = 0; // Private variable

//   function getAge() {
//     return age;
//   }

//   function increaseAge() {
//     age++;
//   }

//   return {
//     getName: () => name,
//     getAge,
//     haveBirthday: () => {
//       increaseAge();
//       console.log(`${name} is now ${getAge()} years old.`);
//     },
//   };
// }

// const person = createPerson("John");

// console.log(person.getName()); // Output: John
// console.log(person.getAge());  // Output: 0
// person.haveBirthday();         // Output: John is now 1 years old.
// In this example, createPerson takes a name argument and returns an object with methods to access and manipulate the age variable. age is private and can only be accessed or modified through the methods provided, demonstrating data encapsulation.

// ✅Example 3: Event Handling

// Closures are commonly used in event handling to maintain data associated with an event listener.


// function createButton() {
//   let clicks = 0;

//   const button = document.createElement("button");
//   button.textContent = "Click me";

//   button.addEventListener("click", () => {
//     clicks++;
//     console.log(`Button clicked ${clicks} times.`);
//   });

//   return button;
// }

// const buttonElement = createButton();
// document.body.appendChild(buttonElement);

// In this example, we create a button with an event listener. The clicks variable is part of the closure, allowing us to keep track of the number of clicks across multiple click events.

// These real-world examples should help you understand how closures work in JavaScript. They enable you to create self-contained and encapsulated functionality within your code.


//  Here are five more real-world examples that illustrate the concept of closures in JavaScript:

// ✅Example 1: Emulating Private Variables in a Library


// function createLibrary() {
//   const books = [];

//   return {
//     addBook: (book) => {
//       books.push(book);
//     },
//     listBooks: () => {
//       console.log(books);
//     },
//   };
// }

// const myLibrary = createLibrary();
// myLibrary.addBook("JavaScript: The Good Parts");
// myLibrary.listBooks(); // Output: ["JavaScript: The Good Parts"]
// In this example, the books array is encapsulated within the closure of the createLibrary function, making it inaccessible from outside. This emulates private variables, ensuring that the books array can only be modified through the methods provided.

// ✅Example 2: Managing Multiple Timers


// function createTimer(delay) {
//   let timerId;

//   function start() {
//     if (!timerId) {
//       timerId = setInterval(() => {
//         console.log(`Timer fired after ${delay} milliseconds`);
//       }, delay);
//     }
//   }

//   function stop() {
//     if (timerId) {
//       clearInterval(timerId);
//       timerId = undefined;
//     }
//   }

//   return {
//     start,
//     stop,
//   };
// }

// const timer1 = createTimer(1000);
// const timer2 = createTimer(2000);

// timer1.start();
// timer2.start();

// setTimeout(() => {
//   timer1.stop();
//   timer2.stop();
// }, 5000);

// Here, the timerId variable is enclosed within the closure of each createTimer instance. This ensures that multiple timers can run independently without interfering with each other.

//✅ Example 3: Authentication Middleware


// function createAuthMiddleware() {
//   let authenticated = false;

//   return {
//     login: () => {
//       authenticated = true;
//     },
//     logout: () => {
//       authenticated = false;
//     },
//     isAuthenticated: () => authenticated,
//   };
// }

// const auth = createAuthMiddleware();

// auth.login();
// console.log(auth.isAuthenticated()); // Output: true

// auth.logout();
// console.log(auth.isAuthenticated()); // Output: false


// In this example, the authenticated variable is encapsulated within the closure of the createAuthMiddleware function, providing a simple authentication mechanism.

//✅ Example 4: Event Handling with Multiple Elements


// function attachClickHandlers() {
//   const elements = document.querySelectorAll(".clickable");

//   elements.forEach((element, index) => {
//     element.addEventListener("click", () => {
//       console.log(`Element ${index + 1} was clicked.`);
//     });
//   });
// }

// attachClickHandlers();

// Here, the index variable is part of the closure for each click event handler, allowing us to identify which element was clicked in a list of clickable elements.

// ✅Example 5: Factory Function for Generating HTML Elements


// function createButton(text) {
//   const button = document.createElement("button");
//   button.textContent = text;

//   button.addEventListener("click", () => {
//     console.log(`Button with text "${text}" was clicked.`);
//   });

//   return button;
// }

// const button1 = createButton("Click me");
// const button2 = createButton("Don't click me");

// document.body.appendChild(button1);
// document.body.appendChild(button2);

// In this example, the text parameter is part of the closure for each button's click event handler, allowing us to log the text of the clicked button.

// These additional examples demonstrate how closures in JavaScript enable encapsulation, data persistence, and the creation of reusable code patterns in various real-world scenarios.

// Here are five more real-world examples to further illustrate the concept of closures in JavaScript:

// ✅Example 1: Creating a Custom Iterator

function createIterator(arr) {
  let index = 0;

  return {
    next: () => {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

const fruits = ["apple", "banana", "cherry"];
const fruitIterator = createIterator(fruits);

console.log(fruitIterator.next()); // Output: { value: "apple", done: false }
console.log(fruitIterator.next()); // Output: { value: "banana", done: false }
console.log(fruitIterator.next()); // Output: { value: "cherry", done: false }
console.log(fruitIterator.next()); // Output: { done: true }


// In this example, the index variable is enclosed within the closure of the createIterator function, allowing you to create custom iterators for different arrays.

//✅ Example 2: Memoization for Recursive Functions


// function memoize(func) {
//   const cache = {};

//   return (n) => {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       const result = func(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// }

// const factorial = memoize(function (n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// });

// console.log(factorial(5)); // Output: 120 (computed once and cached)
// console.log(factorial(6)); // Output: 720 (computed once and cached)


// In this example, the cache variable is part of the closure for the memoized function, allowing you to store and reuse previously computed results efficiently.

//✅ Example 3: Implementing a Singleton Pattern


const Singleton = (function () {
  let instance;

  return {
    getInstance: () => {
      if (!instance) {
        instance = {
          data: "This is a singleton instance.",
        };
      }
      return instance;
    },
  };
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // Output: true (both variables reference the same instance)
// In this example, the instance variable is enclosed within a closure, ensuring that only one instance of the Singleton object is created.

// ✅Example 4: Implementing Private Variables in Classes


// function createPerson(name) {
//   let age = 0;

//   class Person {
//     constructor() {
//       this.name = name;
//     }

//     getAge() {
//       return age;
//     }

//     haveBirthday() {
//       age++;
//       console.log(`${this.name} is now ${age} years old.`);
//     }
//   }

//   return new Person();
// }

// const person = createPerson("Alice");

// console.log(person.name); // Output: Alice
// console.log(person.getAge()); // Output: 0
// person.haveBirthday(); // Output: Alice is now 1 years old.


// In this example, the age variable is part of the closure for the createPerson function, providing private data for instances of the Person class.

// ✅Example 5: Implementing a Custom Event Emitter


// function createEventEmitter() {
//   const listeners = {};

//   return {
//     on: (event, callback) => {
//       if (!listeners[event]) {
//         listeners[event] = [];
//       }
//       listeners[event].push(callback);
//     },
//     emit: (event, data) => {
//       if (listeners[event]) {
//         listeners[event].forEach((callback) => {
//           callback(data);
//         });
//       }
//     },
//   };
// }

// const emitter = createEventEmitter();

// emitter.on("click", (data) => {
//   console.log(`Click event data: ${data}`);
// });

// emitter.emit("click", "Button clicked."); // Output: Click event data: Button clicked.

// In this example, the listeners object is part of the closure for the custom event emitter, allowing you to manage event subscriptions and emissions in an encapsulated way.












