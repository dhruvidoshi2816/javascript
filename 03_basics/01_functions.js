function myName(){
console.log("D");
console.log("h");
console.log("r");
console.log("u");
console.log("v");
console.log("i");
}

// myName //reference
// myName() //execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

// addTwoNumbers(3,4)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1+ number2
    // console.log("D"); //function doesn't work after result as it won't execute
    
}


// const result = addTwoNumbers(3,4)
// console.log("Result: ", result);


// function loginUserMessage(username = sam){ //default name given
//     if(username === undefined){ //(username === undefined)== !username
//         console.log("please enter a username");
//         return
//     }
//     return`${username} justLoggedIN`
// }

// console.log(loginUserMessage("dhruvi"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1){ //rest operator
    return num1
}

// console.log(calculateCartPrice(200,400));

const user = {
    name: "Dhruvi",
    age: 20
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user)
handleObject({
    name: "Dhanvi",
    age: 18
})


const myNewArray = [100,200,300]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([100,200,300]));
