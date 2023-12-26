//Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
const str = "I can walk in the park all day!";
console.log(str.slice(18, 22));

//Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.
const str2 = "JavaScript"
console.log(str2.substring(3, 6));

//Check if the sentence "nice shoes" contains the letter l or n.
const str3 = "nice shoes";
console.log(str3.includes("l") || str3.includes("n"));//true
console.log(str3.search(/ln/i) === -1 ? "true" : "false");//true

//Create 3 different variables about yourself, using strings as values, i.e, let firstName = "Maria"; let city = "Berlin", etc. Print a sentence to the console using the variables and string interpolation, i.e., "My name is Maria. I live in Berlin and I am a teacher".