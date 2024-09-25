import { ReturnObj } from "../../shared/types/graph_types"
import { Node } from "@xyflow/react"
// spec: given id of nodes color only those nodes


function change_given_id(nodes : Node[], id : string){
    for (let n of nodes){
        console.log(n.id)
        console.log(n.id == id.id);
    }
    return nodes.map((n : Node) => n.id === id.id ? {...n, style : {...n.style, background:'red'}} : n);
}

export default function colorNodes(gen_obj : IteratorResult<ReturnObj, any>, nodes : Node[]) : Node[]{
    let nodes_to_change : string = gen_obj.value.nodes[0];
    console.log(nodes_to_change);
    return change_given_id(nodes, nodes_to_change);
}