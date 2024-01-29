// function Burhan(x){
//     console.log(x);
// } // bellekte yer alir

const Burhan = (x) => {
    console.log(x);
} // bellekte cok yer kaplamaz

// function Fatih(y, callback){
//     callback(y);
// }

const Fatih = (y, callback) => {
    callback(y)
}



// function Saliha(z){
//     console.log(z);
// }

const Saliha = (z) => {
    console.log(z);
}

Fatih(10, Burhan);

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.map((x) => {
    bes(x)
})

function bes(x) {
    if (x > 5) {
        console.log(x);
    }
}

//Callback
// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         callback('It did not go well', skills)
//     }, 2000)
// }

// const callback = (err, result) => {
//     if (err) {
//         return console.log(err)
//     }
//     return console.log(result)
// }

// doSomething(callback)


function doSomething(callback) {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
}

function callback(err, result) {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback)

//Callback
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', skills)
//     }, 2000)
//   }

//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }

//   doSomething(callback)


// syntax
// syntax
// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
//   })


// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//     resolve('Promise resolved!')
//    },1500)
//   })

//   promise1.then(result => {
//     console.log(result)
//   }).catch(err => {
//     console.log(err);
//   })

// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something wrong has happened')
//         }
//     }, 2000)
// })

// doPromise
//     .then(result => {
//         console.log(result) //[ 'HTML', 'CSS', 'JS' ]
//     })
//     .catch(error => console.log(error))

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('Node')) {
            resolve('fullstack developer')
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error)) //Something wrong has happened

    const url = 'https://restcountries.com/v2/all' // countries api
    fetch(url)
      .then(response => response.json()) // API verilerine JSON olarak erişme
      .then(data => {
        // verileri almak
        console.log(data)
      })
      .catch(error => console.error(error)) // yanlış bir şey olursa işleme hatası


