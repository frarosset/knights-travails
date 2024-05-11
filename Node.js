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
        this.#neighbors.push(nodeId);
    }


    print(){
        console.log(`[${this.#id}] -> {${this.#neighbors.map(itm => '['+itm+']')}}`);
    }
}