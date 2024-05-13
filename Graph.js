import Node from './Node.js'

// undirected, unweighted graph (2d grid graph)
export default class Graph{
    #nodes;
    #NRows; // number of rows
    #NCols; // number of columns

    constructor(NRows,NCols=NRows){
        this.#NRows = NRows;
        this.#NCols = NCols;

        this.#nodes = new Array(NRows).fill();
        this.#nodes.forEach((itm,rowIdx,graph) => {
            graph[rowIdx] = new Array(NCols).fill();
            graph[rowIdx].forEach((itm,colIdx,row) => {
                row[colIdx] = new Node([rowIdx,colIdx]);
            });
        });
    }

    get nodes(){
        return this.#nodes;
    }

    get NRows(){
        return this.#NRows;
    }

    get NCols(){
        return this.#NCols;
    }

    isNode([row,col]){
        return row>=0 && row<this.#NRows && col>=0 && col<this.#NCols;
    }

    getNode([row,col]){
        return this.isNode([row,col]) ? this.#nodes[row][col]: null;
    }

    addEdge([row1,col1],[row2,col2]){
        let node1 = this.getNode([row1,col1]);
        if (!node1)
            return false;

        let node2 = this.getNode([row2,col2]);
        if (!node2)
            return false;

        node1.addNeighbor(node2);
        node2.addNeighbor(node1);

        return true;
    }

    printFlat(){
        this.#nodes.flat().forEach(node => {node.print()});
    }
}