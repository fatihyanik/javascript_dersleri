//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range
// let int1 = Math.floor(Math.random() * 100);
// console.log(int1);
// let int2 = Math.floor(Math.random() * 100);
// console.log(int2);

// if (((int1 >= 50 && int2 >= 50)) || ((int1 <= 99 && int2 <= 99))) {
//     console.log(true);
// } else console.log(false);

let intg1 = Math.floor(Math.random() * 100)
console.log(intg1)
let intg2 = Math.floor(Math.random() * 100)
console.log(intg2)

if ((intg1 >= 50 && intg1 <= 99) || (intg2 >= 50 && intg2 <= 99)) {
    console.log(true)
} else console.log(false)

//2.
let intg3 = Math.floor(Math.random() * 100);
console.log(intg3);
let oneOrMoreWithinTheRange = (intg1 >= 50 && intg1 <= 99)  || (intg2 >= 50 && intg2 <= 99) || (intg3 >= 50 && intg3 <=99);

if(oneOrMoreWithinTheRange) {
    console.log(oneOrMoreWithinTheRange);
}

//3.
let a = Math.floor(Math.random() * 10)
console.log(a)
let b = Math.floor(Math.random() * 10)
console.log(b)
let c = Math.floor(Math.random() * 10)
console.log(c)


if(a>b && a>c){
    console.log(a);
}else if(b>c && b>a){
    console.log(b);
}else if(c>a && c>b){
    console.log(c);
}else{
    console.log("equal");
}

//4.
const str = "Pyahmet";
if(str.startsWith("Py")){
    console.log(str);
}else{
    console.log("Py" + str);
}

// REDUCE


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;

/* 
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
); */


const sumWithInitial = array1.reduce((acc,cur,ind,arr)=>{

  

  return acc *= arr[ind];    


},1);

console.log(sumWithInitial);
// Expected output: 10


// Promise

/* const sifre = "1234";

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)  


    if(sifre=="1235"){
        myResolve()
    }else{

        myReject();   }

  
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) {
        console.log("Sonuc dogru");
       },
      function(error) { 
        console.log("Sonuc hatali");
       }
    ); */


console.log("*******************************");





    try{
        
        
    }catch(error){
        console.log("galatasaray");
    }
   






    


   