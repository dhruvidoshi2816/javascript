// loops specific for array


// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World"
for (const greet of greetings) {
    console.log(` ${greet}`);
    
}


// Maps (values should be unique same values won't be printed) (printed in order unlike objects)

// const map = new Map ()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('AU', "Australia")
// map.set('IN', "India")


// console.log(map);


const map = new Map ()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('AU', "Australia")
map.set('IN', "India")


console.log(map);

for (const key of map) {
    console.log(key);
    
}

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}


// const myObj = {
//     game1 : 'NFS',
//     game2: 'spiderman'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
    
// }

// objects are not iterable in forof loop