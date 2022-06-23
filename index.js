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

const cat2 = {
    name: "Tom",
    age: "30",
    isCute: false,
}

const cats = [cat, cat2]
// console.log(cats);
// console.log(cats[0].age);
console.log(cats[1].isCute);