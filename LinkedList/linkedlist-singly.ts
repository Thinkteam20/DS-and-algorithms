// Create a Interface for the main SinglyLinkedLists class
// saying it will have push / pop / length
interface ILinkedLists<T> {
    push(item: T): void;
    pop(): T | null;
    shift(): T | null;
    unshift(value: T): void;
    length(): number;
    get(index: number): LLNode<T> | null;
    set(index: number, value: T): boolean;
    insert(index: number, value: T): LLNode<T> | null; 
}

// Type Alias for LLNode.
type LLNode<T> =  {
    value: T;
    next?: LLNode<T> | undefined;
}

class SinglyLinkedLists<T> implements ILinkedLists<T>{
    private _length: number = 0;
    private head?: LLNode<T>;
    private tail?: LLNode<T>;

    length(): number{
        return this._length;
    }
    push(value: T): void{
        const node: LLNode<T> = { value }
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else {
            if(this.tail){
                this.tail.next = node;
                this.tail = node;
            }
        }
        this._length++;
    }
    pop(){
        if(!this.head) return null;
        let current = this.head;
        let newTail = current; 
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = undefined;
        this._length--;
        if(this._length === 0){
            this.head = undefined; 
            this.tail = undefined;
        }
        return null
    }
    // The shift method removes the head of the list
    shift(): T | null{
        if(this._length === 0) return null;
        let currentHead = this.head;
        this.head = currentHead?.next;
        this._length--;
        if(this._length === 0){
            this.tail = undefined;
        }
        return currentHead?.value!;
    }
    // The unshift method takes a value 
    // as parameter and assignes it as the head
    // of the list.
    unshift(value: T): void{
        const node: LLNode<T> = { value: value};
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else{
            node.next = this.head; 
            this.head = node;
        }
        this._length++;
    }
    // The get method takes an index number as 
    // parameter and returns the value of the node at that index.
    get(index: number){
        if(index < 0 || index >= this._length) return null; 
        let counter: number = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode?.next;
            counter++;
        }
        return currentNode ?? null;
    }
    // The set method takes an index number and a value
    // as a parameters, and modifies the node value at the given index
    // in the list. 
    set(index: number, value: T) {
        let foundNode = this.get(index);
        // console.log(foundNode)
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;
    }
    // The insert method takes an index number and value
    // as a parameter 
    // and inserts the value at the given index in the list.
    insert(index: number, value: T): LLNode<T> {
        if (index < 0 || index > this._length) {
            throw new Error('Index is out of range');
        }
        if (index === this._length) {
            this.push(value);
            return this.tail!;
        }
        if (index === 0) {
            this.unshift(value);
            return this.head!;
        }

        let counter = 0;
        let prevNode = this.head;
        while (counter < index - 1) {
            prevNode = prevNode!.next;
            counter++;
        }
        console.log(prevNode)
        // create new node with new value.
        // set prev's next as a new node's next
        const newNode: LLNode<T> = { value: value, next: prevNode!.next };
        // current
        prevNode!.next = newNode;
        this._length++;

        return newNode;
    }
}

const singlys = new SinglyLinkedLists();
singlys.push('test 1');
singlys.push('test 2');
singlys.push('test 3');
singlys.push('test 4');
singlys.unshift('test1111');
singlys.set(0,'set-test-node');
singlys.insert(1,'new node insertion');
console.log(singlys)

