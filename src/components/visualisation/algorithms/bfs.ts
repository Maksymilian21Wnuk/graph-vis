import { Step } from "../../../shared/types/graph_types";
import Graph from "../../../shared/models/graph";
import parse_additional from "./utility/parse_additional";


export default function bfs(g : Graph) : Step[] {
    let visited = new Set<string>();
    let queue : string[] = [g.get_start_node()];
    // to change

    while (queue.length > 0){
        // type assertion
        let node : string = queue.shift()!;
        // idea: return node that is currently being visited
        // also may return queue as msg
        if (!visited.has(node)){
            g.add_step({nodes: [node], msg: `Visiting node ${node}`, additional: parse_additional(visited), additional_name: "Visited List: "});
            visited.add(node);
            let neighbours = g.get_neighbours(node);
            g.add_step({edges : neighbours, source_node: node, msg: `Visiting neighbours of ${node}`, additional: parse_additional(visited), additional_name: "Visited List: "})
            for (let neighbour of neighbours){
                queue.push(neighbour);
            }
        }
    }

    return g.get_steps();
}