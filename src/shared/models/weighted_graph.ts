import Graph from "./graph";
import { Edge, Node } from "@xyflow/react";
import { Weight } from "../enumerations/enums";



export default class WeightedGraph extends Graph {
    weighted: boolean;
    weights?: Map<string, Map<string, number>>;

    constructor(start_node_id?: string, nodes?: Node[], edges?: Edge[]) {
        super(start_node_id, nodes, edges);
        this.weighted = false;
        this.weights = new Map<string, Map<string, number>>();
        // this is being checked in super constructor
        if (edges) {
            if (this.graph_weighted(edges)) {
                this.weighted = true;
                for (const edge of edges) {
                    const [src, dest] = [edge.source, edge.target];
                    
                }
            }
        }
    }

    private graph_weighted(edges: Edge[]): boolean {
        return edges.filter((e: Edge) => e.label === Weight.UNWEIGHTED).length === 0;
    }

}