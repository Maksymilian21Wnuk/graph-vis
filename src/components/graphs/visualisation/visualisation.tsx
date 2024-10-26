import { useShallow } from "zustand/shallow";
import useStore from "../store/store";
import { useState } from "react";
import { algos } from "./algorithms/algorithms_aggreg";
import get_currently_clicked from "../../utility/functions/get_currently_clicked";
import { AppState } from "../../../shared/types/graph_map_types";
import { PreviousStep, Step, Steps } from "../../../shared/types/visualisation_types";
import colorNodes from "../../utility/functions/color_nodes";
import colorEdges from "../../utility/functions/color_edges";
import reset_edge_color from "../util/reset_edge_color";
import reset_node_color from "../util/reset_node_color";
import ProgressButtons from "./components/progress_buttons/progress_buttons";
import { NOT_SELECTED } from "../../../shared/constants";
import DirectedGraph from "../../../shared/models/directed_graph/directed_graph";
import requirements_guard from "./util/requirements_guard";
import { Algorithm } from "../../../shared/types/visualisation_types";
import AlgorithmList from "./components/algorithm_list/algorithm_list";
//import { Node, Edge } from "@xyflow/react";

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
    const [steps, setSteps] = useState<Steps>([]);
    const [stepIdx, setStepIdx] = useState(-1);
    const [prevStep, setPrevStep] = useState<PreviousStep | undefined>(undefined);
    const [firstPrev, setFirstPrev] = useState<boolean>(true);

    // function for handling next step of algorithm progression
    function next_step() {
        const value = firstPrev ? 0 : 1;
        const step: Step = steps[stepIdx + value];
        setFirstPrev(true);
        if (step) {
            setStepIdx(stepIdx + 1 + value);
            const new_nodes = colorNodes(step, nodes);
            const new_edges = colorEdges(step, edges);
            setNodes(new_nodes);
            setEdges(new_edges);
            setPrevStep({previous: prevStep, nodes: new_nodes, edges: new_edges});
            // case when message exists
            setMessage({ msg: step.msg, 
                additional: step.additional_parsed,
                additional_name: step.additional_name, 
                step_idx: step.step_idx, 
                additional_snd: step.additional_snd_parsed, 
                additional_snd_name: step.additional_snd_name });

        }
        // case when algorithm finished execution
        else {
            setSteps([]);
            setStepIdx(0);
            reset_graph();
            setMessage({ step_idx: -1, msg: '' });
        }

    }

    function prev_step() {
        const value = firstPrev ? 2 : 1;
        // if first prev decrement 2
        const step: Step = steps[stepIdx - value];
        if (step) {
            setFirstPrev(false);
            setStepIdx(stepIdx - value);
            if (firstPrev){
                setNodes(prevStep?.previous?.nodes!);
                setEdges(prevStep?.previous?.edges!);    
            }
            else{
                setNodes(prevStep?.nodes!);
                setEdges(prevStep?.edges!);    
            }
            setPrevStep(prevStep?.previous);
            // case when message exists
            setMessage({ msg: step.msg, 
                additional: step.additional_parsed,
                additional_name: step.additional_name, 
                step_idx: step.step_idx, 
                additional_snd: step.additional_snd_parsed, 
                additional_snd_name: step.additional_snd_name });

        }

    }

    /* function for starting algorithm execution
    it basically initialize the graph with
    currently placed nodes and edges on the graph map*/
    function start() {
        setMessage({ msg: 'Starting Algorithm', step_idx: -1 });
        setNodes(reset_node_color(nodes));
        setEdges(reset_edge_color(edges));
        // gets currently clicked node in order to start algo in this node (case of node starting algo)
        const currentClicked: string = get_currently_clicked(nodes);
        let graph = new DirectedGraph(currentClicked, nodes, edges);

        // requirements checking for functions
        if (requirements_guard(chosenFunction, graph)) {
            setModifyMode(false);
            setPrevStep(undefined);
            // run chosen algo on given graph
            const new_steps: Steps = chosenFunction.foo(graph);
            setSteps(new_steps);
            setStepIdx(0);
        }
    }

    const reset_graph = () => {
        setNodes(reset_node_color(nodes));
        setEdges(reset_edge_color(edges));
        setModifyMode(true);
    }

    // if user didnt choose algorithm, do not show progress buttons
    return (
        <div className="">
            {selectedValue !== NOT_SELECTED ?
                <ProgressButtons prev_step={prev_step} resetGraph={reset_graph} setModifyMode={setModifyMode} modifyMode={modifyMode} start={start} next_step={next_step} stepCount={steps.length - stepIdx} /> : null}
            <div className="flex flex-col items-center bg-white">
                <h1 className="text-2xl font-bold py-4">{ selectedValue === NOT_SELECTED ? `Select algorithm...` : chosenFunction.name}</h1>
            </div>
            <AlgorithmList resetGraph={reset_graph} setSelectedValue={setSelectedValue} setChosenFunction={setChosenFunction} />
        </div>
    );

}