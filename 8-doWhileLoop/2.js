function getAge() {
    'use strict';
    const age = 21;
    console.log(age);
}

getAge();

const sum = eval('105.10');
console.log(sum );

// parseInt, parseFloat + , Number ve eval stringleri number'a cevirir
// eval kullanmaktan kacinmak gerekiyor hataya sebep oluyor

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);