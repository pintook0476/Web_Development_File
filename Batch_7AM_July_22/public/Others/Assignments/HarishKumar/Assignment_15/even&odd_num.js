// 1. Write a program to take a static array with values and return all the even numbers with in it
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let even = [], odd, temp;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        temp = arr[i];
        even.push(temp)
    }
    // if (arr[i] % 2 != 0) {
    //     odd = arr[i];
    // }
    // console.log(`the Odd number are -> ${odd}`);
}
console.log(`the even number are -> ${even}`);
