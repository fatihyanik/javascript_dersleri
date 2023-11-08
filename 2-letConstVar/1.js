//degisken olusturma(declaration)
//degisken tanimlama(initialization)
console.log(sayi);
var sayi = 3; // (variable declaration)
console.log(sayi); //undefined

// Not: var ve let degiskenini yanina deger vermeden tanimlayabiliyoruz fakat const'u tanimlayamiyoruz

isim = "Murat Fatih"; //(variable initialization)
console.log(isim);

// scope: scope uygulamalarimizda degiskenlerin ve fonksiyonlarin nerelerde erisilebilir, nerelerde erisilemez olduklarini belirler
// global scope: degiskenlerin fonksiyon icerisinden de ulasilabilir olma durumudur
var selam = "Merhaba Mehmet";

function selamlama() {
    console.log(selam);
}
selamlama()

// function scope: eger "var" ile tanimlanan bir degisken, bir fonksiyon icerisinde olusturulmus ise, sadece o ve "nested" dedigimiz fonksiyon icerisinde bulunan diger fonksiyonlar icerisinde cagrilip kullanilabilir.

function getAlbumDate() {
    var albumDate = new Date();
    console.log(albumDate);
    return albumDate;
}

getAlbumDate(); //2023-11-08T07:48:49.159Z
// console.log(albumDate); // fonksiyonun icinde tanimlandigi icin burada ulasamayiz ve hata aliriz. 
// ReferenceError: albumDate is not defined

function tarih() {
    var albumDate = new Date();

    function tarihDegistir() {
        return albumDate.toDateString()
    }

    console.log(albumDate);
    return tarihDegistir()
}
console.log(tarih()); //Wed Nov 08 2023

// var, let ve const icin önemli notlar
// 1) let and const basically replace var. 
// 1) let ve const temel olarak var'ın yerini aldi.
// 2) let and const are block-scoped. They are not available within the whole execution context like var.
// 2) let ve const block kapsamlıdır. Var gibi tüm yürütme bağlamı içinde kullanılamazlar.
// 3) let and const can not be redeclared. var can be redeclared.
// 4) let ve const yeniden declare edilemez. var yeniden bildirilebilir.
// 5) You use const instead of var if you plan on never re-assigning this "variable" (effectively turning it into a constant).
// Bu "değişkeni" hiçbir zaman yeniden atamamayı (etkili bir şekilde sabite dönüştürmeyi) planlıyorsanız var yerine const kullanırsınız.
// 6) You use let instead of var otherwise.
// 6) Aksi takdirde var yerine let kullanırsınız.

// 1) var / let / const Variable Scope

//  var is available outside a block it is declared within (var, içinde bildirildiği bloğun dışında kullanılabilir)
// let & const are only accessible within the block they were declared in (let & const'a yalnızca tanımlandıkları blok içinden erişilebilir)

{
    var classicVar = "Hey!"
}
console.log(classicVar); // Hey!


{
    const newConst = "Hey!"
}
// console.log(newConst); // Throws error: "newConst is undefined"

{
    const newLet = "Hey!"
}
// console.log(newLet); // Throws error: "newConst is undefined"


// 2) var / let / const Redeclaring

// var allows redeclaration of variables (var değişkenlerin yeniden bildirilmesine izin verir)
// let & const do not allow redeclaration of variables (let & const değişkenlerin yeniden bildirilmesine izin vermez)

var newVar = "Hey!"
var newVar = "Heyhey!" // works

//let newLet = "Hey!"
//let newLet = "Heyhey!" // does not work

// const newConst = "Hey!"
// const newConst = "Heyhey!" // does not work

// 3) var / let / const Reassignment
// var & let allow reassignment (var & let yeniden atamaya izin verir)
// const does not allow reassignment (const yeniden atamaya izin VERMIYOR)

var newVar = "Hey!"
newVar = "Heyhey!" // works

//let newLet = "Hey!"
//let newLet = "Heyhey!" // works

// const newConst = "Hey!"
// newConst = "Heyhey!" // does not work

/* 4)
const prevents the reassignment of a variable (const bir değişkenin yeniden atanmasını önler)

✅  This works when const-variables hold primitive values, because they are immutable (Bu, sabit değişkenler primitive değerlere sahip olduğunda işe yarar çünkü bunlar değişmezdir)
string, number, bigint, boolean, undefined, & symbol

❌  This does not always work when const-variables hold objects, arrays or functions (they are all objects - also arrays and functions!)
Objects are stored in variables as references. When changes are made to the object, its reference remains unchanged. const will not block this.
When an object is replaced with a completely new object, the reference is changed. const will block this. (Nesneler referans olarak değişkenlerde saklanır. Nesnede değişiklik yapıldığında referansı değişmeden kalır. const bunu engellemez.
Bir nesne tamamen yeni bir nesneyle değiştirildiğinde referans da değişir. const bunu engelleyecektir.)
*/


// 5) const with Objects

// Changing a primitive value is blocked by const
// const newConst = "Hey!"
// newConst = "Heyhey!" // does not work

// Changing an object is not blocked by const
// const newConst = { firstName:"John", lastName: "Doe"};
// newConst.firstName = "Max"; // works

// Replacing an object is blocked by const (because it is a reassignment)
// const newConst = { firstName:"John", lastName: "Doe"};
// newConst= { firstName:"John", lastName: "Doe"}; // does not work

