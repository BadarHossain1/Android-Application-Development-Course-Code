const readline3 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout

})

readline3.question('Enter your first number: ', first => {
    readline3.question('Enter your second number: ', second => {
        console.log(`Quotient: ${first/second}`);
        console.log(`Remainder: ${first%second}`);
        readline3.close();
    })
   
})



// data types in javascript:
// 1. var
// 2. let
// 3. const
// 4. string
