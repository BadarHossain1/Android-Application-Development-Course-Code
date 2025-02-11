// 1
console.log("Badar Hossain");

// 2

console.log('Hello I am "John Doe"');
console.log("Hello I'm \"John Doe\"");

// 3
const value = 7;

// 4
let p = 1000;
let r = 10;
let t = 5;

console.log((p*t*r)/100);

//5 Write a program to print a square of a number using user input.
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout

// })

// readline.question('Enter your number: ', number => {
//     console.log(`The square of the number is ${number*number}`);
//     readline.close();
// })

// 6 Write a program to print full name of a from first name and last name using user input.
// const readline2 = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout

// })

// readline2.question('Enter your first Name: ', first => {
//     readline2.question('Enter your last Name: ', last => {
//         console.log(`Hello ${first} ${last}`);
//         readline.close();
//     })
//     readline2.close();
// })

// 7
// Write a program to find quotient and remainder of two integers.

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

// 8 Write a program to swap two numbers.
const a = 5;
const b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);
let temp = a;
a = b;
b = temp;

console.log(`After swap: a = ${a}, b = ${b}`);

// 9 Write a program in Dart to remove all whitespaces from String.
// Write a program in JS to remove all whitespaces from String.

const str = "Hello World";

console.log(str.split(' ').join('')); // split() method splits a string into an array of substrings, and returns the new array. join() method joins the elements of an array into a string, and returns the string. here after splitting it looks like ["Hello", "World"] and after joining it looks like "HelloWorld"

// 10 Write a Dart program to convert String to int.
const str2 = "2";
const convert = parseInt(str2);
console.log(convert); // it will print 2
 
// 11  Suppose, you often go to restaurant with friends and you have to split amount of bill. Write a program to calculate split amount of bill. Formula= (total bill amount) / number of people
const numberofpeople = 4;
const totalbillamount = 400;

console.log(`Each person has to pay: ${totalbillamount/numberofpeople}`);

// 12 Suppose, your distance to office from home is 25 km and you travel 40 km per hour. Write a program to calculate time taken to reach office in minutes. Formula= (distance) / (speed)


const distance = 25;
const speed = 40;
const time = (distance/speed)*60;
console.log(`The time taken to cover the distance is: ${time} minutes`);