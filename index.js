// 01 - Object

const cat = {
    name: "Garfield",
    age: "3",
    isCute: true,
}
// if (cat.isCute === true){
//     console.log("so cute");
// } else {
//     console.log("not so cute");
// }

// 02 - Combine

// const cat2 = {
//     name: "Tom",
//     age: "30",
//     isCute: false,
// }

// const cats = [cat, cat2]
// console.log(cats);
// console.log(cats[0].age);
// console.log(cats[1].isCute);

// 03 - Even

// const checkIfEven = (num) => {
//     if (num % 2 === 0) {
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }
// checkIfEven(13)
// console.log();

// 04 - Compare

// const compare = (x, y) => {
//     if (x > y) {
//         console.log("x is bigger");
//     } else if (x<y) {
//         console.log("y is bigger");
//     } else if (x ===y) {
//         console.log("both are the same");
//     }
// }
// compare(3,3);

//05 - Add Up 
// let box = 0
// const addUp = (num) => {

//     for (let i = 0; i <= num; i++) {
//          box = box + i
//         }
//         console.log(box);

// }
// addUp(2)

// 06 - Time

// let hour = 0
// let minuts = 0
// let seconds = 0
// const format = (num) => {
//     hour = num / 3600
//     console.log(Math.floor(hour));
//     minuts = num % 3600
//     minuts  = minuts/60 
//     console.log(Math.floor(minuts));
//     seconds = (num % 3600) % 60
//     console.log(seconds);
//     console.log(` ${Math.floor(hour)} : ${Math.floor(minuts)} : ${seconds}`);
    

// }
// format(3700)

// 07 - Password generation
// let string = ""

// const format = (num) => {   
//     let password = ""
//     for (let i = 0; i <num ; i++) {
//     password +=  String.fromCharCode(Math.floor(Math.random()* 26)+ 65)
    
// }
// if (password.length>=6 && password.length <=15) {
//     console.log(` ${password}`);
// } else {
//     console.log("no");

// }

// }
// format(12)
// console.log(String.fromCharCode(65,90));

// exo8
let des1 = 0
let des2 = 0
let joueur1 = 0
let joueur2 = 0
const launchDice = (numberOfDice) => {
    for (let i = 0; i <= numberOfDice; i++) {        
        des1 = Math.ceil(Math.random(i)* 6)
        des2 = Math.ceil(Math.random(i)* 6)
        // console.log(des1, des2);
    }
    return des1 , des2
}
// console.log(des1 + des2);
joueur1 = launchDice(5)
joueur2 = launchDice(5)
console.log(joueur1);
console.log(joueur2);
if (joueur1> joueur2) {
    console.log("joueur 1 a gagné");
} else if (joueur1< joueur2) {
    console.log("joueur2 a gagné");
} else if (joueur1 === joueur2) {
    console.log("egalité");
} else {
    
}