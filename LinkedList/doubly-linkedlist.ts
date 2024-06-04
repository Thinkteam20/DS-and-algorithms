interface IDLinkedList<T>{
    push(value: T): void;
    pop(): T | null;
}

type DLLNode<T> = {
    value: T;
    next?: DLLNode<T> | undefined;
    prev?: DLLNode<T> | undefined;
}

class DoublyLinkedList<T> implements IDLinkedList<T>{
    private _length: number = 0;
    private head?: DLLNode<T>;
    private tail?: DLLNode<T>;

    length(): number{
        return this._length;
    }

    push(value: T): void{
        let newNode: DLLNode<T> = {value: value}
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            if(this.tail){
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
    }
    pop(){
        if(!this.head) return null;
        // define current starting point temp
        let current = this.head;
        // define newTail holding changed current as a tail temp
        let newTail = current;
        // looping until current does not have next which means tail Node.
        while(current.next){
            // if there is next node newTail = current updated node from end of the last loop.
            newTail = current;
            // move the current to the next.
            current = current.next;
        }
        this.tail = newTail; // last tail which does not have next=null
        this.tail.next = undefined;
        this._length--;
        if(this._length === 0){
            this.head = undefined;
            this.tail = undefined;
        }
        return null;
    }
}

const doubly = new DoublyLinkedList();
doubly.push('test1');
doubly.push('test2');

console.log(doubly)