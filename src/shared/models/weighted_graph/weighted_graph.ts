import Graph from "../graph/graph";
import { Edge, Node } from "@xyflow/react";
import { Weight } from "../../enumerations/enums";


export default class WeightedGraph extends Graph {
    // weights of graph
    protected weights?: Map<string, Map<string, number>>;
    // boolean for checking if graph is weighted
    protected is_weighted : boolean;

    constructor(nodes?: Node[], edges?: Edge[]) {
        super(nodes, edges);
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

    /**
     * Get weight of given edge
     * @param source source node id
     * @param destination destination node id
     * @returns weight of edge source-node
     */
    get_weight(source : string, destination : string) : number | undefined{
        // weights case
        if (this.is_weighted){
            const w : number | undefined = this.weights?.get(source)?.get(destination);
            if (w !== undefined) {
                return w;
            }
            else {
                return Infinity;
            }
        }
        // no weights case
        else {
            if (this.edges.get(source)?.includes(destination)) {
                return 1;
            }
            else{
                return 0;
            }
        }
    }
    /**
     * Method for checking if graph is weighted
     * @returns true if weighted else false
     */
    get_is_weighted() {
        return this.is_weighted;
    }

}