//1
let marksMass = 92;
let marksHeight = 1.72;

let johnsMass = 85;
let johnsHeight = 1.86;

//2
let marksBMI = Number((marksMass / (marksHeight * marksHeight)).toFixed(1));
console.log(marksBMI);

let johnsBMI = Number((johnsMass / (johnsHeight ** 2)).toFixed(1));
console.log(johnsBMI);

//3
let markHasHigherBMI = marksBMI > johnsBMI;
console.log(markHasHigherBMI);

//4
console.log(`Is Mark's BMI higher than John's? Why yes, it's ${markHasHigherBMI}, it is`);

//5
if (markHasHigherBMI) {
    console.log(`Mark has a higher BMI: ${marksBMI} kg/m2`);
} else {
    console.log(`John has a higher BMI: ${johnsBMI} kg/m2`);
}

function bmiHesapla(mass, height) {


    const bmi = mass / (height * height);
    return Number(bmi.toFixed(1));
}
bmiHesapla(92, 1.72)