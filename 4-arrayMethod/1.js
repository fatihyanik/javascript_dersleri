// values() methodu: Bu method, dizideki her dizin icin degerleri saglayan bir yineleyici(iterator) döndürür.
const arr = ['elma', 'armut', 'muz'];
const yineleyici = arr.values();
console.log(yineleyici); //Object [Array Iterator] {}

for (const value of yineleyici) {
    console.log(value);
} //elma armut muz

for (const value of arr) {
    console.log(value);
} //elma armut muz

//not: yineleyeci ve arr arasinda ne fark var bilmiyorum. arastirmak lazim

// length() methodu: arrayin uzunlugunu ögrenmemizi saglayqan property'dir.
const arr1 = ['elma', 'armut', 'muz', "portakal", "karpuz"];
console.log(arr1.length); // 5

// reverse() methodu: array icindeki elamanlarini tersinden yazdirir.
const arr2 = ['elma', 'armut', 'muz', "portakal", "karpuz"];
console.log(arr2.reverse()); // [ 'karpuz', 'portakal', 'muz', 'armut', 'elma' ]

// sort() methodu: siralama yapmamiziyapan methodtur.
const arr3 = ['elma', 'armut', 'muz', "portakal", "karpuz", "erik"];
console.log(arr3.sort()); // [ 'armut', 'elma', 'erik', 'karpuz', 'muz', 'portakal' ]

const arr4 = ['elma', 2, 10, "2", "1", "3"];
console.log(arr4.sort((a, b) => b - a)); // sayisal siralama da sort methodu icine parametreler verilir ve o rametreler birbirinden cikarilarak büyükten kücüge ve ya tam tersi siralama elde edilir.

// at(): bir arraydeki spesific indexli elemani getirmek icin kullaniriz
const arr5 = ['elma', 'armut', 'muz', "portakal", "karpuz"];
console.log(arr5.at(2)); //muz

// fill() : bu methodta degistirilmesini istedigimiz array elamaninin ismini yazip sonrasinda baslangic ve bitis indexlerini yazarak baslangic ve bitis indexlerinin arasina istedigimiz kadar degistirilmesini istedigimiz elemani yazdirabiliriz
const arr6 = ['elma', 'armut', 'muz', "portakal", "karpuz"];
console.log(arr6.fill("cilek", 3, 5)); // [ 'elma', 'armut', 'muz', 'cilek', 'cilek' ]

// splice() : 
const arr7 = ['elma', 'armut', 'muz', "portakal", "karpuz"];
console.log(arr7.splice(2, 3, "mango", "kiwi")); // [ 'muz', 'portakal', 'karpuz' ] 
// yukaridaki örnekte 2. indexten sonraki 3 elamani sildi ve ekrana silinen elamanlarla birlikte array yazdirdi.
console.log(arr7); // [ 'elma', 'armut', 'mango', 'kiwi' ]

