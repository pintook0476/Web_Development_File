// 2. Write a program to find out the sum of all the values within the given array 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = 0;
// arr.forEach(element => {
//     sum += element;
// });
// console.log(sum);

let mainArr = [];
let sum = 0;
let i = 1;
while (i <= 50) {
    mainArr.push(i);
    i++;
}
for (let i = 0; i <= mainArr.length; i++) {
    sum += i;
}
console.log(sum);