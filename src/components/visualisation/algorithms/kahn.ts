import DirectedGraph from "../../../shared/models/directed_graph/directed_graph";
import { Step } from "../../../shared/types/graph_types";
import parse_additional from "./utility/parse_additional";

function indegree_counter(g: DirectedGraph): Map<string, number> {
    let indegrees = new Map<string, number>();

    // at beginning all have indegree 0
    g.get_nodes().forEach((node) => {
        indegrees.set(node, 0);
    })

    // increment by 1 to neigbour
    g.get_edges().forEach((neigbours, _vertice) => {
        for (const nei of neigbours) {
            indegrees.set(nei, indegrees.get(nei)! + 1)
        }
    })

    return indegrees;
}

export default function topological_sort(g: DirectedGraph): Step[] {
    let indegrees = indegree_counter(g);
    let queue: string[] = [];
    let result: string[] = [];

    g.add_step({
        step_idx: 0, additional_name: `Result`, additional_snd_name: `Indegrees: `,
        additional: parse_additional(result), additional_snd: parse_additional(indegrees)
    })

    // enqueue vertices with 0 indegree
    indegrees.forEach((val, vertice) => {
        val === 0 ? queue.push(vertice) : null
    })

    g.add_step({
        step_idx: 1, additional_name: `Result`, additional_snd_name: `Indegrees: `,
        additional: parse_additional(result), additional_snd: parse_additional(indegrees)
    })

    while (queue.length) {
        g.add_step({
            step_idx: 4, additional_name: `Result`, additional_snd_name: `Indegrees updated: `,
            additional: parse_additional(result), additional_snd: parse_additional(indegrees),
            current_node: queue[0]
        })
        const vertice = queue.shift()!;
        // for visualisation's sake,
        // we dont want to display 0' nodes
        indegrees.delete(vertice);

        g.add_step({
            step_idx: 2, additional_name: `Result`, additional_snd_name: `Indegrees updated: `,
            additional: parse_additional(result), additional_snd: parse_additional(indegrees),
            current_node: vertice
        })

        result.push(vertice);
        const neighbours = g.get_neighbours(vertice);
        for (const nei of neighbours) {
            const new_val = indegrees.get(nei)! - 1;
            indegrees.set(nei, new_val);
            if (new_val === 0) {
                queue.push(nei);
            }
        }

        g.add_step({
            step_idx: 3, additional_name: `Result`, additional_snd_name: `Indegrees updated: `,
            additional: parse_additional(result), additional_snd: parse_additional(indegrees),
            edge_removal: true, source_node: vertice, edges: neighbours
        })

    }

    g.add_step({
        step_idx: 5, additional_name: `Result`, additional_snd_name: `Indegrees: `,
        additional: parse_additional(result), additional_snd: parse_additional(indegrees)
    })


    return g.get_steps();
}