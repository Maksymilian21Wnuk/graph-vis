import { Edge, Node } from "@xyflow/react";
import WeightedGraph from "../weighted_graph/weighted_graph";
import { ARROW_SVG_ID } from "../../constants";


export default class DirectedGraph extends WeightedGraph {
    protected is_directed : boolean;

    constructor(nodes?: Node[], edges?: Edge[]) {
        super(nodes, edges);
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

    get_edge_count(): number {
        const divider = this.is_directed ? 1 : 2;
        return Array.from(this.edges.values()).reduce((sum, arr) => sum + arr.length, 0) / divider;
    }

    get_is_directed() : boolean {
        return this.is_directed;
    }

    /**
     * Method transposing graph
     * (reversed order of arrows of given directed graph)
     * if graph is not directed, it does not change graph,
     * else it transposes graph
     */
    transpose() : void {
        if (!this.is_directed) {
            return;
        }
        else {
            let new_edges = new Map<string, string[]>();
            this.nodes.forEach((n : string) => {
                for (let nei of this.get_neighbours(n)) {
                    if (!new_edges.has(nei)) {
                        new_edges.set(nei, [n]);
                    }
                    else {
                        new_edges.set(nei, [...new_edges.get(nei)!, n])
                    }
                }
            }
            )
            this.edges = new_edges;
        }
    }
}