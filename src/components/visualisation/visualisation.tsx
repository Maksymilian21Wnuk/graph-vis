import { useShallow } from "zustand/shallow";
import useStore from "../store/store";
import { useState } from "react";
import Graph from "../../shared/models/graph";
import { algos } from "./algorithms/algorithms_aggreg";
import { Value } from "../../shared/enumerations/enums";
import get_currently_clicked from "./util/get_currently_clicked";
import { AppState } from "../../shared/types/interactive_types";
import { Step } from "../../shared/types/graph_types";
import colorNodes from "./util/color_nodes";
import colorEdges from "./util/color_edges";
import reset_edge_color from "./util/reset_edge_color";
import reset_node_color from "./util/reset_node_color";

const selector = (state : AppState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setMessage: state.setMessage,
});



export default function Visualisation() {
    const {nodes, edges, setNodes, setEdges, setMessage} = useStore(useShallow(selector));

    const [selectedValue, setSelectedValue] = useState(Value.NOT_SELECTED);
    const [chosenFunction, setChosenFunction] = useState<any>(algos[0]);
    const [steps, setSteps] = useState<Step[]>([]);
    const [nextVisible, setNextVisible] = useState(false);

    function next_step(){
        console.log(steps);
        const step : Step = steps.shift()!;
        if (step){
            setSteps(steps);
            setNodes(colorNodes(step, nodes));
            setEdges(colorEdges(step, edges));
            // case when message exists
            if (step.msg){
                setMessage({msg : step.msg});
            }
        }
        else{
            setSteps([]);
            setNextVisible(false);
            setMessage({msg : "Algorithm terminated."})
            setNodes(reset_node_color(nodes));
            setEdges(reset_edge_color(edges));
        }
    
    }

    function start(){
        setNextVisible(true);
        setNodes(reset_node_color(nodes));
        setEdges(reset_edge_color(edges));
        // gets currently clicked node in order to start algo in this node (case of node starting algo)
        const currentClicked : string = get_currently_clicked(nodes);
        let graph = new Graph(currentClicked, nodes, edges);
        // run chosen algo on given graph
        const new_steps : Step[] = chosenFunction.foo(graph);
        setSteps(new_steps);
    }


    const handleChange = (event : any) => {
        setSelectedValue(event.target.value);
        const a : Algorithm = algos[event.target.value];
        setChosenFunction(a);
    }

    return (
        <>     
            {selectedValue !== Value.NOT_SELECTED ? (
            <div className="flex justify-center gap-4 p-2 m-5">
                {nextVisible ? <button className="btn" onClick={next_step}>Next</button> : <button className="btn" onClick={start}>Start </button>}
            </div>) : null}

            <div className="flex justify-center">
                <select className="select select-bordered w-full max-w-xs" 
                        value={selectedValue} onChange={handleChange}>
                            <option>Pick algorithm...</option>
                    {/* this is for using array index for not using .find() */}
                    {algos.map((alg : Algorithm, i : number = 0) => <option key={alg.name} value={i++}>{alg.name}</option>)}
                </select>
            </div>

            <div className="flex justify-center">
                <h1>Depth First Search, idea: description, concept, pseudocode</h1>
            </div>
        </>
    );

}