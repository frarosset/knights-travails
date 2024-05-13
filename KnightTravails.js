import Graph from './Graph.js'

// undirected, unweighted graph (2d grid graph)
export default class KnightTravails{
    #graph;

    constructor(NRows,NCols=NRows){
        this.#graph = new Graph(NRows,NCols);
        // todo: add edges to the graph based on the possible knight moves 
        this.#initKniteMovesGraph();
        //this.#graph.printFlat();
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

    knightMoves([row1,col1],[row2,col2]){
        console.log(`\nGoing from [${row1},${col1}] to [${row2},${col2}]:`);
        let seq = this.#graph.BFSearch([row1,col1],[row2,col2]);
        if (seq.length>0){
            console.log(`=> You made it in ${seq.length-1} move${seq.length>2 ? 's' : ''}!  Here's your path:`);
            console.log(seq.map(itm => itm.toString()));
            this.printPath(seq);
        } else
            console.log(`=> No path exists!`);
        return seq;
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

    printPath(path){
        let data = new Array(this.#graph.NRows).fill();
        data.forEach((row,rowIdx,data) => {
            data[rowIdx] = new Array(this.#graph.NCols).fill('- ');
        });

        for (let i=0; i<path.length; i++){
            const node = path[i];
            const [r,c] = node.id;
            data[r][c] = i+' ';
        }

        data.forEach((row,rowIdx,data) => {
            data[rowIdx].unshift(`${rowIdx} | `);
            data[rowIdx].push(`\n`);
        });

        let header1 = new Array(this.#graph.NRows*2).fill('_');
        header1.unshift('   ');
        header1.push('\n');
        data.unshift(header1);

        let header2 = new Array(this.#graph.NRows).fill();
        header2.forEach((row,rowIdx,data) => {
            data[rowIdx] = `${rowIdx} `;
        });
        header2.unshift('    ');
        header2.push('\n');
        data.unshift(header2);

        console.log(`\n${data.flat().join('')}`);
    }

}