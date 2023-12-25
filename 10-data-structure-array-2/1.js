//Declare a variable named "euroCities" and assign an array to the variable
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
//// 2. Change the first item in the array to "Berlin".
euroCities.splice(0,1,"Berlin") // 0=>index 1=>Kac eleman silinecekse "Berlin" => eklenmek istenen
console.log(euroCities); //[ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]
//Print the length of the array "euroCities".
console.log(euroCities.length);//5
//Delete the last item of the array "euroCities"
euroCities.pop()
console.log(euroCities);//[ 'Berlin', 'London', 'Valletta', 'Prague' ]

//Add "Budapest" to the euroCities array.
euroCities.push("Budapest")
console.log(euroCities);//[ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

//Delete the second and third items from the euroCities array
euroCities.splice(1,2);
console.log(euroCities);//[ 'Berlin', 'Prague', 'Budapest' ]

//Clone the array asianCities.
const asianCities2 = [...euroCities]
console.log(asianCities2); // [ 'Berlin', 'Prague', 'Budapest' ]

//Use an array method to select items 2-4 from the array of asianCities and store this in another variable
const asianCities = ["Tokyo", "Ulaanbaatar", "Beijing", "Seoul", "Hanoi", "Manila"];

const threeAsianCities = asianCities.slice(1,4);
console.log(threeAsianCities); //[ 'Ulaanbaatar', 'Beijing', 'Seoul']

//Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

//1.method
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);

//2.method
const worldCities1 = [...euroCities, ...asianCities]
console.log(worldCities1);['Berlin','Prague','Budapest',  'Tokyo','Ulaanbaatar', 'Beijing','Seoul', 'Hanoi','Manila']

//Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);

//Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2,1, "Toronto");
console.log(worldCities);

worldCities.splice(1,0,"Washington")
console.log(worldCities);

console.log(worldCities.join(', '));
console.log(worldCities);
const worldCitiesString = worldCities.join(', ')
console.log(worldCitiesString); //Manila, Washington, Hanoi, Toronto, Beijing, Ulaanbaatar, Tokyo, Budapest, Prague, Berlin



