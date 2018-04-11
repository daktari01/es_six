"use strict"

let name = 'John';
let template = `<h1>Hello, ${name}</h1>
<p>This is a simple template in JavaScript</p>`;
document.getElementById('template').innerHTML = template;

// Using functions in template literals
function makeUppercase(word){
    return word.toUpperCase();
}
let template1 = `<h1>${makeUppercase('Hello')}</h1>
<p>This is a another simple template in JavaScript</p>`;
document.getElementById('template1').innerHTML = template1;