import Graph from "../../../../shared/models/graph/graph";
import { Algorithm } from "../../../../shared/types/visualisation_types";




export default function requirements_guard(chosen_function: Algorithm, graph: Graph) : boolean {
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
        return false;
    }

    else if (chosen_function.require_tree && !graph.get_is_tree()) {
        console.log(graph.get_is_tree())
        alert("Graph must be tree")
        return false;
    }

    else{
        return true;
    }
}