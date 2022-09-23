// // VERY EASY
// let min = (x,y) => x - y;
// console.log(min(10, 5));

// // EASY
// let student1 = [firstName="John", lastName="Doe", age="19"]
// let student2 = [firstName="Jane", lastName="Doe", age="20"]
// let student3 = [firstName="Osiel", lastName="Torres", age="32"]
// console.log(`Hello, I'm ${student2[0]} ${student2[1]} and I'm ${student2[2]} years old.`);

//MEDIUM
// let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let input = 1;
// output = (input) => {
//     if(input == 1){
//         console.log(month[0]);
//     } else if(input == 2){
//         console.log(month[1])
//     } else if(input == 3){
//         console.log(month[2])
//     } else if(input == 4){
//         console.log(month[3])
//     } else if(input == 5){
//         console.log(month[4])
//     } else if(input == 6){
//         console.log(month[5])
//     } else if(input == 7){
//         console.log(month[6])
//     } else if(input == 8){
//         console.log(month[7])
//     } else if(input == 9){
//         console.log(month[8])
//     } else if(input == 10){
//         console.log(month[9])
//     } else if(input == 11){
//         console.log(month[10])
//     } else if(input == 12){
//         console.log(month[11])
//     } else{
//         alert("Invalid number")
//     }
// }
// console.log(output(6));

// HARD
// let tom =[tHeight = 9, tMass = 8]
// let jerry = [jHeight = 10, jMass = 45]
// let BMI = (height, mass) => {
//     mass/(height **2);
//     return 
// } 
// console.log(BMI(9, 8));

let height = [tHeight = 9, jHeight = 10]
let mass = [tMass = 8, jMass = 45]
let BMI = (height, mass) => {
    let BMI = mass/(height * height);
    return BMI;
}

let tBMI = BMI(tHeight, tMass);
let jBMI = BMI(jHeight, jMass);
if(tBMI > jBMI){
    console.log(`Tom's BMI is ${tBMI}, which is higher than Jerry's ${jBMI},`);
} else{
    console.log(`Jerry's BMI is ${jBMI}, which is higher than Tom's ${tBMI}.`);
}
