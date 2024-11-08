import DirectedGraph from "../shared/models/directed_graph/directed_graph";
import { Steps } from "../shared/types/visualisation_types";


function dfs_recursive(vertice: string, parent: string, visited: Set<string>, g: DirectedGraph) {
    if (visited.has(vertice)) {
        return;
    }
    else {
        visited.add(vertice);
        g.add_step({
            current_node: vertice,
            additional: visited, additional_name: "Visited nodes:",
            edges: [vertice], source_node: parent, step_idx: 1
        });
        for (const nei of g.get_neighbours(vertice)) {
            if (nei !== parent) {
                dfs_recursive(nei, vertice, visited, g);
                g.add_step({
                    current_node: vertice,
                    additional: visited, additional_name: "Visited nodes:", step_idx: 2
                });
            }
        }
 
    }
}

// is this required? maybe some other way
function dfs_duplicate_removal(steps : Steps) : Steps {
    let s : Steps = [steps[0]];
    for (let i = 1; i < steps.length - 1; i++) {
        if (steps[i].current_node === steps[i + 1].current_node) {
            continue
        }
        s.push(steps[i]);
    }

    return s;
}


export default function dfs(g: DirectedGraph): Steps {
    var visited = new Set<string>();
    g.add_step({ current_node: g.get_start_node(), step_idx: 0 });
    dfs_recursive(g.get_start_node(), "-1", visited, g);
    g.add_step({ step_idx: 3 });    
    return dfs_duplicate_removal(g.get_steps());
}





