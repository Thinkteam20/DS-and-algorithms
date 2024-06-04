interface IQueue<T> {
    push(value: string): void;
    pop(): string | null;
    size(): number;
}

type QueueNode<T> = {
    value: string;
    next?: QueueNode<T>;
}

class QueueImp<T> implements IQueue<T> {
    private _size = 0;
    private head?: QueueNode<T>;
    private tail?: QueueNode<T>;

    constructor(private capacity: number) { }

    size() {
        return this._size;
    }
    push(value: string): void {
        if(this._size >= this.capacity){
            throw new Error('Queue is full!');
        }
        const node: QueueNode<T> = { value };
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        } else {
            if(this.tail){
                this.tail.next = node;
                this.tail = node;
            }
        }
        this._size++;
    }
    pop(): string | null {
        if(!this.head){
            return null;
        }
        const temp = this.head;
        this.head = this.head.next;
        this._size--;
        return temp.value; 
    }
}

const queue = new QueueImp(10);
queue.push('queue1');
queue.push('queue2');
queue.push('queue3');
queue.push('queue4');
queue.push('queue5');

queue.pop(); 
console.log(queue); 