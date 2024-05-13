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

    printFlat(){
        this.#nodes.flat().forEach(node => {node.print()});
    }
}