// 11. Write a for loop to print numbers from 10 to 1 in reverse.

// for (let i = 10; i>= 1; i--){
//   console.log(i);
  
// }

// 12. Use a while loop to print multiples of 3 from 3 to 30.

// let n = 3

// while (n < 31) {
//   console.log(n);
//   n +=3
  
// }

// 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.

// let sum = 0
// for (let i = 1; i <= 100; i++){
//   sum += i
// }

// console.log(sum);

// 14. Create a nested loop to print a star pattern


// let star = ""
// for (let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 4; j++){
//     star += "*"
    
//   }
//   console.log(star);
  
// }

// 15. Use a for...of loop to iterate over the string "JavaScript".

// let txt = "JavaScript"

// for (const element of txt) {
//   console.log(element);
  
// }

// 16. Remove duplicate values from an array.

// let arr = [1, 1, 2, 34, 4, 3, 3, 5, 4, 6, 6, 63, 2, 36, 7, 8, 9, 0, 8, 7]

// let nayaArr = [...new Set(arr)]

// console.log(nayaArr);

// 17. Find the second largest number in an array. 


// let arr = [1, 2, 3, 2, 4, 43, 3, 3, 546, 5, 6, 3, 6, 3, 56, 4, 56, 56, 46,56]

// console.log([...new Set(arr)].sort(function (a,b) {
//   return b-a
// })[1])



// 18. Sort an array in descending order.

// let arr = [1, 2, 3, 2, 4, 43, 3, 3, 546, 5, 6, 3, 6, 3, 56, 4, 56, 56, 46, 56];

// console.log(arr.sort((a,b)=> b-a));


// 19. Reverse an array without using .reverse()


// let arr = [1, 2, 3, 2, 4, 43, 3, 3, 546, 5, 6, 3, 6, 3, 56, 4, 56, 56, 46, 56];

// let reversedArr = []
// for (let i = arr.length - 1; i >= 0; i--){
//   reversedArr.push(arr[i])
// }

// console.log(reversedArr);



// 20. Find the most frequent element in an array.

// let arr = [1, 2,2,2, 3,  4, 43, 3, 3, 546, 5, 6, 3, 6, 3, 56, 4, 56, 56, 46, 56];

// let freq = {}


// for (let i = 0; i <= arr.length - 1; i++){
//   freq[arr[i]] === undefined ? freq[arr[i]] = 1 : freq[arr[i]] ++
// }

// console.log(freq);
