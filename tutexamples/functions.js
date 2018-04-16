"use strict"

// Arrow/Lambda funtions
var foo = (x)=>10+x;

console.log(foo(10));

var msg = ()=>{
    console.log("Function invoked!")
}
msg()

// Optional parenthesis for a single parameter
var msg = x=>{
    console.log(x)
}
msg("I am happy!")

// Optional braces for a single statement
var disp = ()=>console.log("I am coding!!")

disp();