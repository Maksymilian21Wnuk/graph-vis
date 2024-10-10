import { ARROW_SVG_ID } from "../constants";
import WeightedGraph from "./weighted_graph"
import { Edge, Node } from "@xyflow/react";


export default class DirectedGraph extends WeightedGraph {
    private is_directed: boolean;

    constructor(start_node_id?: string, nodes?: Node[], edges?: Edge[]) {
        super(start_node_id, nodes);
        this.edges = new Map<string, string[]>();
        this.is_directed = edges?.every((e : Edge) => e.markerEnd === ARROW_SVG_ID)!;

        if (edges && this.is_directed) {
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
}