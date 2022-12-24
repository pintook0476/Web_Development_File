// 3. Write a program to find out the sum of all the odd numbers within the given array

let arr = [];
let i = 1;
let sum = 0;
while (i <= 50) {
    if (i % 2 != 0) {
        arr.push(i)
    }
    i++;
}

for (const hk of arr) {
    sum += hk;
}
console.log("The sum of All the odd number => " + sum);

// arr.forEach(element => {
//     sum += element;
// });
// console.log(sum);