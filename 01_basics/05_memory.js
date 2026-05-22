// two types of memmory

// Stack (used for primitive datatypes) (copy) (change is made in copied value)
// Heap (non primitive) (reference of original value) (change is made in original value)

let myName = "Dhruvi"

let anotherName = myName
anotherName = "Dhanvi"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dhruvi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

