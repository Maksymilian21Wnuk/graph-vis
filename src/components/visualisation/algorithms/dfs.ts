import Graph from "../../../shared/models/graph";
import { Step } from "../../../shared/types/graph_types";
import parse_additional from "./utility/parse_additional";


interface Edge {
    source : string;
    dest : string;
}

function parse_edge(s1 : string, s2 : string) : Edge {
    return parseInt(s1) > parseInt(s2) ? {source : s1, dest : s2} : {source : s2, dest : s1};
}


function dfs_recursive(vertice: string, prev_vertice: string, visited: Set<string>, g: Graph) {
    if (visited.has(vertice)) {
        return;
    }
    else {
        visited.add(vertice);
        const edge = parse_edge(vertice, prev_vertice);
        g.add_step({
            nodes: [vertice], msg: `Visiting node ${vertice}`,
            additional: parse_additional(visited), additional_name: "Visited nodes:",
            edges : [edge.dest], source_node : edge.source
        });
        console.log(vertice, prev_vertice);
        for (const v of g.get_neighbours(vertice)) {
            dfs_recursive(v, vertice, visited, g);
        }

    }
}

export default function dfs(g: Graph): Step[] {
    var visited = new Set<string>();
    dfs_recursive(g.get_start_node(), "-1", visited, g);
    return g.get_steps();
}

