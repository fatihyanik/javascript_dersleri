// // 1
// const numbers = [1, 2, 3, 4, 5];
// // The below line should console.log: [5, 6, 7, 8, 10]
// console.log(numbersAddFive);

// // 2 
// const sayilar = [10, 11, 12, 13, 14];
// // The below line should console.log: ["10: ", "11: ", "12: ", "13: ", "14: "] 
// console.log(numbersReformatted);

// // 3
// const words = ["kalemler", "elmalar", "arabalar", "insanlar"];
// // The below line should console.log: ["kalem", "elma", "araba", "insan"]
// console.log(singularWords);

// // 4: ücüncü sorudaki array'in ilk harfleri yazdirin
// // The below line should console.log: ["k", "e", "a", "i"]
// console.log(firstLetters);

// // 5:
// // ucuncu sorudaki array'in ilk harfini büyük geri kalanini kücük yazdirin
// // The below line should console.log: ["Kalemler", "Elmalar", "Arabalar", "Insanlar"]
// console.log(capitalizedWords);

// const hayvanlar = ["kedi", "köpek", "kaplumbaga", "kaplan"]

// // 6:
// // hayvan isminin harf sayisi 5 ve 5 ten kücük olani yazdirin
// // The below line should console.log: ["kedi", "köpek"]
// console.log(petsShortNames);

// // 7 - hayvan isimleri icinde p olanlari yazdirin
// // The below line should console.log: ["köpek", "kaplumbaga", "kaplan"] 
// console.log(petsPNames);

// const numaralar = [3, 7, 4, 5, 10];
// // 8 - numaralar icinde 4 ten büyük olanlari yazdirin 
// // The below line should console.log: [7, 5, 10]
// console.log(numbersBiggerThanFour);

// // 9 - numaralar arrayindeki cift sayilari yazdir
// // The below line should console.log: [4, 10]
// console.log(evenNumbers);


// function enKucukPozitifSayi(array) {
//   // Sadece pozitif sayıları filtrele
//   const pozitifler = array.filter(num => num > 0);

//   // Pozitif sayıları küçükten büyüğe sırala
//   pozitifler.sort((a, b) => a - b);

//   // En küçük pozitif sayıyı bul
//   let enKucukPozitif = 1;
//   for (let i = 0; i < pozitifler.length; i++) {
//     if (pozitifler[i] <= enKucukPozitif) {
//       enKucukPozitif = pozitifler[i] + 1;
//     }
//   }

//   return enKucukPozitif;
// }

// // Örnek kullanım
// const arrayOrnek = [3, 1, 4, 2, -1, -5, 0]; // Bu örnekte en küçük pozitif sayı 5'tir
// const sonuc = enKucukPozitifSayi(arrayOrnek);
// console.log("En küçük pozitif sayı:", sonuc);


// function solution(A) {
//     const positive = A.filter((num)=>num>0)
//     positive.sort((a,b)=>a-b)
//      let smallest=1;
//      for(let i=0; i< positive.length;i++){
//          if(positive[i]<=smallest){
//            smallest=positive[i] + 1
//          }
//      }
//     return smallest
//     }
    
//     const exampleArray=[3,1,5,-3,-4,0]
//     const result = solution(exampleArray)
//     console.log(result)



//     function solution(A) {
//         // Create an object to store the count of patients in each department
//         const departmentCount = {};
    
//         // Iterate through the array and update the count for each department
//         for (let i = 0; i < A.length; i++) {
//             const department = A[i];
    
//             // If the department is not in the object, initialize its count to 1
//             if (!departmentCount.hasOwnProperty(department)) {
//                 departmentCount[department] = 1;
//             } else {
//                 // Increment the count for the existing department
//                 departmentCount[department]++;
//             }
//         }
    
//         // Find the maximum count of patients in any department
//         let maxCount = 0;
//         for (const count of Object.values(departmentCount)) {
//             maxCount = Math.max(maxCount, count);
//         }
    
//         return maxCount;
//     }
    
//     // Examples
//     console.log(solution(["Kalp", "Ortopedi", "Beyin", "Kalp", "Ortopedi", "Kalp"])); // Output: 3
//     console.log(solution(["Onko", "Gogüs", "Ortopedi", "Onko", "Gogüs", "Ortopedi"])); // Output: 2
//     console.log(solution(["Beyin", "Kalp", "Onko"])); 


