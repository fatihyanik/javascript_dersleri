//1.Add Up
// function sumIntFrom1ToN(int) {
//     let sum = 0;
//     for (let i = 1; i <= int; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumIntFrom1ToN(4));
// console.log(sumIntFrom1ToN(13));
// console.log(sumIntFrom1ToN(600));

//2. Cubed
// function sumOfCubes(num1, num2, num3) {
//     return (num1 ** 3) + (num2 ** 3 || 0) + (num3 ** 3 || 0)
// }
// console.log(sumOfCubes(1, 5, 9));
// console.log(sumOfCubes(2));
// console.log(sumOfCubes());

// function sumOfCubes1(num1, num2, num3) {
//     return (Math.pow(num1, 3) || 0) + (Math.pow(num2, 3) || 0) + (Math.pow(num3, 3) || 0)
// }
// console.log(sumOfCubes1(1, 5, 9));
// console.log(sumOfCubes1(2));
// console.log(sumOfCubes1());

//3.String Check
// function isStrInWord(str, word) {
//     return word.startsWith(str);
// }
// console.log(isStrInWord("bu", "button"));
// console.log(isStrInWord("tri", "triple"));
// console.log(isStrInWord("beau", "pastry"));

//2.way
// function isStrInWord1(str, word) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (word.charAt(i) === str.charAt(i))
//             count++;
//     }
//     if (str.length === count) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isStrInWord1("bu", "button"));
// console.log(isStrInWord1("tri", "triple"));
// console.log(isStrInWord1("beau", "pastry"));

//3.way
// function isStrInWord3(str, word) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== word[i]){
//             return false;
//         }
//         return true;
//     }
// }
// console.log(isStrInWord3("bu", "button"));
// console.log(isStrInWord3("tri", "triple"));
// console.log(isStrInWord3("beau", "pastry"));


//4.way
// function isStrInWord2(str, word){
//     return word.indexOf(str) === 0
// }
// console.log(isStrInWord2("bu", "button"));
// console.log(isStrInWord2("tri", "triple"));
// console.log(isStrInWord2("beau", "pastry"));


// function neysene(word, str) {
//     return str.slice(0, word.length) === word;
//   }
//   console.log(neysene('bu','button'));
//   console.log(neysene('beau','pastry'));

//4. Less Than or Equal to Zero?
// function isLEQZero(num){
//     return num <=0;
// }

// console.log(isLEQZero(3));
// console.log(isLEQZero(0));
// console.log(isLEQZero(-4));
// console.log(isLEQZero(10));

//5. Count Occurrences.
function countOccurrences(string, letter) {
    let count = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return `${string} cümlesinde ${count} tane ${letter} vardir`
}
console.log(countOccurrences("this is a string", "i"));

//6. X To The Power of X. 
function calcBaseToExponent(base, exp) {
    return Math.abs(base ** exp);
}
console.log(calcBaseToExponent(5, 5));
console.log(calcBaseToExponent(-3, 3));
console.log(calcBaseToExponent(10, 10));

//7. Dog Years.
function dogAge(humanYears){
    return `Köpegin insan yasiyla ${humanYears*7} yasinda`
}
console.log(dogAge(4));

//8. A Lifetime Supply
function calcLifetimeSupply(age, amount){
    let restOf= 80-age;
    return restOf * 365* amount
}

console.log(calcLifetimeSupply(40, 3));
console.log(calcLifetimeSupply(25, 2));