// 5. write a program to find out the second largest number from the given array

let compare = (a, b) => {
    return (a - b);
}
let arr = [2, 4, 6, 7, 8, 4, 12, 55, 7, 33];
let sorted = arr.sort(compare);
console.log("the sorted array is: --->" + sorted);