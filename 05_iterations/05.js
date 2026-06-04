const code = ["js", "cpp", "py"]

// code.forEach( function (item) {
//     console.log(item);
    
// } )

// code.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// code.forEach(printMe)

// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const coding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

coding.forEach( (item) => {
    console.log(item.languageName);
    
})