import Graph from "../../../shared/models/graph/graph";
import { Step } from "../../../shared/types/graph_types";
import parse_additional from "./utility/parse_additional";



function dfs_recursive(vertice: string, prev_vertice: string, visited: Set<string>, g: Graph) {
    if (visited.has(vertice)) {
        //g.add_step({additional_name: "Going back", step_idx: 1, source_node : prev_vertice, edges : [vertice]})
        return;
    }
    else {
        visited.add(vertice);
        const edge = g.create_edge(vertice, prev_vertice);
        g.add_step({
            current_node: vertice,
            additional: parse_additional(visited), additional_name: "Visited nodes:",
            edges : [edge.dest], source_node : edge.source, step_idx: 1
        });
        console.log(vertice, prev_vertice);
        for (const v of g.get_neighbours(vertice)) {
            dfs_recursive(v, vertice, visited, g);
        }

    }
}

export default function dfs(g: Graph): Step[] {
    var visited = new Set<string>();
    g.add_step({current_node: g.get_start_node(), step_idx: 0});
    dfs_recursive(g.get_start_node(), "-1", visited, g);
    g.add_step({step_idx: 2});
    return g.get_steps();
}

