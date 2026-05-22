// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


// primitive datatypes (call by value)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

const bigNumber = 373644884939287171728383848n


// refrence/non primitive datatype (call by reference)

// Arrays, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]; 
//Array

let myObj = {
    name: "Dhruvi",
    age: 20,
} 
//anything inside curly braces is object

// function(){} //definiton of function
const myFunction = function(){
    console.log("Hello World");
    
} //function stored in variable

console.log(typeof bigNumber); //function to find datatype

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object