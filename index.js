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

const format = (num) => {   
    for (let i = 65; i <=90 ; i++) {
    num = Math.floor(Math.random(i)*90 +1);
        
    }
    console.log(num);
    return num
}
format(1)
// console.log(String.fromCharCode(65,90));