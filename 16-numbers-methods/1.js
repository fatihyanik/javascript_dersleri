console.log(isNaN("hello" * 1));//true
console.log(isNaN("100em"));//true
console.log(isNaN("100rem"));//true
console.log(Number.isNaN("100em"));//false
console.log(typeof NaN);//number

//2.rounding
console.log(0.1 * 0.2);//0.020000000000000004
console.log((0.1 * 0.2).toFixed(2));//0.02
console.log(typeof ((0.1 * 0.2).toFixed(2)));//string
console.log(+(0.1 * 0.2).toFixed(2));
console.log(Number((0.1 * 0.2).toFixed(2)));

//3.Fix number
let number1 = 12.26000000000033;
let number2 = 0.63783990;
let number3 = 1.842220;

console.log(number1.toFixed(2));
console.log(Number(number2.toFixed(1)));
console.log(+(number3.toFixed(4)));

//Not: toFixed() methodu bize string deger döndürür. dikkatli olmak lazim ve bu degeri tekrar integer yapmak icin +, Number veya parseInt ... kullanilir