import { Steps } from "../shared/types/visualisation_types";
import { FibonacciHeap, INode } from "@tyriar/fibonacci-heap";
import WeightedGraph from "../shared/models/weighted_graph/weighted_graph";

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
    g.add_step({step_idx: 1, current_node: g.get_start_node(), additional: distances, additional_name: "Distances"});


    while (!heap.isEmpty()) {
        const v: INode<number, string> = heap.extractMinimum()!;

        g.add_step({
            nodes: g.get_neighbours(v.value!), should_color_visited : true,
            additional: distances, additional_name: "Distances:",
            dest_nodes: g.get_neighbours(v.value!), source_node: v.value!, step_idx: 2, current_node: v.value
        });

        if (visited.has(v.value!)) {
            continue;
        }


        visited.add(v.value!);
        const neigbours = g.get_neighbours(v.value!);

        for (const neighbour of neigbours) {
            if (visited.has(neighbour)) {
                continue;
            }

            const new_dist = distances.get(v.value!)! + g.get_weight(v.value!, neighbour)!;
            const old_dist = distances.get(neighbour)!;

            if (new_dist < old_dist) {
                distances.set(neighbour, new_dist);
                heap.decreaseKey(iNodes.get(neighbour)!, new_dist);

                g.add_step({
                    nodes: [neighbour], should_color_visited: true, should_color_visited_edge: true,
                    additional: distances, additional_name: "Distances:",
                    dest_nodes: [neighbour], source_node: v.value!, step_idx: 3, current_node: v.value!,
                    additional_snd_name: `Updating ${neighbour} :`,
                    // example of explicitly parsing additionals
                    additional_snd_parsed: [{id: `Old:`, value: `${old_dist === Infinity ? "∞" : old_dist}`}, {id: `New: `, value: `${new_dist}`}]
                });
            }
        }


        g.add_step({
            additional: distances, additional_name: "Distances:",
            step_idx: 4, current_node: heap.findMinimum()?.value!,
            additional_snd: visited, additional_snd_name: `Visited: `
        });


    }

    g.add_step({
        msg: "Algorithm terminated",
        additional: distances, additional_name: "Final distances:",
        step_idx: 5
    });



    return g.get_steps();
}