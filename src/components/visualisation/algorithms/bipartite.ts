import { Step } from "../../../shared/types/graph_types";
import Graph from "../../../shared/models/graph/graph";
import parse_additional from "./utility/parse_additional";
import colorize_binary from "./utility/colorize_binary";
import { Queue } from "queue-typescript";

const BLUE = false;


export default function bipartite(g: Graph): Step[] {
    let visited = new Set<string>();
    // for color visualization

    let q : Queue<string> = new Queue<string>(g.get_start_node());

    // map color, let 0 be blue and 1 red
    let map_color = new Map<string, boolean>();
    map_color.set(g.get_start_node(), BLUE);

    g.add_step({
        additional_name: `Queue:`,
        additional: parse_additional(q), msg: ``, step_idx: 0,
        additional_snd_name: `Visited:`, additional_snd: parse_additional(visited),
        colorize_nodes: colorize_binary(map_color)
    })


    while (q.length > 0) {
        let node: string = q.dequeue();
        const node_color = map_color.get(node);

        // idea: return node that is currently being visited
        // also may return queue as msg

        g.add_step({
            step_idx: 1,
            additional: parse_additional(q), additional_name: `Queue:`,
            additional_snd_name: `Visited:`, additional_snd: parse_additional(visited),
            colorize_nodes: colorize_binary(map_color),
            current_node: node
        });
        visited.add(node);

        let neighbours = g.get_neighbours(node);

        g.add_step({
            edges: neighbours, source_node: node, step_idx: 2,
            additional: parse_additional(q), additional_name: `Queue:`,
            additional_snd_name: `Visited:`, additional_snd: parse_additional(visited),
            colorize_nodes: colorize_binary(map_color)
        })

        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                q.enqueue(neighbour);
                visited.add(neighbour);
                map_color.set(neighbour, !node_color);
            }
            else {
                if (map_color.get(neighbour) === node_color) {
                    g.add_step({
                        step_idx: 4,
                        colorize_nodes: colorize_binary(map_color),
                        msg: `Graph not bipartite, ${neighbour} and ${node} have same color`
                    });
                    return g.get_steps();
                }
            }
        }
        g.add_step({
            additional: parse_additional(q),
            additional_name: `Queue:`,
            step_idx: 3,
            additional_snd_name: `Visited:`, additional_snd: parse_additional(visited),
            colorize_nodes: colorize_binary(map_color)
        });


    }
    g.add_step({
        step_idx: 4,
        colorize_nodes: colorize_binary(map_color),
        msg: `Graph bipartite`
    })
    return g.get_steps();
}