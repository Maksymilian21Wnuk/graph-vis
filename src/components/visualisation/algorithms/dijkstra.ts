import WeightedGraph from "../../../shared/models/weighted_graph";
import { Step } from "../../../shared/types/graph_types";
import { FibonacciHeap } from "@tyriar/fibonacci-heap";

interface Distance{
    id : string,
    dist : number
}

export default function dijkstra(g : WeightedGraph) : Step[] {
    let visited = new Set<string>();
    let distances = new Map<string, number>();
    let prio_queue = new Heap<Distance>((d1 : Distance, d2 : Distance) => d1.dist > d2.dist ? 1 : -1);

    prio_queue.init([{id : "1", dist: 1}]);

    // infinity path to rest nodes
    for (let node of g.get_nodes()){
        distances.set(node, Infinity);
        prio_queue.add({id : node, dist : Infinity});
    }
    console.log(prio_queue);
    // start node dist is 0
    distances.set(g.get_start_node(), 0);

    while(!prio_queue.isEmpty()){
        const v = prio_queue.peek()!.id; 
        for (const neighbour of g.get_neighbours(v)){
            console.log(neighbour);
            const v_dist = distances.get(v)! + g.get_weight(v, neighbour)!;
            if (v_dist < distances.get(neighbour)!){
                distances.set(neighbour, v_dist);

            }
        }

    }


    return g.get_steps();
}