let i= 1;

while(i>1){
    console.log(console.log("While loop"));
    i++;
}

//do while loop kosulu sonradan kontrol ettigi icin en az bir kez calisir.
do{
    console.log("Do while loop");
}while(i>1)

// Print first 10 counting numbers on the console by using do-while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=10)

//5 e kadar olan olan cift sayilari ekrana yazdir
let k=1;
do{
    if(k%2==0){
        console.log(k);
    }
    k++
}while(k<=5)


let sayi = 1;  // Başlangıç sayısı
let sayac = 0; // Kaç sayı yazdırıldığını sayan değişken

// Do-while döngüsü
do {
    // Eğer sayı 3 ve 4'e bölünebiliyorsa, yazdır
    if (sayi % 3 === 0 && sayi % 4 === 0) {
        console.log(sayi);
        sayac++; // Bir sayı yazdırıldı, sayacı arttır
    }

    sayi++;  // Sayıyı bir arttır
} while (sayac < 3);  // Toplam 3 sayı yazdırılana kadar devam et

// 4 ve 5 ile bölünebilen ilk 2 sayiyi ekrana yazdirin
let sayi1 =1;
let count1= 0;
do{
    if(sayi1%4==0 && sayi1%5==0){
        console.log(sayi1);
        count1++
    }
    sayi1++
}while(count1<2)