# Javascript Mülakat Sorulari

## 1. What is Javascript?

```jsx
JavaScript is a 'high-level', 'interpreted programming language' used to enhance web pages. It adds interactivity to the site and is an essential part of web development.
```

```
JavaScript, web sayfalarını geliştirmek için kullanılan üst düzey, yorumlanmış bir programlama dilidir. Siteye etkileşim katar ve web geliştirmenin önemli bir parçasıdır.
```

### (Interpreted Language):

```jsx
JavaScript, bir yorumlayıcı '(interpreter)' kullanarak çalışan bir programlama dilidir. Yorumlayıcı (interpreted), kaynak kodu 'satır satır okuyarak anında' çalıştırır. Yani, bir JavaScript programını çalıştırmak için önceden 'derleme (compile)' işlemine gerek yoktur. Bu, programın çalışma anında yorumlanması ve yürütülmesi anlamına gelir.
```

### Compiled Dillerden Farkı:

```jsx
 Karşılaştırma yapmak gerekirse, derlenen diller (compiled languages) önceden bir derleme sürecinden geçirilir ve bu süreçte kaynak kod, 'makine diline' dönüştürülür. Derleme sonucunda elde edilen dosyalar daha sonra çalıştırılır. Öte yandan, JavaScript gibi yorumlanan diller, derleme adımını atlar ve kaynak kodunu doğrudan çalıştırır. JavaScriptin bu yorumlanan özelliği, tarayıcıda (web tarayıcıları için) veya başka bir ortamda çalıştırılabilmesini sağlar. Tarayıcılar, JavaScript kodunu aldıklarında, hemen yorumlayarak kullanıcının cihazında çalıştırabilirler. Bu, web geliştirmesi gibi hızlı iterasyonlara ve tarayıcı tarafından anında yürütülebilir değişikliklere olanak tanır.
```

## 2. Explain the Difference Between == and === ?

```
The == operator compares values for equality, converting them to a common type. The === operator compares both value and type, without performing any type conversion.
```

```jsx
== operatörü eşitlik değerlerini karşılaştırarak bunları ortak bir türe dönüştürür. === operatörü, herhangi bir tür dönüşümü gerçekleştirmeden hem değeri hem de türü karşılaştırır.
'5' == 5 //true
'5' === 5 //false
```

## 3. Datatypes of JavaScript?

```jsx
JavaScript supports several data types, which can be broadly categorized into two types: 'Primitive and Non-Primitive' (or Reference).
```

```
Primitive data types include:
● String
● Number
● Boolean
● Undefined
● Null
● BigInt (as of ES2020)
● Symbol (introduced in ES6)

Non-Primitive (Reference) data types:
● Object
● Array
● Function
```

## 4. Difference between primitive vs non-primitive?

```jsx
Primitive types are the simplest form of data types and are 'immutable' (cannot be changed). They represent a single value and are stored directly on the 'stack'.

Non-primitive types (Reference types) are more complex types like arrays, objects, and functions. They are stored in the 'heap', with a 'reference' to their location being stored on the 'stack'. Because of this reference mechanism, they are 'mutable'.
```


```
Primitive types, veri türlerinin en basit biçimidir ve değişmez (immutable) (değiştirilemez). Tek bir değeri temsil ederler ve
doğrudan stack'te saklanır.

Non-primitive types (Referans türleri) arrayler, objectler ve functionlar gibi daha karmaşık türlerdir. Heap'te saklanan konumlarına referansla stack'te depolanırlar. Bu referans mekanizması nedeniyle değişkendirler.
```

## 5. What are arrays, functions, and objects?

```
● Arrays: Arrays are a type of object used for storing multiple values in a single variable. Each value (element) in an array has a numeric position, known as its index.

● Functions: Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return an
output (value).

● Objects: Objects are collections of key-value pairs. They can store data and methods to act upon that data.
```

