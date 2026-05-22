const name = "Dhruvi"
const age = 20

const newName = new String('Dhruu-wee') //another method to declare string

// console.log(name + age + " value");

console.log(`Hello my name is ${name} and my agae is ${age}`); //string interpolation

console.log(newName[0]) //to access key value pair
console.log(newName.__proto__); //to access prototype and get object

console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(4));
console.log(newName.indexOf('u'));

const newString = newName.substring(0,4)
console.log(newString);

const anotherString = newName.slice(-8,4)
console.log(anotherString);

const stringOne = "    Dhruvi     "
console.log(stringOne);
console.log(stringOne.trim());

const url ="https://Dhruvi.com/Dhruvi%20Doshi"
console.log(url.replace('%20',' '))
console.log(url.includes('dhruvi'))

console.log(newName.split('-'));