//     function solution(Ali, Xavier) {
//         var Ne = Ali.length;
//         if (Ne === 0) {
//             return -1;
//         }
//         var le = 0;
//         var re = N-1;
//         while (le <= re) {
//             var m = Math.floor((le + re) / 2);
//             if (Ali[m] > Xavier) {
//                 re = m - 1;
//             } else {
//                 le = m;
//             }
//         }
//         if (Ali[le] == Xavier) {
//             return le;
//         }
//         return -1;
//     }

//     // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function wordMachine(S) {
//     const stack = [];
//     const operations = S.split(' ');
  
//     for (const str of operations) {
//       if (!isNaN(str)) {
//         stack.push(parseInt(str, 10));
//       } else {
//         switch (str) {
//           case 'POP':
//             if (stack.length === 0) return "Error";
//             stack.pop();
//             break;
//           case 'DUP':
//             if (stack.length === 0) return "Error";
//             stack.push(stack[stack.length - 1]);
//             break;
//           case '+':
//             if (stack.length < 2) return "Error";
//             const sum = stack.pop() + stack.pop();
//             if (sum >= Math.pow(2, 20)) return "Error";
//             stack.push(sum);
//             break;
//           case '-':
//             if (stack.length < 2) return "Error";
//             const diff = stack.pop() - stack.pop();
//             if (diff < 0) return "Error";
//             stack.push(diff);
//             break;
//           default:
//             return "Error";
//         }
//       }
//     }
  
//     return stack.length === 0 ? "Error" : stack[stack.length - 1];
//   }
  
//   // Örnek kullanım:
//   const result = wordMachine("4 5 6 - 7 +");
//   console.log(result);






// function wordMachine(input) {
//   const stack = [];
//   const operations = input.split(' ');

//   for (const op of operations) {
//     if (!isNaN(op)) {
//       stack.push(parseInt(op, 10));
//     } else {
//       switch (op) {
//         case 'POP':
//           if (stack.length === 0) return -1; // Error indicator
//           stack.pop();
//           break;
//         case 'DUP':
//           if (stack.length === 0) return -1; // Error indicator
//           stack.push(stack[stack.length - 1]);
//           break;
//         case '+':
//           if (stack.length < 2) return -1; // Error indicator
//           const sum = stack.pop() + stack.pop();
//           if (sum >= Math.pow(2, 20)) return -1; // Error indicator
//           stack.push(sum);
//           break;
//         case '-':
//           if (stack.length < 2) return -1; // Error indicator
//           const diff = stack.pop() - stack.pop();
//           if (diff < 0) return -1; // Error indicator
//           stack.push(diff);
//           break;
//         default:
//           return -1; // Error indicator
//       }
//     }
//   }

//   return stack.length === 0 ? -1 : stack[stack.length - 1];
// }

// // Örnek kullanım:
// const result = wordMachine("4 5 6 - 7 +");
// console.log(result);


function wordMachine(input) {
    const stack = [];
    const operations = input.split(' ');
  
    for (const op of operations) {
      if (!isNaN(op)) {
        stack.push(parseInt(op, 10));
      } else {
        switch (op) {
          case 'POP':
            if (stack.length === 0) return error; // Hata belirleyici
            stack.pop();
            break;
          case 'DUP':
            if (stack.length === 0) return error; // Hata belirleyici
            stack.push(stack[stack.length - 1]);
            break;
          case '+':
            if (stack.length < 2) return -1; // Hata belirleyici
            const sum = stack.pop() + stack.pop();
            if (sum >= Math.pow(2, 20)) return error; // Hata belirleyici
            stack.push(sum);
            break;
          case '-':
            if (stack.length < 2) return error; // Hata belirleyici
            const second = stack.pop();
            const first = stack.pop();
            const diff = first - second;
            if (diff < 0) return error; // Hata belirleyici
            stack.push(diff);
            break;
          default:
            return error; // Hata belirleyici
        }
      }
    }
  
    return stack.length === 0 ? error : stack[stack.length - 1];
  }
  
  // Örnek kullanım:
  const result = wordMachine("4 5 6 - 7 +");
  console.log(result);