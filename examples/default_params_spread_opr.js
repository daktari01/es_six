"use strict"

// Default parameters
function greet($greeting = 'Hello world!'){
    console.log($greeting);
}
greet();

// Spread operator
let args1 = [1,2,3];
let args2 = [4,5,6];

function test(){
    console.log(args1+','+ args2);
}
// Using apply() method to pass an array as an argument
test.apply(null, args1);

// Using spread operator to pass an array as an argument
test(...args1, ...args2);