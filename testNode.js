
import Node from './Node.js'

console.log('Generic node of a graph, identified by a number');
let nodeId = 3;
let neighborsId = [1,5,6,2];

let node = new Node(nodeId);
node.print();

neighborsId.forEach(neighborId => {
    let neighborNode = new Node(neighborId);
    node.addNeighbor(neighborNode);
});
node.print();

// Nodes of a 2d grid graph, identified by [row,column]
console.log('\nGeneric node of a 2d grid graph, identified by [row,column]');
nodeId = [3,4];
neighborsId = [[2,4],[5,6],[4,6],[7,9]];

node = new Node(nodeId);
node.print();

neighborsId.forEach(neighborId => {
    let neighborNode = new Node(neighborId);
    node.addNeighbor(neighborNode);
});
node.print();