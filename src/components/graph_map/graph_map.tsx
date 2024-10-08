import React, { useReducer } from "react";
import {
    ReactFlow,
    Node,
    Edge,
    Controls,
    useReactFlow,
    XYPosition,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useStore from "../../store/store";
import reducer from "../../store/reducer";
import { AppState, GraphState } from "../../shared/types/interactive_types";
import { useShallow } from "zustand/shallow";
import { Weight } from "../../shared/enumerations/enums";
import GraphSpawner from "./components/graph_spawner/graph_spawner";
import { NODE_MAX, NOT_SELECTED, nodeDefaultStyle } from "../../shared/constants";
import find_first_free from "./functions/find_first_free_index";
import getRandomInt from "../utility/functions/random_int";
import Steps from "./components/steps";
import CustomControls from "./custom_controls/custom_controls";
import Description from "../visualisation/components/description/description";

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
});


export default function GraphMap() {
    const { nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges, message, setModifyMode, modifyMode, selectedValue } = useStore(useShallow(selector));

    const reactFlow = useReactFlow();

    // todo: make addMode by default so that removal is only chosen by clicking
    const initialState: GraphState = {
        removeMode: false,
        addMode: false,
        first: -1,
        connect: false,
        weighted: false,
    };


    const [state, dispatch] = useReducer(reducer, initialState);

    // looks weird, maybe to change
    function onNodeClick(_event: React.MouseEvent<Element, MouseEvent>, node: Node) {
        setModifyMode(true);
        if (state.removeMode) {
            // add removed to min heap
            // decrement state of node count
            setNodes(nodes.filter((n: Node) => n.id !== node.id));
            setEdges(edges.filter((e: Edge) => e.source !== node.id && e.target !== node.id));
        }
        else if (state.addMode) {
            if (state.connect) {
                let first: number = state.first;
                let scnd: number = parseInt(node.id);

                if (first > scnd) {
                    const tmp: number = first;
                    first = scnd;
                    scnd = tmp;
                }
                // this is for removing double edges
                let id = `${first}-${scnd}`;
                if (first === -1) {
                    dispatch({ type: "SET_PAIR", payload: first });
                    return;
                }
                // handle same id's
                if (edges.some((e: Edge) => e.id === id) || first === scnd) {
                    return;
                }

                const new_label: string = state.weighted ? String(getRandomInt(NODE_MAX)) : Weight.UNWEIGHTED;

                setEdges([...edges, { id: id, source: String(first), target: String(scnd), type: 'straight', label: new_label, style: { stroke: "black" } }]);
                dispatch({ type: "SET_PAIR", payload: -1 });
            }
            if (!state.connect) {
                dispatch({ type: "SET_PAIR", payload: parseInt(node.id) });
            }
        }
    }

    function onEdgeClick(_event: React.MouseEvent<Element, MouseEvent>, edge: Edge): void {
        setModifyMode(true);
        if (state.removeMode)
            setEdges(edges.filter((e: Edge) => e.id !== edge.id))
    }


    function onPaneClick(_event: React.MouseEvent<Element, MouseEvent>): void {
        setModifyMode(true);
        if (state.addMode) {
            let xy: XYPosition = { x: _event.clientX, y: _event.clientY };
            xy = reactFlow.screenToFlowPosition(xy);
            const first_free: string = find_first_free(nodes);
            const new_node = { id: first_free, position: { x: xy.x - 25, y: xy.y - 25 }, data: { label: first_free }, ...nodeDefaultStyle };
            setNodes([...nodes, new_node]);
        }
    }

    const fit_view = () => {
        reactFlow.fitView();
    }

    const random_weight = () => {
        setEdges(edges.map((e: Edge) => { return { ...e, label: String(getRandomInt(NODE_MAX)) } }));
        dispatch({ type: 'CHANGE_WEIGHTED', payload: true });
    };

    const clear = () => {
        setEdges([]);
        setNodes([]);
        setModifyMode(true);
    }

    const no_weights = () => {
        setEdges(edges.map((e: Edge) => { return { ...e, label: Weight.UNWEIGHTED } }));
        dispatch({ type: 'CHANGE_WEIGHTED', payload: false });
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <GraphSpawner setModifyMode={setModifyMode} setNodes={setNodes} setEdges={setEdges} fit_view={fit_view} />
            </div>
            <div className="flex justify-center">
                <div className="w-1/5">
                    {selectedValue !== NOT_SELECTED ? <Description algo_selected={selectedValue} /> : null}
                </div>
                <div className="w-screen md:w-3/5 max-auto h-[400px] border-2 border-black font-sans">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onEdgeClick={onEdgeClick}
                        onNodeClick={onNodeClick}
                        snapToGrid={true}
                        onInit={fit_view}
                        onPaneClick={onPaneClick}
                        snapGrid={[15, 15]}>
                        <CustomControls noWeights={no_weights} dispatch={dispatch} clearGraph={clear} randomizeWeight={random_weight} />
                    </ReactFlow>
                </div>
                <div className="w-1/5">
                    <Steps msg={message.msg} additional={message.additional} additional_name={message.additional_name} modifyMode={modifyMode} />
                </div>
            </div>
        </>
    );
}