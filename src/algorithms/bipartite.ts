import { Steps } from "../shared/types/visualisation_types";
import Graph from "../shared/models/graph/graph";
import { Queue } from "queue-typescript";
import Colors from "../shared/models/colors/colors";


const BLUE = 0;
const RED = 1;

export default function bipartite(g: Graph): Steps {
    let visited = new Set<string>();
    // for color visualization

    let q : Queue<string> = new Queue<string>(g.get_start_node());

    // map color, let 0 be blue and 1 red
    let map_color = new Colors();
    map_color.set_color(g.get_start_node(), BLUE);

    let current_color = BLUE;

    g.add_step({
        additional_name: `Queue:`,
        additional: q, msg: ``, step_idx: 0,
        additional_snd_name: `Visited:`, additional_snd: visited,
        colorize_nodes: map_color
    })


    while (q.length > 0) {
        let node: string = q.dequeue();
        current_color = current_color === BLUE ? RED : BLUE;

        g.add_step({
            step_idx: 1,
            additional: q, additional_name: `Queue:`,
            additional_snd_name: `Visited:`, additional_snd: visited,
            colorize_nodes: map_color,
            current_node: node
        });
        visited.add(node);

        let neighbours = g.get_neighbours(node);

        g.add_step({
            edges: neighbours, source_node: node, step_idx: 2,
            should_color_visited_edge : true,
            additional: q, additional_name: `Queue:`,
            additional_snd_name: `Visited:`, additional_snd: visited,
            colorize_nodes: map_color
        })

        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                q.enqueue(neighbour);
                visited.add(neighbour);
                map_color.set_color(neighbour, current_color);
            }
            else {
                if (map_color.get_color(neighbour) === map_color.get_color(node)) {
                    g.add_step({
                        step_idx: 4,
                        colorize_nodes: map_color,
                        msg: `Graph not bipartite, ${neighbour} and ${node} have same color`
                    });
                    return g.get_steps();
                }
            }
        }
        g.add_step({
            additional: q,
            additional_name: `Queue:`,
            step_idx: 3,
            additional_snd_name: `Visited:`, additional_snd: visited,
            colorize_nodes: map_color
        });


    }
    g.add_step({
        step_idx: 4,
        colorize_nodes: map_color,
        msg: `Graph bipartite`
    })
    return g.get_steps();
}