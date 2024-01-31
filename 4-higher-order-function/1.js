// callback fonksiyonun adını istediğimiz şekilde verebiliriz.
const callback = (n) => {
    return n ** 2
}

// bir başka fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

// Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers))

const numbers1 = [1, 2, 3, 4]

const sumArray1 = arr => {
    let sum = 0
    arr.forEach(function (element) {
        sum += element
    })
    return sum

}
console.log(sumArray1(numbers1))