import Graph from './Graph.js'

// undirected, unweighted graph (2d grid graph)
export default class KnightTravails{
    #graph;

    constructor(NRows,NCols=NRows){
        this.#graph = new Graph(NRows,NCols);
        // todo: add edges to the graph based on the possible knight moves 
        this.#initKniteMovesGraph();
        this.#graph.printFlat();
    }

    #initKniteMovesGraph(){
        const moveDisplacements = [[1,2],[1,-2],[-1,2],[-1,-2],
        [2,1],[-2,1],[2,-1],[-2,-1]]; //[row displacememnt,col displacememnt]

        this.#graph.nodes.forEach((row) => {
            row.forEach((node,colIdx,row) => {
                const [rowId,colId] = node.id;
                moveDisplacements.forEach(displ => {
                    // note: .addEdge ignore the edge insertion if one extremal node is out of bound
                    this.#graph.addEdge([rowId,colId], [rowId+displ[0],colId+displ[1]]);
                });
            });
        });
    }

    printMove([row,col]){
        let node = this.#graph.getNode([row,col]);
        if (!node)
            return;

        let str = '';
        for (let r=0; r<this.#graph.NRows; r++){
            for (let c=0; c<this.#graph.NCols; c++){
                if (r===row && c===col){
                    str += 'O ';
                } else if (node.isNeighborOf(this.#graph.getNode([r,c]))) {
                    str += 'X ';
                } else {
                    str += '- ';
                }
            }
            str += '\n';
        }

        console.log(str);
    }

    printAllMoves(){
        console.log('\nRepresentation of all possible moves ----------------------------');
        for (let r=0; r<this.#graph.NRows; r++){
            for (let c=0; c<this.#graph.NCols; c++){
                this.printMove([r,c]);
            }
        }
        console.log('-----------------------------------------------------------------\n')
    }


}