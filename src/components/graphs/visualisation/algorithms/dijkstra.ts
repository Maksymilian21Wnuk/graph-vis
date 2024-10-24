import { Steps } from "../../../../shared/types/graph_types";
import { FibonacciHeap, INode } from "@tyriar/fibonacci-heap";
import WeightedGraph from "../../../../shared/models/weighted_graph/weighted_graph";

export default function dijkstra(g: WeightedGraph): Steps {
    let visited = new Set<string>();
    let distances = new Map<string, number>();
    let heap = new FibonacciHeap<number, string>();
    // for storing pointers to INodes
    let iNodes = new Map<string, INode<number, string>>();

    distances.set(g.get_start_node(), 0);
    g.add_step({step_idx: 0, current_node: g.get_start_node()});
    iNodes.set(g.get_start_node(), heap.insert(0, g.get_start_node()));

    // infinity path to rest nodes
    for (let node of g.get_nodes()) {
        if (node !== g.get_start_node()) {
            distances.set(node, Infinity);
            iNodes.set(node, heap.insert(Infinity, node));
        }
    }
    g.add_step({step_idx: 1, current_node: g.get_start_node()});

    while (!heap.isEmpty()) {
        const v: INode<number, string> = heap.extractMinimum()!;

        if (visited.has(v.value!)) {
            continue;
        }

        visited.add(v.value!);
        const neigbours = g.get_neighbours(v.value!);
        g.add_step({
            nodes: neigbours, should_color_visited: true,
            additional: distances, additional_name: "Distances:",
            edges: g.get_neighbours(v.value!)!, source_node: v.value!, step_idx: 4, current_node: v.value!
        });
        for (const neighbour of neigbours) {
            if (visited.has(neighbour)) {
                continue;
            }
            const new_dist = distances.get(v.value!)! + g.get_weight(v.value!, neighbour)!;
            if (new_dist < distances.get(neighbour)!) {
                distances.set(neighbour, new_dist);
                heap.decreaseKey(iNodes.get(neighbour)!, new_dist);
            }
        }
        g.add_step({
            nodes: neigbours, should_color_visited : true,
            additional: distances, additional_name: "Distances:",
            edges: g.get_neighbours(v.value!)!, source_node: v.value!, step_idx: 2, current_node: v.value!
        });

    }

    g.add_step({
        msg: "Algorithm terminated",
        additional: distances, additional_name: "Final distances:",
        step_idx: 5
    });



    return g.get_steps();
}