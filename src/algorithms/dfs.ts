import Graph from "../shared/models/graph/graph";
import { Steps } from "../shared/types/visualisation_types";


export default function dfs(g: Graph): Steps {
    let visited = new Set<string>();
    let stack : string[] = [];
    const start_node = g.get_start_node();
    
    stack.push(start_node);
    visited.add(start_node);

    g.add_step({step_idx: 0,
        additional: stack, additional_name: `Stack:`,
        additional_snd: visited, additional_snd_name: `Visited:`,
        current_node: start_node
     })

    while (stack.length !== 0) {
        const current = stack.pop()!;
        g.add_step({ step_idx: 1,
            additional: stack, additional_name: `Stack:`,
            additional_snd: visited, additional_snd_name: `Visited:`,
            current_node: current
        })

        for (const neighbour of g.get_neighbours(current)) {
            if (!visited.has(neighbour)){
                stack.push(neighbour);
                visited.add(neighbour);
                g.add_step({ step_idx: 2,
                    additional: stack, additional_name: `Stack:`,
                    additional_snd: visited, additional_snd_name: `Visited:`,
                    current_node: current,
                    nodes: [neighbour],
                    edges: [neighbour],
                    source_node: current
                })
            }
        }
        g.add_step({ step_idx: 3,
            additional: stack, additional_name: `Stack:`,
            additional_snd: visited, additional_snd_name: `Visited:`
        })
    }

    g.add_step({
        step_idx: 4
    })

    return g.get_steps();
}





