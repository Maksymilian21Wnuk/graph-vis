import { useShallow } from "zustand/shallow";
import useStore from "../store/store";
import { useState } from "react";
import Graph from "../../shared/models/graph";
import { algos } from "./algorithms/algorithms_aggreg";
import { Value } from "../../shared/enumerations/enums";
import get_currently_clicked from "../utility/functions/get_currently_clicked";
import { AppState } from "../../shared/types/interactive_types";
import { Step } from "../../shared/types/graph_types";
import colorNodes from "../utility/functions/color_nodes";
import colorEdges from "../utility/functions/color_edges";
import reset_edge_color from "../utility/functions/reset_edge_color";
import reset_node_color from "../utility/functions/reset_node_color";
import Description from "./components/description";
import AlgorithmDropdown from "./components/algorithm_dropdown";
import ProgressButtons from "./components/progress_buttons";
import { NOT_SELECTED } from "../../shared/constants";


const selector = (state: AppState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setMessage: state.setMessage,
    setModifyMode: state.setModifyMode,
    modifyMode: state.modifyMode,
});



export default function Visualisation() {
    const { nodes, edges, setNodes, setEdges, setMessage, setModifyMode, modifyMode } = useStore(useShallow(selector));

    const [selectedValue, setSelectedValue] = useState(NOT_SELECTED);
    const [chosenFunction, setChosenFunction] = useState<any>(algos[0]);
    const [steps, setSteps] = useState<Step[]>([]);


    // function for handling next step of algorithm progression
    function next_step() {
        console.log(steps);
        const step: Step = steps.shift()!;
        if (step) {
            setSteps(steps);
            setNodes(colorNodes(step, nodes));
            setEdges(colorEdges(step, edges));
            // case when message exists
            if (step.msg) {
                setMessage({ msg: step.msg });
            }
        }
        // case when algorithm finished execution
        else {
            setSteps([]);
            setModifyMode(false);
            setMessage({ msg: "Algorithm terminated." })
            setNodes(reset_node_color(nodes));
            setEdges(reset_edge_color(edges));
        }

    }

    /* function for starting algorithm execution
    it basically initialize the graph with
    currently placed nodes and edges on the graph map*/
    function start() {
        setModifyMode(false);
        setNodes(reset_node_color(nodes));
        setEdges(reset_edge_color(edges));
        // gets currently clicked node in order to start algo in this node (case of node starting algo)
        const currentClicked: string = get_currently_clicked(nodes);
        let graph = new Graph(currentClicked, nodes, edges);
        // run chosen algo on given graph
        const new_steps: Step[] = chosenFunction.foo(graph);
        setSteps(new_steps);
    }


    // if user didnt choose algorithm, do not show progress buttons
    return (
        <>
            {selectedValue !== Value.NOT_SELECTED ?
                <ProgressButtons modifyMode={modifyMode} start={start} next_step={next_step} /> : null}
            <AlgorithmDropdown setSelectedValue={setSelectedValue} setChosenFunction={setChosenFunction} selectedValue={selectedValue} />
            <Description selectedValue={selectedValue}/>
        </>
    );

}