import { ReturnObj } from "../../../shared/types/graph_types";
import Graph from "../../../shared/models/graph";


export default function* bfs(g : Graph) : Generator<ReturnObj> {
    let visited = new Set<string>();
    let queue : string[] = [g.start_node];
    console.log(g);

    while (queue.length > 0){
        // type assertion
        let node : string = queue.shift()!;
        // idea: return node that is currently being visited
        // also may return queue as msg
        if (!visited.has(node)){
            yield {nodes: [node], msg: `Visiting node ${node}`};
            visited.add(node);
            let neighbours = g.get_neighbours(node);
            for (let neighbour of neighbours){
                queue.push(neighbour);
            }
        }
    }
}