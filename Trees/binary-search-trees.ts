class TreeNode<T>{
    value: T;
    right: TreeNode<T> | null = null;
    left: TreeNode<T> | null = null;

    constructor(value: T){
        this.value = value;
    }
}

class BinarySearchTrees<T>{
    root: TreeNode<T> | null;

    constructor(){
        this.root = null;
    }
    
    insert(value: T): void{
        const newNode = new TreeNode<T>(value);
        
        if(!this.root){
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode); 
    }

    private insertNode(root: TreeNode<T>, newNode: TreeNode<T>):void{
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(!root.right){
                root.right = newNode;
            } else{
                this.insertNode(root.right, newNode); 
            }
        }
    }

    // Search Node
    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(root: TreeNode<T> | null , value: T): boolean {
        if(!root){
            return false;
        }

        if(value === root.value){
            return true;
        } else if (value < root.value) {
            return this.searchNode(root.left, value);
        } else {
            return this.searchNode(root.right,value);
        }
    }

    inOrderTraversal(): number[]{
        const result: number[] = [];
        this.inOrderTraversalNode(this.root, result); 
        return result;
    }

    private inOrderTraversalNode(root: TreeNode<T> | null, result: number[]): void{
        if(root){
            this.inOrderTraversalNode(root.left, result);
            result.push(root.value! as number);
            this.inOrderTraversalNode(root.right, result);
        }
    }
}

const bsts = new BinarySearchTrees<number>();
bsts.insert(10);
bsts.insert(5);
bsts.insert(20);
bsts.insert(3);
bsts.insert(7);

console.log(bsts.inOrderTraversal());

console.log(bsts.search(7));
