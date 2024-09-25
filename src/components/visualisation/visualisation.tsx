import { useShallow } from "zustand/shallow";
import useStore from "../store/store";
import bfs from "./algorithms/bfs";
import { useState } from "react";
import Graph from "../../shared/models/graph";
import colorNodes from "./color_nodes";

const selector = (state : any) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
});

let gen = bfs(new Graph());
let initialState = gen.next();

export default function Visualisation() {
    const {nodes, edges, setNodes, setEdges} = useStore(useShallow(selector));

    const [genval, setGenval] = useState(initialState);

    function next_step(){
        let next = gen.next();
        if (next.value!){
            let colored = colorNodes(next, nodes);
            setNodes(colored);
            setGenval(next);
        }
    }

    function start(){
        let graph = new Graph(nodes, edges);
        gen = bfs(graph);
    }

    return (
        <div className="flex justify-center gap-4 p-2 m-5">
            <button className="btn" onClick={start}>Go Start </button>
            <button className="btn" onClick={next_step}>Go Next</button>
        </div>
    );

}