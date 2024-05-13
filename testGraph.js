
import Graph from './Graph.js'

let NRows = 5;

let graph = new Graph(NRows); // NRows === NCols
graph.printFlat();


let nodesToTest = [[3,4],
               [NRows-1,1],[NRows,1],[NRows+1,1],
               [1,NRows-1],[1,NRows],[1,NRows+1],
               [-1,1],[0,1],[1,1],
               [1,-1],[1,0],[1,1],
            ];

console.log('\nTest isNode() method of Graph class:')
for (let node of nodesToTest){
    let isNode = graph.isNode(node);
    console.log(`Node [${node}] is ${!isNode ? 'NOT' : ''} a node of the graph`);
}