import React, { useEffect, useReducer } from "react";
import {
    ReactFlow,
    Node,
    Edge,
    Controls,
    useReactFlow,
    XYPosition,
  } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useStore from "../store/store";
import reducer from "../store/reducer";
import { GraphState } from "../../shared/types/interactive_types";
import { useShallow } from "zustand/shallow";
import Buttons from "./components/buttons";
import Heap from "heap-js";
import { Weight } from "../../shared/enumerations/enums";
import GraphSpawner from "./components/graph_spawner";
import { edgeDefaultStyle, nodeDefaultStyle } from "../../shared/constants";

const selector = (state : any) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
});

const DBG = true;

function dbg(...args: any[]){
    DBG ? console.log(args) : null;
}

export default function GraphMap() {
    const {nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges} = useStore(useShallow(selector));

    const reactFlow = useReactFlow();

    // todo: make addMode by default so that removal is only chosen by clicking
    const initialState: GraphState = {
        newNode: { id: "6", position: { x:300, y: 200}, data: { label: "6" }, ...nodeDefaultStyle},
        removeMode: false,
        addMode: false,
        nodeCount: 6,
        first: -1,
        connect: false,
        minHeap: new Heap<string>(),
    };


    const [state, dispatch] = useReducer(reducer, initialState);


    function onNodeClick(_event: any, node: any){
        if (state.removeMode){
            // add removed to min heap
            // decrement state of node count
            dispatch({type: "SET_MIN_HEAP", payload: node.id});
            dispatch({type: "COUNT_ADD", payload: -1});
            setNodes(nodes.filter((n : Node) => n.id !== node.id));
            setEdges(edges.filter((e : Edge) => e.source !== node.id && e.target !== node.id));
        }
        else if(state.addMode){
            if (state.connect){
                let first : number = state.first;
                let scnd : number = parseInt(node.id);

                if (first > scnd){
                    const tmp : number= first;
                    first = scnd;
                    scnd = tmp;
                }
                // this is for removing double edges
                let id = `${first}-${scnd}`;
                if (first === -1){
                    dispatch({type: "SET_PAIR", payload: first});
                    return;
                }
                // handle same id's
                if (edges.some((e : Edge) => e.id === id) || first === scnd){
                    return;
                }
                setEdges([...edges, {id: id, source: String(first), target: String(scnd), type: 'straight', label: Weight.UNWEIGHTED, style: {edgeDefaultStyle}}]);
                dispatch({type: "SET_PAIR", payload: -1});
            }
            if (!state.connect){
                dispatch({type: "SET_PAIR", payload: parseInt(node.id)});
            }
        }
    }

    function onEdgeClick(_event : React.MouseEvent<Element, MouseEvent>, edge : any) : void {
        dbg(edges);
        if (state.removeMode)
            setEdges(edges.filter((e : Edge) => e.id !== edge.id))
    }

    // do zmiany!
    useEffect(() => {
        dbg(nodes);
        dbg(edges);
        setNodes([...nodes, state.newNode]);
    }, [state.newNode]);

    function onPaneClick(_event : React.MouseEvent<Element, MouseEvent>) : void {
        if (state.addMode){
            let xy : XYPosition = {x : _event.clientX, y : _event.clientY};
            //xy = reactFlow.screenToFlowPosition(xy);
            xy = reactFlow.screenToFlowPosition(xy);
            dispatch({type: "ADD_NODE", payload: {x : xy.x, y : xy.y}});
        }
    }

    return (
        <>
        <Buttons dispatch={dispatch} setEdges={setEdges} edges={edges}/>
        <div className="flex justify-center ">
            <div className="w-1/5">
                <GraphSpawner/>
            </div>

            <div className="w-screen md:w-3/5 max-auto h-[400px] border-2 border-black mx-5">
                
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
                    <Controls />
                    </ReactFlow>
            </div>
            <div className="w-1/5">
            
            </div>
        </div>
        </>
    );
}