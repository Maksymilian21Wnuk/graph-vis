import { useReducer } from "react";
import {
    ReactFlow,
    addEdge,
    
  } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useStore from "./store/store";
import reducer from "./store/reducer";
import { GraphState } from "../../shared/types/types";
import { useShallow } from "zustand/shallow";
import Buttons from "./components/buttons";

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
                let first = state.first;
                let scnd = parseInt(node.id);

                if (first > scnd){
                    let tmp = first;
                    first = scnd;
                    scnd = tmp;
                }
                console.log(first, scnd);
                console.log(edges);
                // this is for removing double edges
                let id = `${first}-${scnd}`;
                // handle same id's
                if (edges.some(e => e.id === id) || first === scnd){
                    return;
                }
                setEdges([...edges, {id: id, source: String(first), target: String(scnd), type: 'straight', label: '1'}]);
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
        <Buttons dispatch={dispatch} setEdges={setEdges} edges={edges}/>
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