const myNum = [1, 2, 3]

// const myTotal = myNum.reduce( function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} currval: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0 ) // 0 is initial value for accumulator

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        course: "js",
        price: 2999
    },
    {
        course: "py",
        price: 999
    },
    {
        course: "cpp",
        price: 1999
    },
    {
        course: "ds",
        price: 5999
    }
]

const totalAmmount = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(totalAmmount);

