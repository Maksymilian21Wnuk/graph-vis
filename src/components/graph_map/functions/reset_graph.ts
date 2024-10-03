import { Edge, Node } from "@xyflow/react"
import reset_edge_color from "../../utility/functions/reset_edge_color";
import reset_node_color from "../../utility/functions/reset_node_color";

export default function reset_graph(nodes : Node[], edges : Edge[], setNodes : (nodes: Node[]) => void, setEdges : (edges : Edge[]) => void) : void {
    setEdges(reset_edge_color(edges));
    setNodes(reset_node_color(nodes));
}