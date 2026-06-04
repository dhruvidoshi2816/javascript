//if

// if(condition){ //condition can be true or false 
//                //and for things to run condition should be true
// }

// conditional operators: < > <= >= == != === !==

// if (condition){

// } else {
    
// }

// const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
//     console.log(`User power: ${power}`);

const balance = 1000

// if (balance < 2000) console.log("test"); //implicit scope executable only in one line
// if (balance < 2000) console.log("test"), 
// console.log("test2"); //can be done but should not do

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to Buy course");
}
if (loggedInFromEmail || loggedInFromGoogle ) {
    console.log("user logged in");
}