```
● Arrayler: Arrayler, birden fazla değeri tek bir değişkende depolamak için kullanılan bir nesne türüdür. Bir dizideki her değerin (value), dizini olarak bilinen sayısal bir konumu vardır.

● Functions: Functionlar, belirli bir görevi gerçekleştiren yeniden kullanılabilen kod bloklarıdır. Girişleri (parametreleri) alabilir ve bir çıktı (değer) döndürebilirler.

● Objects: Objectler anahtar değer(key-value) çiftlerinin koleksiyonlarıdır. Verileri ve bu verilere göre hareket edecek yöntemleri saklayabilirler.
```

## 5. What is scope in JavaScript?
1. Scope in JavaScript refers to the context in which a variable exists. It determines the accessibility and visibility of variables, functions, and objects. There are mainly two types of scopes:
   1. Local Scope (Function Scope): Variables defined within a function are only accessible within that function.
   2. Global Scope: Variables defined outside any function are accessible from any other code in the entire program.

1. JavaScript'te scope, bir değişkenin mevcut olduğu contexti ifade eder. Variableslarin, functionlarin ve objectlerin erişilebilirliğini ve görünürlüğünü belirler. Temel olarak iki tür scope vardır:
    1. Local Scope (Function Scope): Bir fonksiyon içerisinde tanımlanan değişkenlere(variable) yalnızca o fonksiyon içerisinden erişilebilir.
    2. Global Scope: Herhangi bir fonksiyonun dışında tanımlanan değişkenlere(variable) programın tamamındaki diğer kodlardan erişilebilir.

## 6. Difference between Var, Let, and const in JavaScript?

```
● Var: It's function-scoped and can be re-declared and updated.
● Let: Introduced in ES6, it's block-scoped and can be updated but
not re-declared.
● Const: Also introduced in ES6, it's block-scoped but cannot be
re-declared or updated.
```

## 7. What is a Loop?
```
A loop is a programming concept used to execute a set of
statements repeatedly based on a condition.
```

```
Döngü, bir koşula bağlı olarak bir dizi ifadeyi tekrar tekrar yürütmek için kullanılan bir programlama kavramıdır.
```

## 8. Difference between for, while, and do-while loops?

```
● For loop: Iterates a set number of times. It has three parts:
initialization, condition, and increment/decrement.

● While loop: Iterates as long as a specified condition is true. The
condition is evaluated before each iteration.

● Do-while loop: Like the while loop but checks the condition after
the loop has executed, ensuring the loop is executed at least
once.
```

```
● For döngüsü: Belirlenen sayıda yinelenir. Üç bölümden oluşur: başlatma(initialization), koşul(condition) ve artırma/azaltma.

● While döngüsü: Belirtilen koşul doğru olduğu sürece yinelenir. Koşul her yinelemeden önce değerlendirilir.

● Do-while döngüsü: While döngüsüne benzer, ancak koşulu döngü çalıştırıldıktan sonra kontrol eder, böylece döngü en az bir kez çalıştırılır.
```

## 9. What is the forEach method?
```
forEach is a method on the Array prototype that iterates over
each element in the array. It takes a callback function that gets
executed for each element.
```

```
forEach, dizinin prototipi üzerinde bulunan bir metoddur ve dizideki her bir eleman üzerinde yineleme yapar. Her bir eleman için çalıştırılan bir geriçağırım(callback) fonksiyonunu alır.
```

## 10. Explain Hoisting in JavaScript.

```
Hoisting is JavaScript's behavior where variables and function
declarations are moved or "hoisted" to the top of their containing
scope during compilation. For variables declared with var, they are
hoisted and initialized with undefined. In contrast, variables declared
with let and const are hoisted but remain uninitialized.
```

```
Hoisting, JavaScript'in davranışıdır; burada değişken ve fonksiyon bildirimleri, derleme sırasında kapsayıcı scope'un en üstüne taşınır veya "kaldırılır" ("hoisted"). Var ile bildirilen değişkenler hoisted (kaldırılır) ve undefined ile başlatılır. Buna karşılık, let ve const ile bildirilen değişkenler hoisted (kaldırılır) ancak başlatılmazlar ve tanımlanmamış olarak kalırlar.
```

