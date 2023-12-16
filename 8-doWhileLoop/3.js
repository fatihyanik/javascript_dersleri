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

console.log([..."bahadir"]);