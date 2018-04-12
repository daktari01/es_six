"use strict"

/* 
String methods
*/

let theString = 'Hello, I am Daktari and I love JavaScript';

// startsWith()
console.log(theString.startsWith('Hello')); // Returns true
console.log(theString.startsWith('ello')); // Returns false

// endsWith()
console.log(theString.endsWith('JavaScript')); // Returns true
console.log(theString.endsWith('JavaScrip')); // Returns false

// includes()
console.log(theString.includes('Daktari')); // Returns true
console.log(theString.includes('loves')); // Returns false


/* 
Number methods
*/

// Hex
console.log(0xFF); // Gives 255

// Binary
console.log(0b101011); // Gives 43

// Octal
console.log(0o543); // Gives 355

// isFinite()
console.log(Number.isFinite(3)); // Returns true
console.log(Number.isFinite(-8)); // Returns true
console.log(Number.isFinite(Infinity)); // Returns false
console.log(Number.isFinite(NaN)); // Returns false

// isNaN()
console.log(Number.isNaN(NaN)); // Returns true
console.log(Number.isNaN(7)); // Returns false
console.log(Number.isNaN('string')); // Returns false

// isInteger
console.log(Number.isInteger(65)); // Returns true 
console.log(Number.isInteger(NaN)); // Returns false
