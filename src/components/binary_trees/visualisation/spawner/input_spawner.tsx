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
    }

    const onButtonClick = async () => {
        const values = inputValue.split(" ").map((n : string) => parseInt(n));
        setInputValue("")
        for (const v of values){
            if (isNaN(v)){
                 alert("Not a number");
                 return;
            }
        }
        for (const n of values) {
            await delay(300);
            setNodes(position_node(nodes, n));
        }        

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
                    onClick={() => setNodes([])}>
                Clear
            </button>
        </div>
    )
}