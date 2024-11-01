import { ARROW_SVG_ID } from "../../constants";
import { Edge, Node } from "@xyflow/react";
import WeightedGraph from "../weighted_graph/weighted_graph";


export default class DirectedGraph extends WeightedGraph {

    constructor(start_node_id?: string, nodes?: Node[], edges?: Edge[]) {
        super(start_node_id, nodes, edges);
        this.is_directed = edges?.every((e : Edge) => e.markerEnd === ARROW_SVG_ID)!;
        console.log("directed")
        // if fulfils the requirements of being directed
        // remove previously created neigbours and create new 
        // neighbour representation 
        if (edges && this.is_directed) {
            this.edges = new Map<string, string[]>();
            for (const edge of edges) {
                if (this.edges.has(edge.source)) {
                    this.edges.set(edge.source, [...this.edges.get(edge.source)!, edge.target]);
                }
                else {
                    this.edges.set(edge.source, [edge.target]);
                }
            }
    
        }
    }

    get_edge_count(): number {
        const divider = this.is_directed ? 1 : 2;
        return Array.from(this.edges.values()).reduce((sum, arr) => sum + arr.length, 0) / divider;
    }
}