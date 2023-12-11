let a = 40;
let b = 20;
while (a >= b) {
    a -= 5;
    b += 10
    console.log(a, b);
}

//5! 5*4*3*2*1
// for loop ile
let multiply = 1;
for (let i = 1; i <= 5; i++) {
    multiply = multiply * i
}
//console.log(multiply);

let multiply2 = 1;
let i = 1;
while (i <= 5) {
    multiply2 = multiply2 * i;
    i++
}
console.log(multiply2);

// For example; 6 ==> 1, 2, 3, 6 ==> Print on the console 4
// 12 ==> 1, 2, 3, 4, 6, 12 ==> Print on the console 6
// 5 ==> 1, 5 ==> Print on the console 2

//It should then find sum of the digits of that number. 1175 = 1+1+7+5= 14 

let number = 0;
let count = 0;
if (number > 0) {
    if (number == 1) {
        console.log(number + " is prime number");
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                count++;
            }
        }
        if (count == 0) {
            console.log(number + " is prime");
        } else {
            console.log(number + " is not prime");
        }
    }
}
