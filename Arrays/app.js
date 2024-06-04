/* 
    An array is a collection of items stored at contiguous memory locations.

    ✅ it can be accessed by index.
    start at index 0 
    we can store values of any type in JS.
*/

const arr = ['a', 'b', 'c', 'd'];
console.log(arr[2]);

const anyType = ['store', 1, 'whatever', 2, 'you want', 3];

// multidimensional array - include another array inside of the array.
const multiArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Array comes with "built-in properties"

/*
    When we add/delete a new item at the beginning or the middle of the 
    array, the index of all the elements that come after the element added/deleted
    have to be changed.
    computational cost ⬆ 

    🚨 weak: delete add 
    other data structure perform better!
*/

