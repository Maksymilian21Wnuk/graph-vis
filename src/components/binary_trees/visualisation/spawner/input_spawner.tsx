import { useState } from "react";
import { BinaryNode } from "../../models/binary_node";
import position_node from "./position_node";
import { Edge, useReactFlow } from "@xyflow/react";
import delay from "../../../utility/functions/delay";


interface InputProps {
    setNodes: (n : BinaryNode[]) => void;
    setEdges: (e : Edge[]) => void;
    nodes : BinaryNode[];
    edges : Edge[];
}


export default function InputSpawner({setNodes, setEdges, nodes, edges} : InputProps) {
    const [inputValue, setInputValue] = useState("");

    const reactFlow = useReactFlow();

    const onInputChange = (e : any) => {
        setInputValue(e.target.value);
        console.log("asdf")
    }

    const onButtonClick = () => {
        const parsed_val = inputValue.split(" ");
        const value = parseInt(parsed_val[0]);

        if (isNaN(value)){
            alert("Not a number");
            return;   
        }
        setInputValue(parsed_val.splice(1).join(" "));

        const new_tree = position_node(nodes, edges, value);

        setNodes(new_tree.nodes);
        setTimeout(() => {
            reactFlow.fitView()   
            setEdges(new_tree.edges);
        });
    }

    return (
        <div>
            <input
                placeholder="space separated vals"
                className="input border border-black"
                value={inputValue}
                onChange={onInputChange}>
            </input>
            <button className="btn"
                    onClick={onButtonClick}>
                Add
            </button>
            <button className="btn"
                    onClick={() => {setNodes([]), setEdges([])}}>
                Clear
            </button>
        </div>
    )
}