const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this refers current context
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Dhruvi"
//     console.log(this);
//     console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "Dhruvi"
//     console.log(this.username);
// }
// chai()

const chai = () => {  // arrow function
    let username = "Dhruvi"
    console.log(this.username);
    console.log(this);
    
}
chai()

// () => {}  // basic syntax of arrow function

// const add = (num1 , num2) => { //basic arrow function
//     return num1 + num2  // explicit return
// }


// const add = (num1 , num2) => num1 + num2 // implicit return

// const add = (num1 , num2) => (num1 + num2) 

const add = (num1 , num2) => ({username: "Dhruvi"})


console.log(add(3,4))


// const myArray = [2,5,8,9,6]

// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=>())

