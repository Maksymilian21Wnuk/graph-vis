import { edgeDefaultStyle, nodeDefaultStyle } from "../../../../shared/constants";
import { BinaryNode } from "../../models/binary_node";
import calculate_position from "./calculate_position/calculate_pos";
import { DIRECTION } from "../../../../shared/enumerations/enums";
import { Edge } from "@xyflow/react";


interface NewTree {
    nodes : BinaryNode[];
    edges : Edge[];
}


export default function position_node(nodes : BinaryNode[], edges : Edge[], value : number) : NewTree {
    const id = String(value);
    if (nodes.length === 0){
        nodes = [{id:id, 
            position: {x: 350, y: 0}, 
            data: {label:id}, 
            value: value, 
            style: nodeDefaultStyle.style,
            parent: undefined,
            left: undefined,
            right: undefined    
        },
        ];
    }
    else{
        let current : BinaryNode | undefined = nodes[0];
        let prev : BinaryNode | undefined = undefined;
        let direction : DIRECTION = DIRECTION.LEFT;
        let depth : number = -1;
        while (current !== undefined){
            prev = current;
            if (current.value > value) {
                current = current.left;
                direction = DIRECTION.LEFT;
            }
            else{
                current = current.right;
                direction = DIRECTION.RIGHT;
            }
            depth++;
        }
        const new_node = {id:id, 
            position: calculate_position(prev?.position!, direction, depth),
            data: {label:id}, 
            value: value, 
            style: nodeDefaultStyle.style,
            parent: prev,
            left: undefined,
            right: undefined    
        }
        if (prev?.value! > value){
            prev!.left = new_node;
        }
        else{
            prev!.right = new_node;
        }

        const prev_id = prev!.id;
        const new_id = prev!.value > value ? `${id}-${prev_id}` : `${prev_id}-${id}`
        edges = [...edges, {source: prev_id, target: id, id: new_id, type:'straight', style: edgeDefaultStyle.style}];
        nodes = [...nodes.map((n : BinaryNode) => n.id === prev_id ? prev! : n), new_node];
    }


    return {nodes, edges};
}