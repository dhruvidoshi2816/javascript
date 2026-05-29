// Imediately Invoked Function Expressions (IIFE)

(function chai (){
    console.log(`DB connected`);
})(); // here semicolon is necessary

// ()()  // IIFE used to remove pollution of global scope

(()=>{
    console.log(`DB connected`);
})();