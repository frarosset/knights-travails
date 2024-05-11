import Node from './Node.js'

// undirected, unweighted graph
export default class Graph{
    #nodes;
    #N; // number of nodes

    constructor(N){
        this.#nodes = new Array(N).fill([]);
        this.#N = N;
    }

    get nodes(){
        return this.#nodes;
    }

    get N(){
        return this.#N;
    }
}