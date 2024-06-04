class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class BSTS<T> {
    private root: TreeNode<T> | null = null;

    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

const bst = new BSTS<number>();
bst.insert(10); // root
bst.insert(5); // compare with root smaller ?? root.left = node 5 
bst.insert(20); // compare with larger number ?? root.right start 
bst.insert(3);
bst.insert(7);

console.log(bst)