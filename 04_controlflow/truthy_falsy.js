// const userEmail = "@email"

// if (userEmail){
//     console.log("Got the user email");
// } else {
//     console.log("Don't have use email");
// }


// const userEmail = ""

// if (userEmail){
//     console.log("Got the user email");
// } else {
//     console.log("Don't have use email");
// }


// const userEmail = []

// if (userEmail){
//     console.log("Got the user email");
// } else {
//     console.log("Don't have use email");
// }


// falsy values :

// false, 0, -0, Bigint 0n, "", null, undefined, NaN



// truthy values

// "0", 'false', " ", [], {}, function(){},

// false == 0, false == '', o == ''  (true)


// const user = []
// if (user.length === 0){
//     console.log("Array is empty");
// }

const obj = {}
if (Object.keys(obj).length === 0){
    console.log("obj is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val1 = null ?? 10
console.log(val2);

let val3;
val1 = undefined ?? 10
console.log(val3);

let val4;
val1 = null ?? 10 ?? 20
console.log(val4);



// Ternary operator 
// condition ? true : false

const iceTea = 100
iceTea >= 80 ? console.log("more than 80"):console.log("less than 80");

