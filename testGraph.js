
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

console.log('\nTest isNode() and getNode() method of Graph class: ------')
for (let nodeIdx of nodesIdxToTest){
    let isNode = graph.isNode(nodeIdx);
    let node = graph.getNode(nodeIdx);
    console.log(`\nNode [${nodeIdx}] is ${!isNode ? 'NOT' : ''} a node of the graph`);
    node ? node.print() : null;
}

let arcsToTest = [[[1,2],[3,4]],
                  [[1,2],[2,2]],
                  [[5,3],[1,3]],
                  [[3,1],[1,2]]];

console.log('\nTest addEdge() method of Graph class: -------------------')
for (let arc of arcsToTest){
    console.log(`\nAdding arc [${arc[0]}] --- [${arc[1]}]`);
    if(graph.addEdge(...arc))
        graph.printFlat();
    else
        console.log('Cannot add this edge! (at least one extermal node is not in the graph)');
}