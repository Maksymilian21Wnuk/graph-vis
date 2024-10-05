import Graph from "../../../shared/models/graph";
import { Step } from "../../../shared/types/graph_types";

export default function bipartite_check(g : Graph) : Step[] {
    let visited = new Set<string>();
    let queue : string[] = [g.get_start_node()];
    // to change

    while (queue.length > 0){
        // type assertion
        let node : string = queue.shift()!;
        // idea: return node that is currently being visited
        // also may return queue as msg
        
    }


    return g.get_steps();
}