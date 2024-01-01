// let countries = 'Germany Spain Italy USA';
// let countriesArray = countries.split(" ");
// console.log(countriesArray);
// console.log(countriesArray[Math.floor(Math.random() * countriesArray.length)]);

// let countries2 = 'Germany Spain Italy USA';
// let randomNumber = Math.floor(Math.random() * 4);
// console.log(randomNumber);
// let randomCountry = randomNumber === 0 ? "Germany" : randomNumber === 1 ? "Spain" : randomNumber === 2 ? "Italy" : "USA";
// console.log(randomCountry);


let names = 'Saliha Büsra MehmetAli Mehmet Fatih Bahadir Erol Ahmet Harun Huseyin Hilal Yanik Serdar Devrim Fidan Ersan Yusuf Erdal';
let nameArray = names.split(' ');
console.log(nameArray);
let randomName = nameArray[Math.floor(Math.random() * nameArray.length)];

console.log(`Hallo ${randomName}`);

let numbers = '-1 7 -33 -8 9 -13 30 -53 -42 -61';
console.log(numbers);
let numbersArray = numbers.split(" ");
console.log(numbers, numbersArray);
let randomNumbers = Math.floor(Math.random() * numbersArray.length);
let randomNumberFromTheNumString = Math.abs(numbersArray[randomNumbers])
console.log(randomNumberFromTheNumString);

//cozüm 2 (by MEHMET KARACA)
let numbers2 = '-1 7 -33 -8 9 -13 30 -53 -42 -61';
console.log(numbers2);
let numbers2Array = numbers2.split(" ");
console.log(numbers2, numbers2Array);
let randomNumbers2 = Math.floor(Math.random() * numbers2Array.length);
let randomNumberFromString = numbers2Array[randomNumbers2] <= 0 ? numbers2Array[randomNumbers2] * (-1) : numbers2Array[randomNumbers2] * 1
console.log(randomNumberFromString);