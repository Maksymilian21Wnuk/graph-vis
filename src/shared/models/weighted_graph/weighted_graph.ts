import Graph from "../graph/graph";
import { Edge, Node } from "@xyflow/react";
import { Weight } from "../../enumerations/enums";


export default class WeightedGraph extends Graph {
    protected weights?: Map<string, Map<string, number>>;

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
        return !edges.some((e: Edge) => e.label === Weight.UNWEIGHTED);
    }

    // method for parsing weights of edges to 
    private parse_weights(edges : Edge[]) : Map<string, Map<string, number>>{
        let weights = new Map<string, Map<string, number>>();
        for (const edge of edges) {
            const [src, dest] = [edge.source, edge.target];
            if (!weights.has(src)){
                weights.set(src, new Map());
            }
            if (!weights.has(dest)) {
                weights.set(dest, new Map())
            }
            const value : number = parseInt(String(edge.label));
            weights.get(src)?.set(dest, value);
            weights.get(dest)?.set(src, value);
        }
        return weights;
    }

    // gets weight, according to representation of
    // edge id source is lower than dest
    get_weight(source : string, destination : string) : number | undefined{
        if (this.is_weighted){
            return this.weights?.get(source)?.get(destination);
        }
        else{
            return 1;
        }
    }

}