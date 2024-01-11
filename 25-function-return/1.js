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

const add = x => y => z => {
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(x, y, z);
    return x + y + z;
  };
  
 console.log( add(4)(5)(6));

 const myFunc = ({ x:a, y, z }) => {
    console.log({a, y, z});
  };
  
  myFunc({x:1, y:2, z:3});

const spookyItems = ['👻', '🎃', '🕸'];
({ a: spookyItems[5] } = { a: '💀' });
console.log(spookyItems);


const name = 'Lydia Hallie';
const age = 21;

//console.log(isNaN(name)); //truep0o0
//console.log(Number.isNaN(name));//false
console.log(isNaN(age));//false
console.log(Number.isNaN(age));//false

//var randomValue = 21;
console.log(typeof randomValue);
function getInfo() {
    //console.log(typeof randomValue);
    var randomValue = 'Lydia Hallie';
}

getInfo();

const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(Infinity));

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
    this.count++;
    }
  }
  
  const counterOne = new Counter();
  console.log(counterOne);//Counter { count: 0 }
  console.log(counterOne.increment());
  console.log(counterOne.count); //1
  console.log(counterOne.increment());
  console.log(counterOne.count); //2
  
  const counterTwo = counterOne; //2
  console.log(counterTwo); //Counter { count: 2 }
  counterTwo.increment(); 
  console.log(counterOne.count); // 3
