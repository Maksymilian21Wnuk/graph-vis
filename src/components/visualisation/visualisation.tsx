import { useShallow } from "zustand/shallow";
import useStore from "../../store/store";
import { useState } from "react";
import { algos } from "./algorithms/algorithms_aggreg";
import get_currently_clicked from "../utility/functions/get_currently_clicked";
import { AppState } from "../../shared/types/interactive_types";
import { Step } from "../../shared/types/graph_types";
import colorNodes from "../utility/functions/color_nodes";
import colorEdges from "../utility/functions/color_edges";
import reset_edge_color from "../utility/functions/reset_edge_color";
import reset_node_color from "../utility/functions/reset_node_color";
import AlgorithmDropdown from "./components/algorithm_dropdown";
import ProgressButtons from "./components/progress_buttons";
import { NOT_SELECTED } from "../../shared/constants";
import DirectedGraph from "../../shared/models/directed_graph";
import requirements_guard from "./util/requirements_guard";
import { Algorithm } from "../../shared/types/graph_types";

const selector = (state: AppState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setMessage: state.setMessage,
    setModifyMode: state.setModifyMode,
    modifyMode: state.modifyMode,
    selectedValue: state.selectedValue,
    setSelectedValue: state.setSelectedValue,
});



export default function Visualisation() {
    const { nodes, edges, setNodes, setEdges, setMessage, setModifyMode, modifyMode, selectedValue, setSelectedValue } = useStore(useShallow(selector));

    const [chosenFunction, setChosenFunction] = useState<Algorithm>(algos[0]);
    const [steps, setSteps] = useState<Step[]>([]);


    // function for handling next step of algorithm progression
    function next_step() {
        const step: Step = steps.shift()!;
        if (step) {
            setSteps(steps);
            setNodes(colorNodes(step, nodes));
            setEdges(colorEdges(step, edges));
            // case when message exists
            setMessage({ msg: step.msg, additional: step.additional, additional_name: step.additional_name, step_idx : step.step_idx, additional_snd: step.additional_snd, additional_snd_name: step.additional_snd_name});
            
        }
        // case when algorithm finished execution
        else {
            setSteps([]);
            setModifyMode(false);
            reset_graph();
            setMessage({step_idx: -1, msg:''});
        }

    }

    /* function for starting algorithm execution
    it basically initialize the graph with
    currently placed nodes and edges on the graph map*/
    function start() {
        setMessage({msg: 'Starting Algorithm', step_idx: -1});
        setNodes(reset_node_color(nodes));
        setEdges(reset_edge_color(edges));
        // gets currently clicked node in order to start algo in this node (case of node starting algo)
        const currentClicked: string = get_currently_clicked(nodes);
        let graph = new DirectedGraph(currentClicked, nodes, edges);

        // requirements checking for functions
        if (requirements_guard(chosenFunction, graph)){
            setModifyMode(false);
            // run chosen algo on given graph
            const new_steps: Step[] = chosenFunction.foo(graph);
            console.log(new_steps);
            setSteps(new_steps);
        }
    }

    const reset_graph = () => {
        setNodes(reset_node_color(nodes));
        setEdges(reset_edge_color(edges));
        setModifyMode(true);
    }

    // if user didnt choose algorithm, do not show progress buttons
    return (
        <>
            {selectedValue !== NOT_SELECTED ?
                <ProgressButtons modifyMode={modifyMode} start={start} next_step={next_step} /> : null}
            <AlgorithmDropdown resetGraph={reset_graph} setSelectedValue={setSelectedValue} setChosenFunction={setChosenFunction} selectedValue={selectedValue} />
        </>
    );

}