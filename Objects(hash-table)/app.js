/*
    An object is a collection of ✅ "key-value pairs".
    this data structure also called map,dictionary or hash-table in 
    other programming languages.
*/

const obj = {
    prop1: "I'm",
    prop2: "an",
    prop3: "object"
}
// 💡 key has to be unique
// 💡 Objects can store both "values" and "functions"

// When talking about objects, 
// 💡values are called properties, and
// 💡functions are called methods.

const obj2 = {
    prop1: "Hello!", // property
    // method
    prop2: function(){ 
        console.log("I'm a property dude!");
    }
}

// accessing property
// 1. object.property
// 2. object["property"]

console.log(obj2.prop1);
console.log(obj2["prop1"]);
obj2.prop2();

// Assign the new value.
obj.prop4 = 125;
// console.log(obj["prop4"]);
obj["prop5"] = "The new prop on the block";

console.log(obj.prop4);
console.log(obj.prop5);
// obj.prop6() 

/*
    ✅ Obj is a good way to group together data
    that have something in common or are somehow 
    related. 
    Also, thanks to the fact that property 
    names are unique, obj come in handy
    when we have to separate data based on a unique condition.
*/

// common 
const obj = {
    pizzaLovers: 1000,
    pastaLovers: 750,
    argentinianAsadoLovers: 123123124123
}