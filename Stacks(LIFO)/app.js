/* 
    ✅ Stacks

    Stacks are a data structure that store information in the form of a list.
    They allow ONLY! adding and removing elements under a LIFO pattern 
    LIFO -> (Last In First Out)
    In stacks, elements can't be added or removed out of order,
    they always have to follow the LIFO pattern.

    ex) Think PAPER on the Desk.

    💡Stacks are useful when we need to make sure elements follow 
    the LIFO (LAST IN FIRST OUT)

    USAGE
        - JavaScript's call stack.
        - Managing function invocations in various programming language
        - The undo / redo functionality many programs offer.

    💡 invocation refers to the act of calling or executing a function, 
        method, or procedure. When a function is invoked, the code within that 
        function is executed. 

    Implementation: simple way
    Array push / pop
*/

// Create a class for each node within the stack. 
class Node {    
    // Each node has two properties, its value and pointer
    // that indicates the node that follows.
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Create a class for the "Stack".
class Stack{
    // The Stack has three properties, 
    // the first node, 
    // the last node and the stack size
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0; 
    }

    // The push method receives a value and adds
    // it to the "top" of the stack. 
    push(val){
        const newNode = new Node(val)
        // determine if the stack is currently empty. 
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return this.size++;
    }
    // The pop method eliminates the element
    // at the "top" of the stack and returns
    // it's value.
    pop(){
        if(!this.first) return null;
        const temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const stck = new Stack; 
stck.push("value1");
stck.push("value2");
stck.push("value3");

// console.log(stck.first); // 3
// console.log(stck.last);  // 1
console.log(stck.size);

stck.push('value4');
console.log(stck.pop());

/*
    The big O of stack methods is the following:

    Insertion - O(1)
    Removal - O(1)
    Searching - O(n)
    Access - O(n)
*/