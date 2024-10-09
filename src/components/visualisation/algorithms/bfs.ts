import { Step } from "../../../shared/types/graph_types";
import Graph from "../../../shared/models/graph";
import parse_additional from "./utility/parse_additional";


export default function bfs(g: Graph): Step[] {
    let visited = new Set<string>();
    g.add_step({ additional_name: `Queue:`, msg: ``, step_idx: 0 })
    let queue: string[] = [g.get_start_node()];
    g.add_step({ current_node : g.get_start_node(), additional_name: `Queue:`, additional: parse_additional(queue), msg: ``, step_idx: 1 })
    // to change

    while (queue.length > 0) {
        // type assertion
        let node: string = queue.shift()!;
        // idea: return node that is currently being visited
        // also may return queue as msg

        g.add_step({ nodes: [node], step_idx: 1, additional: parse_additional(queue), additional_name: `Queue`, current_node: node });
        visited.add(node);
        let neighbours = g.get_neighbours(node);
        g.add_step({ edges: neighbours, source_node: node, nodes: neighbours, step_idx: 2, additional: parse_additional(queue), additional_name: `Queue` })
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                queue.push(neighbour);
                visited.add(neighbour);
            }
        }
        g.add_step({ additional: parse_additional(queue), additional_name: `Queue:`, step_idx: 3 });


    }
    g.add_step({step_idx: 4});
    return g.get_steps();
}