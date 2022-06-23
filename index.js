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

const compare = (x, y) => {
    if (x > y) {
        console.log("x is bigger");
    } else if (x<y) {
        console.log("y is bigger");
    } else if (x ===y) {
        console.log("both are the same");
    }
}
compare(3,3);
