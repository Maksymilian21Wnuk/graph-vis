import { useEffect, useReducer } from "react";
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
import Heap from "heap-js";
import { Weight } from "../../shared/enumerations/enums";

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

    const initialState: GraphState = {
        newNode: { id: "0", position: { x:-500, y: -500}, data: { label: "0" }, style: { borderRadius: '100%', width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity:0 }, },
        removeMode: false,
        addMode: false,
        nodeCount: 0,
        first: -1,
        connect: false,
        dragMode: true,
        minHeap: new Heap<string>(),
    };


    const [state, dispatch] = useReducer(reducer, initialState);


    function onNodeClick(_event: any, node: any){
        if (state.removeMode){
            // add removed to min heap
            // decrement state of node count
            dispatch({type: "SET_MIN_HEAP", payload: node.id});
            dispatch({type: "COUNT_ADD", payload: -1});
            setNodes(nodes.filter(n => n.id !== node.id));
            setEdges(edges.filter(e => e.source !== node.id && e.target !== node.id));
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
                if (edges.some(e => e.id === id) || first === scnd){
                    return;
                }
                setEdges([...edges, {id: id, source: String(first), target: String(scnd), type: 'straight', label: Weight.UNWEIGHTED}]);
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

    useEffect(() => {
        setNodes([...nodes, state.newNode]);
    }, [state.newNode]);

    function onPaneClick(_event : React.MouseEvent<Element, MouseEvent>) : void {
        if (state.addMode){
            const x = _event.clientX;
            const y = _event.clientY;
            dispatch({type: "ADD_NODE", payload: {x, y}});
        }
    }



    return (
        <>
        <Buttons dispatch={dispatch} setEdges={setEdges} edges={edges}/>
        <div className="flex justify-center ">

            <div className="w-screen md:w-3/5 max-auto h-[400px] border-2 border-black mx-5">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
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