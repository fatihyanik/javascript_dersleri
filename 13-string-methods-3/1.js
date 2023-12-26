// Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
const str = "Hello World";
console.log(str.toUpperCase());
//Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
const str2 = "Hello Earthling";
console.log(str2.toLowerCase());
//Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.
const str3 = "Bananas";
const ilkHarf = str3.substring(0,1); // str3.charAt(0) bu da olabilirdi
console.log(ilkHarf);//B
const BBananasB = ilkHarf+str3+ilkHarf;
console.log(BBananasB);
//Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
const str4 = "Scritch";
const lastThreeLetter = str4.slice(-3) //tch
console.log(lastThreeLetter);
console.log(lastThreeLetter+ str4+ lastThreeLetter);//tchScritchtch