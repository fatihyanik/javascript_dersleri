//Write a function that accepts two numbers and validate that they are numbers. (3,5) 3 9 27 81 243
function printExponentialValues(start, count) {
    if (typeof start !== "number" || typeof count !== "number") {
        console.log("sadece sayi degeri kabul ediyorum");
    } else {
        for (let i = 1; i <= count; i++) {
            console.log(start ** i);
        }
    }
}

printExponentialValues("3", 5)
printExponentialValues(3, "5")
printExponentialValues(3, 5)
printExponentialValues(2, 8)

//Arraye cevrilmis hali
function mal(start, count) {
    const result = [];
    for (let i = 1; i <= count; i++) {
        result.push(start ** i);
    }
    return result;
}


const resultArray = mal(3, 5);
const str = resultArray.join(" ") //join methodu stringe cevirir
console.log(str);//3 9 27 81 243
console.log(+str);//NaN
console.log(resultArray);

//2
let myFav = "mango";
function printFavFruit(){
    myFav="papaya";
    console.log(`My favorite fruit is ${myFav}`);
}
printFavFruit() //My favorite fruit is papaya

var myFavoriteFruit = "banana";
function printFavoriteFruit() {
     myFavoriteFruit = "apple";
    console.log(`My favorite fruit is ${myFavoriteFruit}`);
}
printFavoriteFruit() //My favorite fruit is apple
console.log(myFavoriteFruit); //apple

//3
function exponent(num1, num2){
    let result = [];
    for (let i = 1; i<=num2; i++){
        result = num1 ** i
    }
    return result;
}
console.log(exponent(3,5)); //243


function exponent1(num1,num2){
    return num1**num2
}
console.log(exponent1(3,5));

function exponent2(num1,num2){
    let result = [];
    for (let i = 1; i<=num2; i++){
        result.push(num1**i)
    }
    return result;
}
//console.log(result); //function scope oldugu icin sonuca ulasamayiz bize hata verir
console.log(exponent2(3,5));