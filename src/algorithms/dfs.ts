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

export default function dfs(g: DirectedGraph): Steps {
    var visited = new Set<string>();
    g.add_step({ current_node: g.get_start_node(), step_idx: 0 });
    dfs_recursive(g.get_start_node(), "-1", visited, g);
    g.add_step({ step_idx: 3 });
    return g.get_steps();
}





