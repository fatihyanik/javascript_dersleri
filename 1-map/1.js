const numbers = [1, 2, , 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.length);

// JS'de "map" fonksiyonu, bir dizi(array) veya liste uzerinde döngü yapmamiza ve her ögeyi
// isleyip yeni bir dizi(array) olusturmamiza yardimci olan cok kullanisli bir fonksiyondur.
// kisacasi map methodu mutate degildir.

// not: bu fonksiyon, mevcut diziyi(arrayi) degistirmez.sadece yeni bir diziyi döndürür.
// not: döndürülen dizi, orjinal dizinin uzunlugu ile ayni olmak zorundadir. Eger isleme tabi olmayan eleman varsa, "undefined" degeri ile doldurulur.
// not: react'ta map kullanilmasinin tavsiye edilmesinin sebebi yukarida verilen notlardir.

// Yeni bir dizi oluşturur: filter() fonksiyonu, orijinal diziyi değiştirmez ve yeni bir dizi döndürür. Bu nedenle orijinal dizi bozulmaz.
// Geriye dönen dizi, orijinal diziden daha küçük veya aynı boyutta olabilir: Çünkü filter() işlemi sonucunda, belirlediğiniz koşulu sağlayan elemanlar seçilir ve yeni bir dizi oluşturulur. Bu nedenle, yeni dizi orijinal diziden daha küçük olabilir.

const sayilar = [12, 13, , 15, 18, 22, 23, 25, 27];
const ucIleBolunen = sayilar.filter((e) => e % 3 === 0);
console.log(ucIleBolunen); // [ 12, 15, 18, 27 ]
console.log(sayilar); //[ 12, 13, <1 empty item>, 15, 18, 22, 23, 25, 27 ]

const ucCikar = sayilar.map((e) => e * 3);
console.log(ucCikar); //[ 9, 10, <1 empty item>, 12, 15, 19, 20, 22, 24 ]


const dizi = [3, 5, 7, '', , 'mehmet', true, false];
const sonuc = dizi.map((eleman, index, dizi) => {
    console.log(eleman, index, dizi);
    return eleman * 2
})

console.log(sonuc);
console.log("numbers", numbers);

const arr6 = [3, 5, 7];
arr6.forEach((num) => {
    console.log(num);
})

const arr7 = [3, 5, 7];
let total = 1;
arr6.forEach((num) => {
    total = total * num
    console.log(total); // 3 15 105
})
console.log(total) // 105
console.log(arr7);
// Foreach methodu bize bir dizi(array)  dönmez. verilen arrayin her bir elemanini ayri ayri döndürür ve bunlarla ilgili islem yapmamizi saglar.

const array = [1, 2, 3, 4];
array.forEach((ele, index) => array[index] = ele * 2);


console.log(array);