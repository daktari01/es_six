"use strict"

function testVar(){
    var a = 30;
    if(true){
        var a = 50;
        console.log(a); // a = 50
    }
    console.log(a); // a = 50
}

function testLet(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a); // a = 50
    }
    console.log(a); // a = 30
}
console.log("Testing var")
testVar();
console.log("----------------------")
console.log("Testing let")
testLet();

// Using const
console.log("-------const--------")
const colors = [];
colors.push('red');
colors.push('black');
colors.push('white');

//colors = 'Grey'; // Reassigning a const causes an error

console.log(colors);
