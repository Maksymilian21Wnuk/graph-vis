import Graph from "../../../shared/models/graph";
import { Step } from "../../../shared/types/graph_types";



// copied from bfs
export default function connectivity_check(g : Graph) : Step[] {
    let visited = new Set<string>();
    let queue : string[] = [g.get_start_node()];
    let current_node_count = 0;

    while (queue.length > 0){
        let node : string = queue.shift()!;
        if (!visited.has(node)){
            current_node_count += 1;
            g.add_step({nodes: [node], msg: `Visiting node ${node}`});
            visited.add(node);
            let neighbours = g.get_neighbours(node);
            g.add_step({edges : neighbours, source_node: node, msg: `Visiting neighbours of ${node}`})
            for (let neighbour of neighbours){
                queue.push(neighbour);
            }
        }
    }
    if (current_node_count != g.get_node_count()){
        g.add_step({msg : `Graph is not connected, achieves ${current_node_count} of ${g.get_node_count()} nodes`});
    }
    else{
        g.add_step({msg : `Graph is connected`});
    }

    return g.get_steps();
}