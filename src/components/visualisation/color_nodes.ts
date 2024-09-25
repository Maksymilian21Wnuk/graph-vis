import { NodeColor } from "../../shared/enumerations/enums";
import { ReturnObj } from "../../shared/types/graph_types"
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
export default function colorNodes(gen_obj : IteratorResult<ReturnObj, any>, nodes : Node[]) : Node[]{
    nodes = change_to_visited(nodes, NodeColor.VISITED);
    // the property nodes gives nodes to change color
    let nodes_to_change : string[] = gen_obj.value.nodes;
    for (let id of nodes_to_change) {
        nodes = change_given_id(nodes, id, NodeColor.CURRENT);
    }
    return nodes;
}