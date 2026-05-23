// there are 2 ways to declare objects that is like "literal" and as "constructor"

// singleton object is formed with constructor
// singleton is not formed when declared like literal

// singleton
// object.create

// object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Dhruvi",
    "full name": "Dhruvi Doshi",
    age: 20,
    [mySym]: "mykey1",
    place: "Surat",
    email: "dhruvi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Dhruvi@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "Dhruvi.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting);
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
