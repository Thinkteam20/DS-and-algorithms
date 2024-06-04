// create a node class.
class Node{
    constructor(value){
        // hold a value and next. (singly)
        this.value = value;
        this.next = null;
    }
}

// Create a SinglyLinkedList
class SinglyLinkedList{
    constructor(){
        // in constructor LinkedList class
        // will have head/tail/length.
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++; 
        return this;
    }

    pop(){
        if(!this.head) return null;
        let current = this.head;
        let newTail = current;
        // move the current pointer if there is current ( starting from this.head -> until the end by checking !.next)
        while(current.next){
            newTail = current;
            current = current.next;
        }
        // finished moving current pointer. then reform.
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null; 
        }
        return current;
    }
}

const singly = new SinglyLinkedList(); 
singly.push('Test 1');
singly.push('Test 2');
singly.push('Test 3');
singly.pop();
console.log(singly);
