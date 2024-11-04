import DirectedGraph from "../../../../shared/models/directed_graph/directed_graph";
import Graph from "../../../../shared/models/graph/graph";
import TreeGraph from "../../../../shared/models/tree_graph/tree_graph";
import WeightedGraph from "../../../../shared/models/weighted_graph/weighted_graph";
import { Guard } from "../../../../shared/types/visualisation_types";




export default function requirements_guard(guard: Guard, graph: Graph | TreeGraph | WeightedGraph | DirectedGraph) : boolean {
    // if requires weighted but graph is not weighted
    if (guard.weighted && !graph.get_is_weighted()) {
        alert("Graph must be weighted");
        return false;
    }

    else if (guard.directed && !graph.get_is_directed()) {
        alert("Graph must be directed");
        return false;
    }

    else if(guard.undirected && graph.get_is_directed()){
        alert("Graph must not be directed")
        return false;
    }

    else if (guard.tree && !graph.get_is_tree()) {
        alert("Graph must be tree")
        return false;
    }

    else{
        return true;
    }
}