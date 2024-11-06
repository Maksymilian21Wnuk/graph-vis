import DirectedGraph from "../../../../../../shared/models/directed_graph/directed_graph";






export default function get_matrix_repr(graph : DirectedGraph) : number[][] {
    const len = graph.get_node_count();
    let matrix : number[][] = Array.from({length: len + 1},() => Array(len + 1).fill(0));

    const nodes : string[] = graph.get_nodes();
    for (let x = 0; x < len; x++) {
        matrix[x + 1][0] = parseInt(nodes[x]);
        matrix[0][x + 1] = parseInt(nodes[x]);
    }
    for (let n of nodes) {
        
    }

    return matrix
}