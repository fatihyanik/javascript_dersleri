//1.
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
console.log(a);
console.log(b);

a > b ? console.log(a) : console.log(b); 

// 1.ikinci cözüm
function karsilastirma(a,b){
    return a > b ? console.log(a) : console.log(b); 
}

karsilastirma(2,5)
karsilastirma(0,100)
karsilastirma(52,35)

// 2.
function karsilastirma1(a,b){
    console.log(a == b)   ; 
}

karsilastirma1(5,5)
karsilastirma1(40,40)
karsilastirma1(50,51)

//3 // 2.
function karsilastirma2(a,b){
    console.log(a>b);; 
}

karsilastirma2(110,100)
karsilastirma2(150,100)
karsilastirma2(50,100)