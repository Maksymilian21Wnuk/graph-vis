import { useShallow } from "zustand/shallow";
import useStore from "../store/store";
import test from "./algorithms/test";
import { Node } from "@xyflow/react";
import { useState } from "react";

const selector = (state : any) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
});

let gen = test(10);
let initialState = gen.next();

export default function Visualisation() {
    const {nodes, edges, setNodes, setEdges} = useStore(useShallow(selector));

    const [genval, setGenval] = useState(initialState);

    function next_step(){
        console.log(genval);
        let next = gen.next();
        setGenval(next);
    }

    function start(){
        gen = test(nodes);
        setGenval(gen.next());
    }

    return (
        <div className="flex justify-center gap-4 p-2 m-5">
            <button className="btn" onClick={start}>Go Start </button>
            <button className="btn" onClick={next_step}>Go Next</button>
        </div>
    );

}