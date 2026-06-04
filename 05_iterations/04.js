const myObj = {
    js : "javascript",
    cpp : "C++",
    py: "python"
}

// for in loop

for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);
    
}

const programming = ["js", "cpp", "py"]

for (const key in programming) {
    // console.log(programming[key]);
}


// const map = new Map ()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('AU', "Australia")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
    
// }


// maps arte not iterable in forin loop