import React, { useReducer } from "react";
import {
    ReactFlow,
    Node,
    Edge,
    useReactFlow,
    XYPosition,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useStore from "../store/store";
import reducer from "../store/reducer";
import { AppState, GraphState } from "../../../shared/types/graph_map_types";
import { useShallow } from "zustand/shallow";
import { Weight } from "../../../shared/enumerations/enums";
import { ARROW_SVG_ID, NODE_MAX, NO_ARROW, nodeDefaultStyle } from "../../../shared/constants";
import find_first_free from "./functions/find_first_free_index/find_first_free_index";
import getRandomInt from "../../utility/functions/random_int";
import CustomControls from "./custom_controls/custom_controls";
import CustomMarker from "./components/custom_edge/marker";
import convert_to_undirected from "./functions/convert_to_undirected";
import EdgePopup from "./components/edge_popup";
import { ActionType } from "../../../shared/enumerations/enums";
import Additionals from "./components/additionals/additionals";
import reset_edge_color from "../util/reset_edge_color";
import reset_node_color from "../util/reset_node_color";
import make_edge_directed from "./functions/make_edge_directed";

const selector = (state: AppState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    message: state.message,
    setModifyMode: state.setModifyMode,
    modifyMode: state.modifyMode,
    selectedValue: state.selectedValue,
    isDirected: state.isDirected,
    setIsDirected: state.setIsDirected,
    isWeighted: state.isWeighted,
    setIsWeighted: state.setIsWeighted,
});


