import Graph from "../../../shared/models/graph";
import { Step } from "../../../shared/types/graph_types";
// use node !!! not stirngs in future

export default function dfs(g : Graph) : Step[] {
    let visited = new Set<string>();
    let stack : string[] = [g.start_node];
    let steps : Step[] = [];

    while (stack.length > 0){
        // type assertion
        let node : string = stack.pop()!;
        // idea: return node that is currently being visited
        // also may return stack as msg
        if (!visited.has(node)){
            steps.push({nodes: [node], msg: `Visiting node ${node}`});
            visited.add(node);
            let neighbours = g.get_neighbours(node);
            for (let neighbour of neighbours){
                stack.push(neighbour);
            }
        }
    }
    return steps
}