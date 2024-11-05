import Colors from "../shared/models/colors/colors";
import DirectedGraph from "../shared/models/directed_graph/directed_graph";
import { Steps } from "../shared/types/visualisation_types";


export default function kosaraju(g: DirectedGraph): Steps {
    const start_node = g.get_start_node();
    let stack: string[] = [start_node];
    let visited = new Set<string>();
    let colors = new Colors();



    let kosaraju_stack: string[] = [start_node];

    
    visited.add(start_node);

    g.add_step({step_idx: 0,
        additional: stack, additional_name: `Stack:`,
        additional_snd: visited, additional_snd_name: `Visited:`,
        current_node: start_node
     })

    while (stack.length !== 0) {
        let cur_node = stack.pop();

        g.add_step({ step_idx: 1,
            additional: stack, additional_name: `Stack:`,
            additional_snd: visited, additional_snd_name: `Visited:`,
            current_node: cur_node
        })

        for (let nei of g.get_neighbours(cur_node!)) {
            if (!visited.has(nei)) {
                visited.add(nei);
                stack.push(nei);
                kosaraju_stack.push(nei);
                g.add_step({ step_idx: 2,
                    additional: stack, additional_name: `Stack:`,
                    additional_snd: visited, additional_snd_name: `Visited:`,
                    current_node: cur_node,
                    nodes: [nei],
                    edges: [nei],
                    source_node: cur_node})
                    
            }
        }
    }

    g.add_step({step_idx: 3, additional: kosaraju_stack, additional_name: `Second stack:`, clear: true})


    g.add_step({step_idx: 4, additional: kosaraju_stack, additional_name: `Second stack:`})


    return g.get_steps();
}