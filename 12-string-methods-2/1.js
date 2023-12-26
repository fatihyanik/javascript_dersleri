//Declare a variable: 'It's hard to say who is right in this matter'.
const str="It's hard to say who is right in this matter";
//Find the first occurrence of the letter "a" in a string, starting the search at position 17.
console.log(str.indexOf("a",17));//39
//Check if a string includes "righT".
console.log(str.includes("righT"));//false
//Extract 'who' word from the text.
console.log(str.slice(17,21));
//Extract only the last character.
console.log(str.slice(-1));//r
console.log(str.slice(-2,-1));//e
console.log(str.slice(str.length-1));//r
console.log(str.substring(str.length-1))//r
console.log(str.substring(3,1));//tehlikeli kullanmamak iyidir
console.log(str.substring(-3,2));//kullanmayin
