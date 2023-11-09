// function declaration
// Not: function decleration tanimlandigi satirdan önce cagirilabilir.
// function declarations are hoisted (moved to the top of their scope), so you can access the function before it is declared
// Function declaration fonksiyon tipinde var degiskeni gibi globalde yer aliyor gibi oluyor. Ve bu fonsiyonu nerede cagirirsaniz calisiyor. Fakat bellek acisindan olumsuz bir durum olusturuyor.
// Not: Sie können die Funktion deklaration vor der Funktionsschreibzeile aufrufen, aber Sie können den Funktion expressinon nicht aufrufen.
console.log(toplama(6,2));
function toplama(x,y){
    //console.log(x,y);
    return x+y;
}
console.log(toplama(4,5));

cikarma(8,4)
function cikarma(x,y){
    console.log(x-y);
    //console.log(x,y);
}
cikarma(5,3)


// function expression
// function expressions are not hoisted
// Not: function expression tanimlandigi satirdan önce kesinlikle cagiramayiz.
// Function Expression avantajlari 
// 1- Programciyi, once fonksiyonlarin tanimlanmasi sonra kullanilmasina zorladigi icin aslinda daha duzenli ve anlasilir kod yazmaya olanak saglar.
// 2- Fonksiyon degerlerinin degiskenlerde saklanmasini saglar. Bu da daha sade bir kodlama demektir

// console.log(carpma(4,6)); // Cannot access 'carpma' before initialization
const carpma = function(a,b){
    return a*b
}
console.log(carpma(3,5));

//bolme(20,4) //Cannot access 'bolme' before initialization
const bolme = function(a,b){
    console.log(a/b);
}
bolme(15,3)

// arrow function

