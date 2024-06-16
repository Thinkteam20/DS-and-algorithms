class Graph{
    adjacencyList: Map<string, string[]>;

    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: string, vertex2: string): void{
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1);
    }

    depthFirstTraversal(startVertex: string): string[]{
        const visited: Set<string> = new Set();
        const result: string[] = [];

        const dfs = (vertex: string):void =>{
            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    dfs(neighbor);
                }
            }
        };

        dfs(startVertex);

        return result;
    }
}

const myGrp = new Graph();
myGrp.addVertex('A');
myGrp.addVertex('B');
myGrp.addVertex('C');
myGrp.addVertex('D');
myGrp.addVertex('E');
myGrp.addVertex('F');
myGrp.addVertex('G');
myGrp.addEdge('A','B');
myGrp.addEdge('A','C');
myGrp.addEdge('A','D');
myGrp.addEdge('B','E');
myGrp.addEdge('C','F');
myGrp.addEdge('D','F');
myGrp.addEdge('E','G');

console.log(myGrp.adjacencyList)
console.log('Depth-First Traversal:', myGrp.depthFirstTraversal('A'));