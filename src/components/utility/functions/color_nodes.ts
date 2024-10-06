import { NodeColor } from "../../../shared/enumerations/enums";
import { Step } from "../../../shared/types/graph_types"
import { Node } from "@xyflow/react"


// spec: given id of nodes color only those nodes
function change_given_id(nodes : Node[], id : string, color : string) : Node[]{
    return nodes.map((n : Node) => n.id === id ? {...n, style : {...n.style, background: color}} : n);
}

// function for making previously visited yellow
function change_to_visited(nodes : Node[], color : string) : Node[] {
    return nodes.map((n : Node) => n.style?.background === NodeColor.CURRENT ? {...n, style : {...n.style, background: color}} : n);
}

// simple for, wanted to make code more readable
export default function colorNodes(step : Step, nodes : Node[]) : Node[]{
    nodes = change_to_visited(nodes, NodeColor.VISITED);
    // the property nodes gives nodes to change color
    let nodes_to_change : string[] = step.nodes!;
    // if no nodes to change, return previous set of nodes
    if (!nodes_to_change){
        return nodes;
    }
    for (let id of nodes_to_change) {
        nodes = change_given_id(nodes, id, step.color ? step.color : NodeColor.CURRENT);
    }
    return nodes;
}