// 1. Create a function that takes a callback and executes it after every `n` seconds indefinitely

// let delayer = (delay,func) => {
//   setInterval(func, delay*1000);

// }


// delayer(3, () => {
//   console.log("Runns after every 3 sec")
// })


// 2. Implement a function that returns a function with a preset greeting (Closure)

// const greetUser = (greet) => {
//   return (user) => {
//     console.log(`${greet}, ${user}`);
    
//   }
// }

// let greeting = greetUser("Helu")

// greeting("Ankit")
// greeting("Amit")


// 3. Implement a function that takes a callback and only executes it once (HOF + Closure).

// const oneTimeRunner = (fn) => {
//   let runned = false
//   return () => {
//     if (!runned) {
//       fn()
//       runned = true;
//     } else {
//       console.log("Already executed");
//     }
//   }
// }

// const run = oneTimeRunner(() => {
//   console.log("Function Runned");
// })

// run()
// run()
// run()



// .4 Implement a function that throttles another function (HOF + Closures).

// const throttler = (delay ,fn) => {
//   let lastcall = 0
//   return () => {
//     let now = Date.now()
//     if (now - lastcall >= delay * 1000) {
//       lastcall = now 
//       fn()
//     }
//   }
// }

// const run = throttler(3, () => {
//   console.log("running...");
  
// })

// run()
// run()
// run()

