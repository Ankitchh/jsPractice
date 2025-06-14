// 1. create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback)

// let func1 = (arg) => {
//   setTimeout(arg, 3000);
// }

// func1(()=>{
//   console.log("Done")
// })


// 2. Implement your verson of ".map()" as a HOF

// let arr = [1, 2, 3, 4, 5]


// let wap = (arr,fun) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++){
//     newArr.push(fun(arr[i]))
//   }
//   return newArr
// }

// var ar = wap(arr, (val) => {
//   return val + 2
// })

// console.log(ar);


// 3. write a function that uses closures to create a counter.

// function counter() {
//   let count = 0
//   return () => {
//     return ++ count
//   }
// }

// const c = counter()

// console.log(c());
// console.log(c());
// console.log(c());


// 4. Implement a function that limits how many times another function can be called (Closure + HOF)

// function limiter(limit,func) {
//   let called = 0
//   return () => {
//     if (called === 3) {
//       return;
//     } else {
//       func();
//       called++;
//     }
//  }
// }

// run = limiter(3, () => {
//   console.log("Working");
  
// })

// run()
// run()
// run()
// run()
// run()


