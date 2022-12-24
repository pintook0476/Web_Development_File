// 4. Write a program to find out the smallest and largest numbers from the given array
// #1 method
let arr1 = [2, 3, 5, 8, 5, 2, 95, 3, 2, 5, 7];
let min = Math.min(...arr1);
let max = Math.max(...arr1);
console.log(min);
console.log(max);

// #2 method
// let smallest = arr1.reduce((a, b) => Math.max(b, a))
// console.log(smallest);
