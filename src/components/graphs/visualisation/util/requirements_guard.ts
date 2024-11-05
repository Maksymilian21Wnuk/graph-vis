import DirectedGraph from "../../../../shared/models/directed_graph/directed_graph";
import Graph from "../../../../shared/models/graph/graph";
import TreeGraph from "../../../../shared/models/tree_graph/tree_graph";
import WeightedGraph from "../../../../shared/models/weighted_graph/weighted_graph";
import { Guard } from "../../../../shared/types/visualisation_types";


function weight_check(guard: Guard, g: TreeGraph | WeightedGraph | DirectedGraph) {
    if (guard.weighted && !g.get_is_weighted()) {
        alert("Graph must be weighted");
        return false;
    }
    else{
        return true
    }
}

export default function requirements_guard(guard: Guard, graph: Graph | TreeGraph | WeightedGraph | DirectedGraph, directed : boolean): boolean {
    console.log(guard)
    if (graph instanceof TreeGraph) {
        if (guard.tree && !graph.get_is_tree()) {
            alert("Graph must be tree")
            return false;
        }
        else if (directed){
            alert("Graph must not be directed");
            return false;
        }
        else {
            return weight_check(guard, graph);
        }
    }

    else if (graph instanceof DirectedGraph) {
        if (guard.undirected && graph.get_is_directed()) {
            alert("Graph must not be directed")
            return false;
        }
        else if (guard.directed && !graph.get_is_directed()) {
            alert("Graph must be directed");
            return false;
        }
        else{
            return weight_check(guard, graph);
        }
    }

    else if (graph instanceof WeightedGraph) {
        if (directed){
            alert("Graph cannot be directed");
            return false;
        }
        return weight_check(guard, graph);
    }
    else if (graph instanceof Graph) {
        if (directed){
            alert("Graph cannot be directed");
            return false;
        }
    }
    return true;
}