const tinderUser = new Object() // singleton object
// const tinderUser = {} // non singleton object

tinderUser.id = "2801"
tinderUser.name = "Dhruvi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "dhruvi.com",
    fullname: {
        userfullname: {
            firstName: "Dhruvi",
            lastnamr: "Doshi"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} //spread
console.log(obj3);

const user = [
    {
        id: 1,
        name: 'a',
    },
    {
        id: 2,
        name: 'b',
    }
]
user[1].id
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));

// de structure the object


const course = {
    name: "JS",
    price: "999",
    teacher: "Hitesh"
}

// course.teacher

const {teacher: tc} = course
// console.log(teacher);
console.log(tc);



// JSON (to call API)

// {
//     "name": "Dhruvi"
//     "age": 20
//     "cousre": "JS"
// }

[
    {},
    {},
    {}
]