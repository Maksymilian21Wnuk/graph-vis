import { Step } from "../../../shared/types/graph_types";
import Graph from "../../../shared/models/graph/graph";
import parse_additional from "./utility/parse_additional";


const BLUE = false;
const RED = true;

export default function bipartite(g: Graph): Step[] {
    let visited = new Set<string>();
    g.add_step({ additional_name: `Queue:`, msg: ``, step_idx: 0 })
    let queue: string[] = [g.get_start_node()];
    g.add_step({ current_node: g.get_start_node(), additional_name: `Queue:`, additional: parse_additional(queue), msg: ``, step_idx: 1, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited) })

    // map color, let 0 be blue and 1 red
    let map_color = new Map<string, boolean>();
    map_color.set(g.get_start_node(), BLUE);
    let abort = false;

    while (queue.length > 0 && !abort) {
        let node: string = queue.shift()!;
        const node_color = map_color.get(node);

        // idea: return node that is currently being visited
        // also may return queue as msg

        g.add_step({ nodes: [node], step_idx: 1, additional: parse_additional(queue), additional_name: `Queue:`, current_node: node, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited) });
        visited.add(node);
        let neighbours = g.get_neighbours(node);
        g.add_step({ edges: neighbours, source_node: node, nodes: neighbours, step_idx: 2, additional: parse_additional(queue), additional_name: `Queue:`, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited) })
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                queue.push(neighbour);
                visited.add(neighbour);
                map_color.set(neighbour, !node_color);
            }
            else {
                if (map_color.get(neighbour) === node_color) {
                    console.log("Not bipartite")
                    abort = true;
                    break;
                }
            }
        }

        if (!abort) {
            g.add_step({
                additional: parse_additional(queue),
                additional_name: `Queue:`,
                step_idx: 3,
                additional_snd_name: `Visited:`, additional_snd: parse_additional(visited)
            });
        }


    }
    g.add_step({
        step_idx: 4, additional: parse_additional(queue),
        additional_name: `Queue:`, additional_snd_name: `Visited:`, additional_snd: parse_additional(visited)
    })
    g.add_step({ step_idx: 5 });
    return g.get_steps();
}