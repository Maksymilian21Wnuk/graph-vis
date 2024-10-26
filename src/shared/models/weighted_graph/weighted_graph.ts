import Graph from "../graph/graph";
import { Edge, Node } from "@xyflow/react";
import { Weight } from "../../enumerations/enums";


export default class WeightedGraph extends Graph {
    private weights?: Map<string, Map<string, number>>;

    constructor(start_node_id?: string, nodes?: Node[], edges?: Edge[]) {
        super(start_node_id, nodes, edges);
        this.is_weighted = false;
        this.weights = new Map<string, Map<string, number>>();
        // this is being checked in super constructor
        if (edges) {
            if (this.graph_weighted(edges)) {
                this.is_weighted = true;
                this.weights = this.parse_weights(edges);
            }
        }
    }

    // method for checking if graph is weighted
    private graph_weighted(edges: Edge[]): boolean {
        return edges.filter((e: Edge) => e.label === Weight.UNWEIGHTED).length === 0;
    }

    // method for parsing weights of edges to 
    private parse_weights(edges : Edge[]) : Map<string, Map<string, number>>{
        let weights = new Map<string, Map<string, number>>();
        for (const edge of edges) {
            const [src, dest] = [edge.source, edge.target];
            if (!weights.has(src)){
                weights.set(src, new Map());
            }
            const value : number = parseInt(String(edge.label));
            weights.get(src)?.set(dest, value);
        }
        return weights;
    }

    // gets weight, according to representation of
    // edge id source is lower than dest
    get_weight(source : string, destination : string) : number | undefined{
        if (this.is_weighted){
            return parseInt(source) < parseInt(destination) ? this.weights?.get(source)?.get(destination) : this.weights?.get(destination)?.get(source);
        }
        else{
            return 1;
        }
    }

}