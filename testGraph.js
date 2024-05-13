
import Graph from './Graph.js'

let NRows = 5;

let graph = new Graph(NRows); // NRows === NCols
graph.printFlat();


let nodesIdxToTest = [[3,4],
               [NRows-1,1],[NRows,1],[NRows+1,1],
               [1,NRows-1],[1,NRows],[1,NRows+1],
               [-1,1],[0,1],[1,1],
               [1,-1],[1,0],[1,1],
            ];

console.log('\nTest isNode() and getNode() method of Graph class: -------------------')
for (let nodeIdx of nodesIdxToTest){
    let isNode = graph.isNode(nodeIdx);
    let node = graph.getNode(nodeIdx);
    console.log(`\nNode [${nodeIdx}] is ${!isNode ? 'NOT' : ''} a node of the graph`);
    node ? node.print() : null;
}