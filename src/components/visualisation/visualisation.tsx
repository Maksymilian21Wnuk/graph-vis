import { useShallow } from "zustand/shallow";
import useStore from "../store/store";
import bfs from "./algorithms/bfs";
import { useState } from "react";
import Graph from "../../shared/models/graph";
import colorNodes from "./color_nodes";
import { Node } from "@xyflow/react";
import reset_color from "./util/reset_color";

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
        else{
            setNodes(reset_color(nodes));
        }
    }

    function start(){
        setNodes(reset_color(nodes));
        let graph = new Graph(nodes, edges);
        gen = bfs(graph);
    }

    return (
        <>       
            <div className="flex justify-center gap-4 p-2 m-5">
                <button className="btn" onClick={start}>Go Start </button>
                <button className="btn" onClick={next_step}>Go Next</button>
            </div>
            <div className="flex justify-center">
                <h1>Depth First Search, idea: description, concept, pseudocode</h1>
            </div>
        </>
    );

}