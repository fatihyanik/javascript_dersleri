// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!';
// };

// const name = 'Bahadir';

// console.log(name.giveLydiaPizza())

// const sonuc = ali=()=> {
//     return "Ali"
// }

// console.log(sonuc)

// const a = {};
// const f = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a[c]);

// a[b] = 123;
//  console.log("1",a);
//  console.log("2",b);
//  console.log("3",c);


//  a[b] = 666;
//  a[f] = 123;

//  console.log(a["[object Object]"]);
//  console.log(a[b]);
//  console.log(a[c]);

//  function sayHi() {
//     return (() => "ali")(); 
//   }

// console.log(typeof sayHi()); // string

// function sayHi1() {
//   return (() => "ali"); 
// }

// console.log(typeof sayHi1()); //function

// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//     console.log(y);
//   }
//   console.log(x);
//   console.log(y);
// })();

// [[0, 1], [2, 3], [3,4]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );


' ' == ''
console.log(!' ');
!!null; // false
!!''; // false
!!1; // true

// falsy dönenler = false, 0, null, NaN, '', undefined 

// console.log([..."bahadir"]);

// const arr = ['Lydia', "Fatih"]
// const arr1 = ["Saliha", "Bahadir"]

// const arr2 = [...arr, ...arr1];
// console.log(arr2);

// function* generator(i) {
//     yield i;
//     yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// let person = 'Lydia';
// person = null;
// const members = person; 


// console.log(members);


// const person = {
//     name: 'Lydia',
//     age: 21,
// };

// for (const bahadir in person) {
//     console.log(bahadir);
// }

console.log(3 + 2 + "3" + 4 + 3);

// let person = { name: 'Lydia' };
// person = null;
// const members = [person];

// console.log(members);

// const person = [
//  'Lydia', 21,
// ];
  
//   for (const item of person) {
//     console.log(item);
//   }

//   const num = parseInt('a');
//   console.log(num);

  [1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
  });
