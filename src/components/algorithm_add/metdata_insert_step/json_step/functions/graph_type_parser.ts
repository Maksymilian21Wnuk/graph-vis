import { AggregationInterface } from "../../../../../algorithms/algorithms_description/json_interfaces";




export type GraphType = "DirectedGraph" | "Graph" | "WeightedGraph" | "TreeGraph";


/**
 * Assumes that aggregation interface is correct, 
 * that is there are all possible, correct states of algorithm
 * requirements
 * @param agg aggregation interface
 * @returns type of graph
 */
export default function graph_type_parser(agg : AggregationInterface) : GraphType {
    // cascade-style
    if (agg.require_directed) {
        return "DirectedGraph";
    }
    else if (agg.require_tree) {
        return "TreeGraph";
    }
    else if (agg.require_weights) {
        return "WeightedGraph";
    }

    return "Graph";
}