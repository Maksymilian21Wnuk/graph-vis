import { useReducer, useState } from "react";
import Button from "../utility/button";
import {
    ReactFlow,
    addEdge,
    useReactFlow,
  } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useStore from "./store";
import reducer from "./reducer";
import { Coordinates, GraphState } from "../../shared/types/types";
import { useShallow } from "zustand/shallow";

const selector = (state : any) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
});


export default function GraphMap() {
    const {nodes, edges, onNodesChange, onEdgesChange, setNodes, setEdges} = useStore(useShallow(selector));

    const initialState: GraphState = {
        newNode: { id: "0", position: { x:0, y: 0}, data: { label: "0" }, style: { borderRadius: '100%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', }, },
        removeMode: false,
        addMode: false,
        nodeCount: 0,
        first: -1,
        connect: false,
        dragMode: true
    };


    const [state, dispatch] = useReducer(reducer, initialState);


    function onNodeClick(_event: any, node: any){
        if (state.removeMode){
            setNodes(nodes.filter(n => n.id !== node.id));
            setEdges(edges.filter(e => e.source !== node.id && e.target !== node.id));
            dispatch({type: "COUNT_ADD", payload: -1});
        }
        else if(state.addMode){
            if (state.connect){
                let scnd = parseInt(node.id);
                setEdges([...edges, {id: `${state.first}-${scnd}`, source: String(state.first), target: String(scnd), type: 'straight', label: '1'}]);
                dispatch({type: "SET_PAIR", payload: -1});
            }
            if (!state.connect){
                dispatch({type: "SET_PAIR", payload: parseInt(node.id)});
            }
        }
    }

    function onEdgeClick(_event : React.MouseEvent<Element, MouseEvent>, edge : any) : void {
        if (state.removeMode)
            setEdges(edges.filter(e => e.id !== edge.id))
    }

    function onPaneClick(_event : React.MouseEvent<Element, MouseEvent>) : void {
        if (state.addMode){
            const x = _event.clientX;
            const y = _event.clientY;
            dispatch({type: "ADD_NODE", payload: {x, y}});
            setNodes([...nodes, state.newNode]);
        }
    }


    return (
        <>
        <div className="flex flex-col mx-5 my-2">
                <Button onClick={(_e) => dispatch({type : "MOVE_MODE"})} text={"Move"}/>
                <Button onClick={(_e) => dispatch({type : "MODE_ADD"})} text={"Add"}/>
                <Button onClick={(_e) => dispatch({type : "MODE_REMOVE"})} text={"Remove"}/>
        </div>    

        <div className="flex ">

            <div className="w-screen h-[400px] border-2 border-black mx-5">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={(params) => setEdges(addEdge(params, edges))}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onEdgeClick={onEdgeClick}
                    onNodeClick={onNodeClick}
                    snapToGrid={true}
                    onPaneClick={onPaneClick}
                    panOnDrag={state.dragMode}
                    snapGrid={[15, 15]}>
                </ReactFlow>
            
            </div>
        </div>
        </>
    );
}