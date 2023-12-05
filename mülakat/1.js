// 1. What is Javascript?
// yorumlama(interpreted) ve derleme farki?
// yorumlama: sirayla satir satir kodlari calistiriyor. sadece oldugu bölgeyi calistirir
// derleme: bütün kodlari calistir sonra hatalari gösterir

const str1 = "ali"
const str2 = "ali"
console.log(str1 === str2);

const obj1 = { 1: "ali", 2: "veli" };
const obj2 = { 1: "ali", 2: "veli" };
console.log(obj1 == obj2);

const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
console.log(arr1 === arr2);


// 2.
function sayHi() {
    console.log(name);
    // console.log(age);
    var name = 'Lydia';
    let age = 21;
    console.log(name);
}

sayHi();

// 3
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

//for (var i = 0; i < 5; i++) { (function (j) { setTimeout(() => console.log(j), 1); })(i); }


const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log("sonuc",shape.perimeter());

// not: arrow function'da this keyword'u düz bir sekilde kullanilmaz. Böyle olunca NaN döner
// not: normal function'da normal sonuc döner.

let c = { greeting: 'Hey!' };
let d;

d = c; // burada hem deger hem de referans atamasi yapilir
c.greeting = 'Hello';
console.log(d.greeting); // Hello

let a = { greeting: 'Hey!' };
let b;

d = {...c}; // burada yeni bir obje olusur
c.greeting = 'Hello';
console.log(d.greeting); // Hey!