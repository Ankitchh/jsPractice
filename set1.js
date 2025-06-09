// 1. Log "Hello, JavaScript!" to the console in 3 different ways.

// console.log("Hello, JavaScript!"); 
// console.info("Hello, JavaScript!");
// console.error("Hello, JavaScript!");
// console.table({
//   "name": "Ankit",
//   "course" : "BCA",
// })

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

// let ans = 35 * 2 - 10 / 2 + 7;

// console.log(ans);

// 3. Log the data type of "123", 123, true, and null using typeof.

// console.log(typeof("123"));
// console.log(typeof(123));
// console.log(typeof(true));
// console.log(typeof(null));


// 4. Write a program that swaps the values of two variables.

// let a = 21
// let b = 33

// let c = a
// a = b
// b = c

// console.log(a, b);

// [a, b] = [b, a]

// console.log(a, b);


// 5. Use console.group() to organize logs into a group.

// console.groupCollapsed("Random List")
// console.log("Someting");
// console.error("Error");
// console.groupEnd();


// 6. Declare a const object, modify its properties, and log the updated object.

// obj = {
//   name: "ankit",
//   age: 20,
//   address : "Siliguri",
// }

// obj.age = 22

// console.log(obj);

// 7. Convert "50" (string) into a number using 3 different methods.

// console.log(Number("50"));
// console.log(parseInt("50"));
// console.log(+"50");


// 8. Check if "JavaScript" contains "Script" without using .includes().

// let text = "JavaScript"

// console.log(text.includes("Script"))
// console.log(text.indexOf("Script"))
// console.log(text.search("Script"))

// 9. Create an array of 5 numbers and log the sum using .reduce().

let arr = [1, 2, 3, 4, 5]

sum = arr.reduce((acc,val)=> 
  acc + val,0
);

console.log(sum);

