/*
    ✅ Queue
    Queues work in a very similar way to stacks,
    but elements follow a different pattern for add and removal.
    Queues allow onyl a FIFO pattern (First In First Out).
    In Queues, elements can't be added or removed out of order,
    they always have to follow the FIFO pattern.

    ex) buy food queue.if you get the queue first, 
    you will be first to be served. 
    
    If you get there first, you'll be the first out. FIFO. 

    USAGE
    - Background tasks.
    - Printing / task processing.
*/

// Create a class for each node within the Queue
class Node{
    // value / pointer
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null; 
        this.size = 0;
    }
    // Create enqueue method receives a value and adds it
    // to the "end" of the Queue
    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        // if there is nodes in the queue. put in the temp first node
        const temp = this.first;
        // check is it the only node in the Queue!
        // if yes only item? then this.last = null.
        // cus after enqueue it need to be empty.
        if(this.first === this.last){
            this.last = null;
        }
        // if it is not either empty / only first node.
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

}

const que = new Queue();
que.enqueue('serve 1');
que.enqueue('serve 2');
que.enqueue('serve 3');

console.log(que.first);
console.log(que.enqueue('serve 4'));
console.log(que.dequeue());