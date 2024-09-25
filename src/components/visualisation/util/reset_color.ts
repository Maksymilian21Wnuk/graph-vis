import { Node } from "@xyflow/react";

export default function reset_color(nodes : Node[]) : Node[]{
    return nodes.map((n : Node) => ({...n, style : {...n.style, background:'white'}}));
}