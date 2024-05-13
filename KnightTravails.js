import Node from './Graph.js'

// undirected, unweighted graph (2d grid graph)
export default class KnightTravails{
    #graph;

    constructor(NRows,NCols=NRows){
        this.#graph = new Graph(NRows,NCols);
        // todo: add edges to the graph based on the possible knight moves 
    }



}