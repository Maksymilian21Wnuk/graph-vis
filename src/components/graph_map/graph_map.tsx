import { useReducer, useState } from "react";
import Button from "../utility/button";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
  } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useStore from "./store";
import reducer from "./reducer";
import { GraphState } from "../../shared/types/types";

const selector = (state : any) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
});


export default function GraphMap() {
    const {nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes, setEdges} = useStore(selector);

    const initialState: GraphState = {
        newNode: { id: "0", position: { x:0, y: 0}, data: { label: "0" }, style: { borderRadius: '100%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', }, },
        removeMode: false,
        addMode: false,
        nodeCount: 0,
        first: -1,
        second: -1,
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
            dispatch({type: "SET_PAIR", payload: parseInt(node.id)});
            if (state.first !== -1 && state.second !== -1){
                setEdges([...edges, {id: `${state.first}-${state.second}`, source: String(state.first), target: String(state.second)}]);
                dispatch({type: "SET_PAIR", payload: -1});
            }
        }
    }

    return (
        <>
        <div className="flex flex-col mx-5 my-2">
                <Button onClick={(_e) => dispatch({type : "MOVE_MODE"})} text={"Move"}/>
                <Button onClick={(_e) => {
                    dispatch({type : "ADD_NODE"})
                    setNodes([...nodes, state.newNode]);
                    }} text={"Add"}/>
                <Button onClick={(_e) => dispatch({type : "REMOVE_NODE"})} text={"Remove"}/>
        </div>    

        <div className="flex ">

            <div className="w-screen h-[400px] border-2 border-black mx-5">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={(params) => setEdges(addEdge(params, edges))}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onEdgeClick={(_event, edge) => setEdges(edges.filter(e => e.id !== edge.id))}
                    onNodeClick={onNodeClick}
                    snapToGrid={true}
                    panOnDrag={state.dragMode}
                    snapGrid={[15, 15]}>
                </ReactFlow>
            
            </div>
        </div>
        </>
    );
}