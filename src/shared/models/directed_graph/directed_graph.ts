import WeightedGraph from "../weighted_graph/weighted_graph";
import { ARROW_SVG_ID } from "../../constants";
import { Edge, Node } from "@xyflow/react";


export default class DirectedGraph extends WeightedGraph {
    private is_directed: boolean;

    constructor(start_node_id?: string, nodes?: Node[], edges?: Edge[]) {
        super(start_node_id, nodes, edges);
        this.is_directed = edges?.every((e : Edge) => e.markerEnd === ARROW_SVG_ID)!;

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

    get_is_directed() : boolean {
        return this.is_directed;
    }
}