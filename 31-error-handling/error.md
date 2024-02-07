## Error Handling

JavaScript geniş yazılmış bir dildir. Bazı zamanlar, tanımsız bir değişkene erişmeye veya tanımsız bir işlevi çağırmaya çalıştığınızda bir çalışma zamanı hatası alırsınız.

JavaScript, Python veya Java'ya benzer, try-catch-finally bloğunu kullanarak çalışma zamanı hatalarını yakalamak için bir hata işleme mekanizması sağlar.

```js
try {
  // hata verilebilicek kod
} catch (err) {
  // bir hata oluşursa çalıştırılacak kod
} finally {
  // bir hatanın oluşup oluşmadığına bakılmaksızın yürütülecek kod
}
```

**try**: try bloğunda hata oluşturabilecek kodu yazın. try ifadesi, yürütülürken hatalar için test edilecek bir kod bloğu tanımlamamızı sağlar.

**catch**: Bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. Catch bloğu, size hata bilgisi verecek parametrelere sahip olabilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.

**finally**: finally bloğu, bir hata oluşmasından bağımsız olarak her zaman yürütülür. finally bloğu, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.

**Örnek:**

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
```

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}
```

```sh
ReferenceError: fistName is not defined
    at <anonymous>:4:20
In any case it  will be executed
```

Catch bloğu bir parametre alır. Catch bloğuna parametre olarak e, err veya error iletmek yaygındır. Bu parametre bir nesnedir ve isim ve mesaj anahtarlarına sahiptir. Adı ve mesajı kullanalım.

```js
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}
```

```sh
Name of the error ReferenceError
Error message fistName is not defined
In any case I will be executed
```

throw: throw ifadesi özel bir hata oluşturmamıza izin verir. Bir dize, sayı, boolean veya bir nesne aracılığıyla yapabiliriz. Bir istisna atmak için throw ifadesini kullanın. Bir throw exception yazdığınızda, expression specifies değerini belirtir. Aşağıdakilerin her biri throw exception atar:

```js
throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required
```

```js
const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()
```

### Error Types

- ReferenceError: Geçersiz bir referans oluşturur. Tanımlanmamış bir değişken kullanırsak bir ReferenceError atılır.

```js
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)
```

```sh
Uncaught ReferenceError: lastName is not defined
    at <anonymous>:2:35
```

- SyntaxError: Bir syntax(sözdizim) hatası oluşturur.

```js
let square = 2 x 2
console.log(square)

console.log('Hello, world")
```

```sh
Uncaught SyntaxError: Unexpected identifier
```

- TypeError: Bir type hatası oluşturur

```js
let num = 10
console.log(num.toLowerCase())
```

```sh
Uncaught TypeError: num.toLowerCase is not a function
    at <anonymous>:2:17
```

Bunlar, kod yazarken karşılaşabileceğiniz yaygın hatalardan bazılarıdır. Hataları anlamak, hangi hataları yaptığınızı bilmenize yardımcı olabilir ve kodunuzda hızlı bir şekilde hata ayıklamanıza yardımcı olur.


## Egzersizler

### Egzersiz:Seviye 1

Pratik

### Egzersiz: Seviye 2

Pratik

### Egzersiz: Seviye 3

Pratik
