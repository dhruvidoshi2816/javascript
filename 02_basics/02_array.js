const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

// const newArr = marvel.concat(dc)
// console.log(newArr);

const all = [...marvel, ...dc] //spread operator
console.log(all);

const another = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
console.log(another);

const real = another.flat(Infinity)
console.log(real);


console.log(Array.isArray("Dhruvi"));
console.log(Array.from("Dhruvi"));
console.log(Array.from({name: "Dhruvi"})); //interesting for interviews

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
