import WeightedGraph from "../../../shared/models/weighted_graph";
import { Step } from "../../../shared/types/graph_types";
import { FibonacciHeap, INode } from "@tyriar/fibonacci-heap";
import parse_additional from "./utility/parse_additional";

export default function dijkstra(g : WeightedGraph) : Step[] {
    let visited = new Set<string>();
    let distances = new Map<string, number>();
    let heap = new FibonacciHeap<number, string>();
    // for storing pointers to INodes
    let iNodes = new Map<string, INode<number, string>>();

    distances.set(g.get_start_node(), 0);
    iNodes.set(g.get_start_node(), heap.insert(0, g.get_start_node()));
    
    // infinity path to rest nodes
    for (let node of g.get_nodes()){
        if (node !== g.get_start_node()){
            distances.set(node, Infinity);
            iNodes.set(node, heap.insert(Infinity, node));
        }
    }
    
    console.log(heap);
    while(!heap.isEmpty()){
        const v : INode<number, string> = heap.extractMinimum()!; 

        if (visited.has(v.value!)){
            continue;
        }

        visited.add(v.value!);
        console.log("Calculating value from: " + v.value);
        const cur_node = v.value!;
        g.add_step({nodes : [cur_node], msg: "Calculating value from: " + cur_node, additional: parse_additional(distances), additional_name: "Distances:" });
        for (const neighbour of g.get_neighbours(v.value!)){
            if (visited.has(neighbour)){
                continue;
            }
            const new_dist = distances.get(v.value!)! + g.get_weight(v.value!, neighbour)!;
            if (new_dist < distances.get(neighbour)!){
                distances.set(neighbour, new_dist);
                heap.decreaseKey(iNodes.get(neighbour)!, new_dist);
            }
        }

    }



    return g.get_steps();
}