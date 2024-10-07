
// randomize graph edges given probability

import { Edge, Node } from "@xyflow/react";
import { nodeDefaultStyle } from "../../../../../shared/constants";

interface Graph {
    nodes : Node[];
    edges : Edge[];
}


export default function randomizer(probability : number, node_count : number) : Graph {
    let nodes : Node[] = [];
    let edges : Edge[] = [];
    let defaultNode : Node = { id: "0", position: { x: 0, y: 0 }, data: {label : ""}, ...nodeDefaultStyle };

    for (const x of Array.from(Array(node_count + 1).keys()).slice(1)){
        nodes.push({...defaultNode, id: String(x), data: {label: String(x)}});
    }
    console.log(nodes);

}