import Graph from "../../../shared/models/graph/graph";
import { Step } from "../../../shared/types/graph_types";
import parse_additional from "./utility/parse_additional";
import { Queue } from "queue-typescript";


export default function bfs(g: Graph): Step[] {
    let visited = new Set<string>();
    g.add_step({ additional_name: `Queue:`, msg: ``, step_idx: 0 })
    let queue : Queue<string> = new Queue<string>(g.get_start_node());
    g.add_step({ current_node: g.get_start_node(), additional_name: `Queue:`, additional: parse_additional(queue), msg: ``, step_idx: 1, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited) })


    while (queue.length > 0) {
        let node: string = queue.dequeue();
        g.add_step({ nodes: [node], step_idx: 1, additional: parse_additional(queue), additional_name: `Queue:`, current_node: node, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited) });
        
        visited.add(node);
        
        let neighbours = g.get_neighbours(node);

        g.add_step({ edges: neighbours, source_node: node, nodes: neighbours, step_idx: 2, additional: parse_additional(queue), additional_name: `Queue:`, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited) })
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                queue.enqueue(neighbour);
                visited.add(neighbour);
            }
        }
        g.add_step({
            additional: parse_additional(queue),
            additional_name: `Queue:`,
            step_idx: 3,
            additional_snd_name: `Visited:`, additional_snd: parse_additional(visited)
        });


    }
    g.add_step({
        step_idx: 4, additional: parse_additional(queue),
        additional_name: `Queue:`, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited)
    })
    g.add_step({ step_idx: 5 });
    return g.get_steps();
}