```jsx
function sayHi() {
  console.log(name); 
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi(); // name(undefined) age(ReferenceError)
```

```jsx
console.log(message); //output : undefined
var message = 'The variable Has been hoisted';

The above code looks like as below to the interpreter,

var message;
console.log(message);
message = 'The variable Has been hoisted';

```

## 11. What is the 'this' keyword?
```
In JavaScript, this refers to the object it belongs to. Its value can change depending on the context in which it's called.
```

```
JavaScript'te "this", ait olduğu nesneye referans verir. Bu değer, çağrıldığı bağlamına bağlı olarak değişebilir.
```

## 12. How does the this keyword work in arrow functions?

```
Arrow functions don’t have their own this. Instead, they
inherit this from the enclosing function or context. This behavior
makes arrow functions particularly suitable for callbacks and event
handlers, especially within frameworks and libraries where preserving
the context of this is important.
```

```
Arrow functionlarin kendi "this" bağlamı yoktur. Bunun yerine, bu davranışlarını içeren işlevden veya bağlamdan devralırlar. Bu davranış, özellikle this bağlamını korumanın önemli olduğu framework ve kütüphanelerde, callbackler ve event handler için arrow işlevlerini özellikle uygun hale getirir.
```

```jsx
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN
```

## 13. Explain Immutability.

```
Immutability refers to the concept that an object should not be
modified after it's created. Instead of modifying, new objects are created with the desired changes.
```

```
İmmutability, bir object oluşturulduktan sonra değiştirilmemesi kavramına atıfta bulunur. Değiştirme yerine, istenen değişikliklerle yeni nesneler oluşturulur.
```

## 14. What is the purpose of the array slice method?

```
The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.
```

```jsx
'slice()' metodu, bir dizideki seçilen öğeleri yeni bir dizi nesnesi olarak döndürür. Belirtilen başlangıç argümanından başlayarak ve verilen isteğe bağlı bitiş argümanına kadar olan öğeleri seçer, ancak son öğeyi dahil etmez. Eğer ikinci argümanı atlarsanız, o zaman sona kadar olan öğeleri seçer.
```

```jsx
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

Note: 'Slice method will not mutate the original array but it returns the subset as a new array.'

Not: 'slice() metodu, orijinal diziyi değiştirmez ancak bir alt küme olan yeni bir dizi olarak geri döner.'
```

## 15. What is the purpose of the array splice method?

```jsx
'The splice()' method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas
the option second argument indicates the number of elements to be deleted. Each additional argument is added to the array.
```

```jsx
'splice()' metodu, bir diziyi değiştirmek veya yeni öğeler eklemek/çıkarmak için kullanılır ve ardından çıkarılan öğeyi döndürür. İlk argüman, ekleme veya silme için dizinin konumunu belirtir, ikinci argüman ise silinecek öğe sayısını gösterir. Her bir ek argüman, diziye eklenir.

Note: Splice method modifies the original array and returns the deleted array.

Not: splice metodu, orijinal diziyi değiştirir(mutate) ve silinen diziyi döndürür.
```

```jsx
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array:
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; or
```

## 16. What is the difference between slice and splice?

|                Slice                         |              Splice                             |
| -------------------------------------------- | ----------------------------------------------- |                                
| Doesn't modify the original array(immutable) | Modifies the original array(mutable)            |
| Returns the subset of original array         | Returns the deleted elements as array           |
| Returns the deleted elements as array        | Used to insert or delete elements to/from array |

|                Slice                         |              Splice                              |
| -------------------------------------------- | -----------------------------------------------  |                                
| Orijinal diziyi değiştirmez (değişmez)       | Orijinal diziyi değiştirir (değişken).           |
| Orijinal dizinin alt kümesini döndürür       | Silinen öğeleri bir dizi olarak döndürür.        |
| Silinen öğeleri bir dizi olarak döndürür.    | Diziye öğe eklemek veya çıkarmak için kullanılır |
