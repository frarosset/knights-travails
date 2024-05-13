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
                    this.#graph.addEdge([rowId,colId], [rowId+displ[0],colId+displ[1]]);
                });
            });
        });
    }

    printMoves


}