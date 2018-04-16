"use strict"

function* g1(){
    console.log('Hello')
    yield 'Yield 1 ran ...';
    console.log('World');
    yield 'Yield 2 ran ...';
    return 'Returned';
}
// Set the generator to a function for it to work
var g = g1();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

for(let val of g){
    console.log(val);
}