let map = new Map();

// Adding key-value pairs:
map.set('key1', 'value1');
map.set('key2', 'value2');

// Retrieving values
let value1 = map.get('key1');

// Checking for existence of a key
let hasKey1 = map.has('key1');
let hasKey2 = map.has('key3');

// removing key-value pairs
// map.delete('key1');

// clearing all key-value pairs
// map.clear();

// Iterating over a Map:
map.set('key1', ['value1']);
map.set('key2', "value2");

for(let [key,value] of map){
    console.log(`${key}: ${value}`);
}

map.forEach((value,key) =>{
    console.log(`${key}: ${value}`);
})

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// let fruitCount = new Map();

// for (let fruits of fruits){
//     if(fruitCount.has(fruit))
// }

// console.log(map)
console.log(value1)
// console.log(hasKey1)
// console.log(hasKey2)

