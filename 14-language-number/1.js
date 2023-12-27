let introSentence = "hello, my name is Fran and I am";
let age = 25;

console.log(introSentence + " " + age); //hello, my name is Fran and I am 25
console.log(introSentence.concat(age)); //hello, my name is Fran and I am25

let number1str = "1005";
console.log(+number1str);
let number2str = "10.05"
console.log(parseFloat(number2str));
console.log(+number2str);
console.log(Number(number2str));


let num1 = 30;
let num2 = 939;
let num3 = 40.9;

console.log(num1 % 2 === 0 ? "even" : "odd");
console.log(num2 % 2 === 0 ? "even" : "odd");
console.log(num3 % 2 === 0 ? "even" : "odd");
console.log(Number.isInteger(num3) ? (num3 % 2 === 0 ? " is even" : num3 + " is odd") : num3 + " is not an integer");