export default function GraphMap() {
    const { nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges, message, setModifyMode, modifyMode, isDirected, setIsDirected, isWeighted, setIsWeighted } = useStore(useShallow(selector));

    const reactFlow = useReactFlow();

    const initialState: GraphState = {
        removeMode: false,
        addMode: false,
        first: -1,
        connect: false,
        edge_to_change: {id: "-1", source: "1", target: "2"},
    };


    const [state, dispatch] = useReducer(reducer, initialState);

    // looks weird, maybe to change
    function onNodeClick(_event: React.MouseEvent<Element, MouseEvent>, node: Node) {
        reset_graph();
        
        import.meta.env.DEV ? console.log(nodes) : null;

        if (state.removeMode) {
            // add removed to min heap
            // decrement state of node count
            setNodes(reset_node_color(nodes.filter((n: Node) => n.id !== node.id)));
            setEdges(reset_edge_color(edges.filter((e: Edge) => e.source !== node.id && e.target !== node.id)));
        }
        else if (state.addMode) {
            if (state.connect) {
                if (isDirected) {
                    const first: string = String(state.first);
                    if (first === "-1") {
                        dispatch({ type: ActionType.SET_PAIR, payload: first });
                        return;
                    }
                    const scnd: string = node.id;
                    const id: string = `${first}-${scnd}`;
                    const prevent_two_arrows_id : string = `${scnd}-${first}`;
                    if (edges.some((e: Edge) => e.id === id) || first === scnd) {
                        return;
                    }
                    const new_label: string = isWeighted ? String(getRandomInt(NODE_MAX)) : Weight.UNWEIGHTED;
                    
                    if (edges.some((e : Edge) => e.id === prevent_two_arrows_id)){
                        setEdges([...reset_edge_color(edges.filter((e : Edge) => e.id !== prevent_two_arrows_id)), {
                            id: id, source: first, target: scnd, type: 'straight', label: new_label,
                            style: { stroke: "black" }, markerEnd: ARROW_SVG_ID
                        }]);
                    }
                    else{
                        setEdges([...reset_edge_color(edges), {
                            id: id, source: first, target: scnd, type: 'straight', label: new_label,
                            style: { stroke: "black" }, markerEnd: ARROW_SVG_ID
                        }]);
                    }
                    dispatch({type: ActionType.SET_PAIR, payload: -1 });

                }
                else {
                    // holding invariant
                    let first: number = state.first;
                    let scnd: number = parseInt(node.id);

                    if (first > scnd) {
                        const tmp: number = first;
                        first = scnd;
                        scnd = tmp;
                    }
                    // this is for removing double edges
                    const id = `${first}-${scnd}`;
                    if (first === -1) {
                        dispatch({ type: ActionType.SET_PAIR, payload: first });
                        return;
                    }
                    // handle same id's
                    if (edges.some((e: Edge) => e.id === id) || first === scnd) {
                        return;
                    }

                    const new_label: string = isWeighted ? String(getRandomInt(NODE_MAX)) : Weight.UNWEIGHTED;

                    setEdges([...reset_edge_color(edges), {
                        id: id, source: String(first), target: String(scnd), type: 'straight', label: new_label,
                        style: { stroke: "black" }, markerEnd: NO_ARROW
                    }]);
                    dispatch({ type: ActionType.SET_PAIR, payload: -1 });
                }
            }
            else {
                dispatch({ type: ActionType.SET_PAIR, payload: parseInt(node.id) });
            }
        }
    }

    function onEdgeClick(_event: React.MouseEvent<Element, MouseEvent>, edge: Edge): void {
        reset_graph();
        if (state.removeMode) {
            setEdges(edges.filter((e: Edge) => e.id !== edge.id))
        }
        else if (state.addMode && isWeighted) {
            (document.getElementById('edge_modal') as HTMLDialogElement).showModal();
            dispatch({type: ActionType.CHANGE_EDGE, payload: edge});
        }
        else if (isDirected) {
            setEdges([...edges.filter((e: Edge) => e.id !== edge.id), {
                id: String(edge.target) + "-" + String(edge.source), source: edge.target, target: edge.source, type: 'straight', label: edge.label,
                style: { stroke: "black" }, markerEnd: ARROW_SVG_ID
            }]);
        }

    }


    function onPaneClick(event: React.MouseEvent<Element, MouseEvent>): void {
        import.meta.env.DEV ? console.log(edges) : null;
        import.meta.env.DEV ? console.log(nodes) : null;

        reset_graph();
        if (state.addMode) {
            let xy: XYPosition = { x: event.clientX, y: event.clientY };
            xy = reactFlow.screenToFlowPosition(xy);
            const first_free: string = find_first_free(nodes);
            const new_node = { id: first_free, position: { x: xy.x - 25, y: xy.y - 25 }, data: { label: first_free }, ...nodeDefaultStyle };
            setNodes([...reset_node_color(nodes), new_node]);
        }
    }


    const random_weight = () => {
        setModifyMode(true);
        setEdges(edges.map((e: Edge) => { return { ...e, label: String(getRandomInt(NODE_MAX)) } }));
        setIsWeighted(true);
    };

    const clear = () => {
        setEdges([]);
        setNodes([]);
        setModifyMode(true);
    }


    const no_weights = () => {
        setModifyMode(true);
        setEdges(edges.map((e: Edge) => { return { ...e, label: Weight.UNWEIGHTED } }));
        setIsWeighted(false);
    }

    const export_graph = () => {
        navigator.clipboard.writeText("{nodes: " + JSON.stringify(nodes) + ",\n" + "edges: " + JSON.stringify(edges) + "}");
        alert("Graph exported");
    }

    const set_directed = () => {
        reset_graph()
        if (isDirected) {
            // remove arrows holding invariant
            console.log(convert_to_undirected(edges))
            setEdges(convert_to_undirected(reset_edge_color(edges)));
            setIsDirected(false);
        }
        // give arrows to edges
        else {
            setEdges(reset_edge_color(edges.map((e: Edge) => make_edge_directed(e))));
            setIsDirected(true);
        }
    }

    const reset_graph = () => {
        setModifyMode(true);
        if (!modifyMode){
            setEdges(reset_edge_color(edges));
            setNodes(reset_node_color(nodes));
        }
    }

    return (
        <>
            <CustomMarker />
            <EdgePopup edge_to_change={state.edge_to_change} updateEdge={reactFlow.updateEdge} />
            <div className="bg-white w-screen md:w-3/5 max-auto md:h-[400px] border-2 border-black font-sans">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onEdgeClick={onEdgeClick}
                    onNodeClick={onNodeClick}
                    snapToGrid={true}
                    onInit={() => reactFlow.fitView()}
                    onPaneClick={onPaneClick}
                    snapGrid={[15, 15]}>
                    <CustomControls setIsDirected={set_directed} exportGraph={export_graph} noWeights={no_weights} dispatch={dispatch} clearGraph={clear} randomizeWeight={random_weight} />
                </ReactFlow>
            </div>
            <div className="w-1/5">
                <Additionals additional_snd={message.additional_snd} additional_snd_name={message.additional_snd_name} step_idx={message.step_idx} msg={message.msg} additional={message.additional} additional_name={message.additional_name} modifyMode={modifyMode} />
            </div>
        </>
    );
}