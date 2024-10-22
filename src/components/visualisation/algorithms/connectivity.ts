import Graph from "../../../shared/models/graph/graph";
import { Steps } from "../../../shared/types/graph_types";



// copied from bfs
export default function connectivity_check(g : Graph) : Steps {
    let current_node_count = 0;

    let visited = new Set<string>();
    g.add_step({ additional_name: `Queue:`, msg: ``, step_idx: 0 })
    let queue: string[] = [g.get_start_node()];
    g.add_step({ current_node : g.get_start_node(), additional_name: `Queue:`, additional: queue, msg: ``, step_idx: 1 })
    // to change

    while (queue.length > 0) {
        // type assertion
        let node: string = queue.shift()!;
        // idea: return node that is currently being visited
        // also may return queue as msg

        g.add_step({ nodes: [node], step_idx: 1, additional: queue, additional_name: `Queue`, current_node: node });
        visited.add(node);
        let neighbours = g.get_neighbours(node);
        g.add_step({ edges: neighbours, source_node: node, nodes: neighbours, step_idx: 2, additional: queue, additional_name: `Queue` })
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                queue.push(neighbour);
                visited.add(neighbour);
            }
        }
        g.add_step({ additional: queue, additional_name: `Queue:`, step_idx: 3 });


    }
    if (current_node_count != g.get_node_count()){
        g.add_step({msg : `Graph is not connected, achieves ${current_node_count} of ${g.get_node_count()} nodes`, step_idx : 5});
    }
    else{
        g.add_step({msg : `Graph is connected`, step_idx : 5});
    }

    return g.get_steps();
}