// Generic interface

interface IStack<T> {
    // 💡 interface dont allow "private"
    push(value: string): void;
    pop(): string | null;
    size(): number;
}

type StackNode = {
    value: string;
    next?: StackNode;
}

class StackImp<T> implements IStack<T> {
    private _size = 0;
    private first?: StackNode;
    private last?: StackNode;

    constructor(private capacity: number) { }

    size(): number {
        return this._size;
    }

    push(value: string): void {
        if (this._size === this.capacity) {
            throw new Error('Stack is full');
        }
        const node: StackNode = { value: value }
        if(!this.first){
            this.first = node;
            this.last = this.first;
        } else {
            const temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        this._size++;
    }
    pop(): string {
        if (this.first == null) {
            throw new Error('Stack is empty!');
        }
        const temp = this.first;
        this.first = temp.next;
        this._size--;
        return temp.value;
    }
}
const stack = new StackImp(10);
stack.push('test 1');
stack.push('test 2');
stack.push('test 3');
stack.push('test 4');
stack.pop();

console.log(stack);