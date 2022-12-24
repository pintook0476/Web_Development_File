//1. prime Number 200->20
// var count=0
// var i,j;
// for(j=200;j>=20;j--){
//     for(i=1;i<=j;i++){
//         var rem =j%i
//         if (rem==0)
//             count++
//     }
//     if (count==2)
//         console.log(j);
//         count=0
// }


//<=================================>//
//2. prime Number 1->100 summation
// var count = 0;
// var total = 0;
// var i, j;
// for (j = 1; j <= 100; j++) {
//     for (i = 1; i <= j; i++) {
//         var rem = j % i;
//         if (rem == 0) count++;
//     }
//     if (count == 2) {
//         total = total + j
//         console.log(j);
//     }
//     count = 0;
// }
// console.log(total);



//<=================================>//
//3. input number summation like 235 => 2+3+5 = 10
// var count = 0;
// var input = parseInt(prompt("Enter A Number To find The Summation"));
// while (input > 0) {
//   var rem = input % 10;
//   input = input / 10;
//   input = parseInt(input);
//   count = count + rem;
// }
// alert(count);

//<=================================>//
//4. input a number and revers it
// var input = parseInt(prompt("Enter a Number to reverse it"));
//     var rev = 0;
//     while (input >= 1) {
//         var rem = input % 10;
//         var rev = rev * 10 + rem;
//         input = input / 10;
//         input=parseInt(input)
//     }
//     console.log(rev);

//<=================================>//
//5. input number's total digit find
// var input = parseInt(prompt("Enter a Number to find total Number it"));
// var count = 0
// while (input >= 1) {
//     var rem = input % 10;
//     count++
//     input = input / 10;
//     input = parseInt(input)
// }
// console.log(count);
//<=================================>//
//6. input number int or decimal
// var input = prompt("Enter a Number to find integer or decimal it");
// var bottle = input
// input = parseInt(input)
// if (bottle - input == 0) {
//     console.log("Its a Integer");
// } else {
//     console.log("Its a Decimal Value");
// }
//<=================================>//
//7. input a number and find Pallindrome or not
// var input = parseInt(prompt("Enter a Number to find Pallindrome or not"));
// var bottle = input
// var rev = 0;
// while (input >= 1) {
//     var rem = input % 10;
//     var rev = rev * 10 + rem;
//     input = input / 10;
//     input = parseInt(input)
// }
// if (bottle == rev) {
//     console.log("Its a Pallindrome Number")
// } else {
//     console.log("Its not a Pallindrome Number")
// }
//<=================================>//
//8. check Armstong or not
// var input = parseInt(prompt("Enter a Number to find Armstrong or not"));
// var glass
// var bottle = glass = input;
// var arm = 0;
// var count = 0;
// while (input >= 1) {
//     var rem = input % 10;
//     count++;
//     input = input / 10;
//     input = parseInt(input);
// }
// console.log(count);
// while (bottle > 0) {
//     var remn = bottle % 10
//     arm = arm + (remn ** count);
//     bottle = bottle / 10
//     bottle = parseInt(bottle)

// }
// console.log("Armstong no. is " + arm);
// if (glass == arm) {
//     console.log("Its a armstrong no.")
// } else {
//     console.log("Its not a armstong no.");
// }
//<=================================>//
//9. pallindrome bettween 1 to 100
// for(var input=1;input<=1000;input++){
//     var rem,rev=0
//     var bottle=input;
//     while (bottle>0) {
//       rem=bottle%10
//       rev=rev*10+rem
//       bottle=bottle/10
//       bottle=parseInt(bottle)
//     }
//     if(input==rev)
//     console.log(input + " ");
//   }
//<=================================>//
//10. armstrong number between 1-1000
// for (let i = 1; i <= 1000; i++) {
//     let len = i.toString().length;
//     let sum = 0;
//     let temp = i;
//     while (temp > 0) {
//       let rem = temp % 10;
//       sum = sum + rem ** len;
//       temp = temp / 10;
//       temp = parseInt(temp);
//     }
//     if (sum == i) {
//       console.log(i);
//     }
//   }
//<=================================>//
//11. input number total 0 count
// var input = parseInt(prompt("Enter a Number to find total Number it"));
// var temp = input;
// var count = 0;
// while (input >= 1) {
//     var rem = input % 10;
//     if (rem == 0) {
//         count++;
//     }
//     input = input / 10;
//     input = parseInt(input);
// }
// console.log("In the Number " + temp + " total Zero is " + count);
//<=================================>//
//12. input the number and index value and find the power value with the result is odd or even

//<=================================>//