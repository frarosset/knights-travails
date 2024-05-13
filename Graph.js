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

    BFSearch([row1,col1],[row2,col2]){
        let seq = [];
        let visited = new Array(this.#NRows).fill();
        visited.forEach((itm,rowIdx,graph) => {
            graph[rowIdx] = new Array(this.#NCols).fill(false);
        });

        let node1 = this.getNode([row1,col1]);
        if (!node1)
            return seq;

        let node2 = this.getNode([row2,col2]);
        if (!node2)
            return seq;

        if (node1===node2)
            return [node1];

        // initialize the queue
        seq.push(node1);
        let queue = [seq];
        // set the current node as visited
        let [r,c] = node1.id;
        visited[r][c] = true;

        while (queue.length){
            //console.log('\nIN QUEUE:',queue.length)
            // get a possible partial path from the queue (FIFO) and analize its last node
            let seq = queue.shift();
            let node = seq[seq.length-1];

            // set the current node as visited
            let [r,c] = node.id;
            visited[r][c] = true;

            //console.log('CURRENT SEQ: ',seq.map(itm => itm.toString()));
            //node.print();
            // if you found the terminal node, return the sequence
            if (node.isNeighborOf(node2)){
                seq.push(node2);
                //console.log('FOUND: ',seq.map(itm => itm.toString()));
                return seq;
            }
            // else, insert the new potential sequences yet to be analized to the queue
            for (let neigh of node.neighbors){
                // check if not visited
                let [r,c] = neigh.id;
                if(visited[r][c]){
                    //console.log('node [',r,c,'] already visited')
                    continue;
                }

                let newSeq = [...seq];
                newSeq.push(neigh);
                //console.log('ADD TO QUEUE: ',newSeq.map(itm => itm.toString()));
                queue.push(newSeq);
            }
        }
        
        return [];
    }


    printFlat(){
        this.#nodes.flat().forEach(node => {node.print()});
    }
}