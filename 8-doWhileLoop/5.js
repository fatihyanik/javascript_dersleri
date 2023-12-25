function compareMembers(person1, person2 = person) {
    if (person1 !== person2) {
        console.log('Not the same!');
    } else {
        console.log('They are the same!');
    }
}
const person = { name: 'Lydia' };


compareMembers(person);

const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig[colors[1]]);//true
console.log(colorConfig.colors)//undefined
//console.log(colorConfig.colors[1]);//typeError
console.log(colorConfig["red"]); //true
console.log(colorConfig["blue"]); //false

console.log('❤️' === '❤️'); //true

console.log(['❤️'] == ['❤️']); //false

const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

console.log(info);
info.favoriteFood = '🍝';

console.log(food);
console.log(info);

// parse ve stringfy a bak


let name = 'Lydia';

function getName() {
   // console.log(name);
    let name = 'Sarah';
}

getName();

console.log(`\`` === "`")
console.log(`${1}` === "${1}")



console.log(..."lydia"); //l y d i a
console.log(...["lydia"]);//lydia
console.log([..."lydia"]); //[ 'l', 'y', 'd', 'i', 'a' ]

const numbers=[3,1,23,49,7,9];
console.log(numbers);
console.log(Math.max(numbers));//NaN
console.log(Math.max(...numbers)); //49