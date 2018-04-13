"use strict"
/*
    Set
*/
console.log('--------------Set-----------------')
let myArray = [27, 86, 52, 43, 68];
let mySet = new Set(myArray);

mySet.add('59');
mySet.add({a:1, b:2})
mySet.delete(43);
// mySet.clear();

console.log(mySet);
console.log(mySet.size)

mySet.forEach(function(val){
    console.log(val);
});

/*
    Map
*/
console.log('--------------Map-----------------')
let myMap =  new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', 'Foo')
myMap.delete('a1');
console.log(myMap);
console.log(myMap.size)

/*
    WeakSet
*/
console.log('--------------WeakSet-----------------')
let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}
carWeakSet.add(car1);
let car2 = {
    make: 'RangeRover',
    model: 'Vogue'
}
carWeakSet.add(car2);
carWeakSet.delete(car1);
console.log(carWeakSet);

/*
    WeakMap
*/
console.log('--------------WeakMap-----------------')
let carWeakMap = new WeakMap();
let key1 = {
    id: 1
}
let car3 = {
    make: 'Audi',
    model: 'Q7'
}
carWeakMap.set(key1, car3);
let key2 = {
    id: 2
}
let car4 = {
    make: 'LandRover',
    model: 'Sport'
}
carWeakMap.set(key2, car4);
carWeakMap.delete(key1);
console.log(carWeakMap);