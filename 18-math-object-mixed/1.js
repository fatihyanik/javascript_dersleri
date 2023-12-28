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
let randomName = nameArray[Math.floor(Math.random() * nameArray.length)];

console.log(`Hallo ${randomName}`);

