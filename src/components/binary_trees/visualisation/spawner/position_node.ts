import { nodeDefaultStyle } from "../../../../shared/constants";
import { BinaryNode } from "../../models/binary_node";
import calculate_position from "./calculate_pos";
import { DIRECTION } from "../../../../shared/enumerations/enums";




export default function position_node(nodes : BinaryNode[], value : number) : BinaryNode[] {
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
        }
        const new_node = {id:id, 
            position: calculate_position(prev?.position!, direction),
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

        nodes = [...nodes.map((n : BinaryNode) => n.id === prev_id ? prev! : n), new_node];
    }


    return nodes;
}