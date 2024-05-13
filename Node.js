export default class Node{
    #id;
    #neighbors = [];

    constructor(id){
        this.#id = id;
    }

    get id(){
        return this.#id;
    }

    get neighbors(){
        return this.#neighbors;
    }

    addNeighbor(nodeId){
        if (!this.isNeighborOf(nodeId))
            this.#neighbors.push(nodeId);
    }

    isNeighborOf(nodeId){
        return this.#neighbors.includes(nodeId);
    }

    print(){
        console.log(`${this.toString()} -> {${this.#neighbors.map(itm => itm.toString())}}`);
    }
    toString(){
        return `[${this.#id}]`;
    }
}