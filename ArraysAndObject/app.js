/*

A data structure is a format to organize, 
manage and store data in a way that allows 
efficient access and modification.

    - collection of data values
    - relationship among them
    - the functions and operations that can be applied to that data
    
*/

//  A collection of the values 1, 2 and 3.
const arr = [1, 2, 3];

// Each value is relation to one another, in the sense that 
// each is indexed in a position of the array.

const indexOfTwo = arr.indexOf(2);
console.log(arr[indexOfTwo-1]); //1
console.log(arr[indexOfTwo+1]); //3

arr.push(4);
console.log(arr);