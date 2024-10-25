import DirectedGraph from "../../../../shared/models/directed_graph/directed_graph";
import { Algorithm } from "../../../../shared/types/visualisation_types";




export default function requirements_guard(chosen_function: Algorithm, graph: DirectedGraph) : boolean {
    // if requires weighted but graph is not weighted
    if (chosen_function.require_weights && !graph.get_is_weighted()) {
        alert("Graph must be weighted");
        return false;
    }

    else if (chosen_function.require_directed && !graph.get_is_directed()) {
        alert("Graph must be directed");
        return false;
    }

    else if(chosen_function.require_non_directed && graph.get_is_directed()){
        alert("Graph must not be directed")
        return false
    }
    else{
        return true;
    }
}