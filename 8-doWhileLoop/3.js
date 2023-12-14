// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!';
// };

// const name = 'Bahadir';

// console.log(name.giveLydiaPizza())

// const sonuc = ali=()=> {
//     return "Ali"
// }

// console.log(sonuc)

const a = {};
const f = {};
const b = { key: 'b' };
const c = { key: 'c' };

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

 function sayHi() {
    return (() => "ali")(); 
  }
  
  console.log(typeof sayHi()); // string

  function sayHi() {
    return (() => "ali"); 
  }
  
  console.log(typeof sayHi()); //function