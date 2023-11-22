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

// slice():
const arr8 = ['elma', 'armut', 'muz', "portakal", "karpuz"];
const sonuc = arr8.slice(1, 4);
console.log(sonuc); // [ 'armut', 'muz', 'portakal' ]
console.log(arr8); // [ 'elma', 'armut', 'muz', 'portakal', 'karpuz' ]

// from(): 
const obj = { 0: "elma", 1: "armut", 2: "muz", 3: "kiraz", length: 3 }
const str = "Ahmet"
console.log(Array.from(str));
const arr9 = Array.from(obj)
console.log(arr9);

const entries = [['a', 1], ['b', 2], ['c', 3]];
const obj2 = Object.fromEntries(entries);
console.log(obj2);

const mySet = new Set([1,1,2,3, 2, 3, 4, 5]);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }

const setArray = Array.from(mySet);
console.log(setArray); // [ 1, 2, 3, 4, 5 ]

const myMap = new Map([[1, 'bir'], [2, 'iki'], [4, 'üç'], [3, 'dort'], [3, 'üç'], ["dort", 5]]);
console.log(myMap); // Map(5) { 1 => 'bir', 2 => 'iki', 4 => 'üç', 3 => 'üç', 'dort' => 5 }

// Bir dizeden dizi oluşturma
const str2 = "Merhaba";
const strArray = Array.from(str2);
console.log(strArray); // ["M", "e", "r", "h", "a", "b", "a"]

// Bir Set'ten dizi oluşturma
const mySet1 = new Set([1, 2, 3, 4, 5]);
const setArray2 = Array.from(mySet1);
console.log(setArray2); // [1, 2, 3, 4, 5]

// Bir Map'ten sadece değerlerle dizi oluşturma
const myMap3 = new Map([[1, 'bir'], [2, 'iki'], [3, 'üç'], ["dort", 4]]);
const mapValuesArray = Array.from(myMap3.values());
console.log(mapValuesArray); // [ 'bir', 'iki', 'üç', 4 ]
