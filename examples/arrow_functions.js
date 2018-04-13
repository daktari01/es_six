"use strict"

console.log('------Without arrow functions------')
function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
    let that = this;
    return arr.map(function(x){
        console.log(that.prefix + x);
    });
}
let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);

console.log('-------With arrow functions-------')
function Prefixer1(prefix1){
    this.prefix1 = prefix1;
}

Prefixer1.prototype.prefixArray1 = function(arr1){
    return arr1.map((x) => {
        console.log(this.prefix1 + x);
    });
}

let pre1 = new Prefixer1('Jambo ');
pre1.prefixArray1(['Vanessa', 'Lydia']);

console.log('-------Simpler Syntax-------')
console.log('------Without arrow functions------')
let add = function(a,b){
    let sum = a + b;
    console.log(sum);
    return false
}
add(2,2);
console.log('-----With arrow functions-----')
let subtract = (a,b) => {
    let result = a - b;
    console.log(result);
    return false;
}
subtract(45, 9);