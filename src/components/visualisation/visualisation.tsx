import { useShallow } from "zustand/shallow";
import useStore from "../store/store";
import dfs from "./algorithms/dfs";
import bfs from "./algorithms/bfs";
import { useState } from "react";
import Graph from "../../shared/models/graph";
import colorNodes from "./color_nodes";
import reset_color from "./util/reset_color";
import { algos } from "./algorithms/algorithms_aggreg";


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
    const [selectedValue, setSelectedValue] = useState(-1);
    const [chosenFunction, setChosenFunction] = useState<any>(algos[0]);

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
        gen = chosenFunction.foo(graph);
        next_step();
        console.log(chosenFunction);

    }


    const handleChange = (event : any) => {
        setSelectedValue(event.target.value);
        const a : Algorithm = algos[event.target.value];
        setChosenFunction(a);
    }

    return (
        <>     
            {selectedValue !== -1 ? (<div className="flex justify-center gap-4 p-2 m-5">
                <button className="btn" onClick={start}>Go Start </button>
                <button className="btn" onClick={next_step}>Go Next</button>
            </div>) : null}

            <div className="flex justify-center">
                <select className="select select-bordered w-full max-w-xs" 
                        value={selectedValue} onChange={handleChange}>
                            <option>Pick algorithm...</option>
                    {/* this is for using array index not finding value */}
                    {algos.map((alg : Algorithm, i : number = 0) => <option value={i++}>{alg.name}</option>)}
                </select>
            </div>

            <div className="flex justify-center">
                <h1>Depth First Search, idea: description, concept, pseudocode</h1>
            </div>
        </>
    );

}