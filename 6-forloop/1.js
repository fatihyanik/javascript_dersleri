// // Write a program to print first 15 counting numbers on the console.
// for (let i = 1; i <= 15; i++) {
//     console.log(i);
// }

// // Write a program to print first 15 even counting numbers on the console
// for (let i = 1; i <= 15; i++) {
//     console.log(2 * i);
// }

// // Write a program to print first 15 odd counting numbers on the console
// for (let i = 1; i <= 15; i++) {
//     console.log(2 * i - 1);
// }

// let sum1 = 0;
// for (let i = 1; i <= 10; i++) {
//     sum1 = sum1 + i  // (sum1 += i)
// }
// console.log("cevap", sum1);

// //Write a program to calculate the sum of first 10 counting number.
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
//     console.log(sum);
// }
// console.log(sum);

// //Write a program to calculate the product of the first 10 counting numbers
// let multipy = 1;
// for (let i = 1; i <= 10; i++) {
//     multipy *= i
//     console.log("carpim", multipy);
// }
// console.log("multiply", multipy);
// // Print the counting numbers which are less than 100 and greater than 32 and divisible by 3 on the console. 3,6,9,..,99
// for (let i = 33; i < 100; i = i + 3) {
//     console.log(i);
// }

// Print first 70 counting numbers which are divisible by 4 and 6

// let count = 0;
// for (let i = 1; count <= 4; i++) {
//     if (i % 4 == 0 && i % 6 == 0) {
//         console.log("icinde", i); 
//         console.log("count ilk",count);
//         count++;
//         console.log("count orta",count);
//     }
//     console.log("count son",count, i);
// }


// 3 ve 4 ile bölünebilen ilk 3 sayiyi yazdir //12 24 36
//let count1 =0;
// for(let i=1; count1<=3; i++){
//     if(i%3==0 && i%4==0){
//         console.log(i);
//         count1++
//     }
// }

let count2 = 0;
for (let i = 3; i <= 20 && count2 < 5; i++) {
    if (i % 3 == 0) {
        console.log(i)
        count2++
    }
}

//* 5. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

//* 4. Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        console.log(i+ '*' + j +'='+ i*j);
    }
}

// 1 den 50 ye kadar olan asal sayilari ekrana yazdir. // 1,2,3,5,7,11,13,17,19......47