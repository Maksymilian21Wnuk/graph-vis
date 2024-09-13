import { useState } from "react";
import Button from "./button";
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Node,
    Edge,
    Background,
    BackgroundVariant,
  } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { WIDTH, HEIGHT } from "../shared/constants";


const nodeDefaults = {
    style: {
      borderRadius: '100%',
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };


const initialNodes : Node[]  = [
]

const initialEdges : Edge[] = [
]

export default function GraphMap() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [nodeCount, setNodeCount] = useState(0);
    const [removeMode, setRemoveMode] = useState(false);


    function spawnNode(_e : React.MouseEvent<HTMLElement>) {
        setNodeCount(nodeCount + 1);
        setNodes([...nodes, 
            { id: String(nodeCount), position: { x: 200, y: 200 }, data: { label: String(nodeCount) }, ...nodeDefaults }]);
    }

    function removeNode(_e : React.MouseEvent<HTMLElement>) {
        setRemoveMode(!removeMode);
    }

    let mapSize = "w-[" + String(WIDTH) +"px] h-[" + String(HEIGHT) + "px] border-2 border-black";

    return (
        <>
        <div style={{ height: 100, width: 100 }}>
            <Button onClick={spawnNode} text={"Add node"}/>
            <Button onClick={removeNode} text={"Remove node"}/>
        </div>    

        <div className="flex ">
            <div className="flex-none w-64 ">

            </div>

            <div className={mapSize}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onConnect={(params) => setEdges(addEdge(params, edges))}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onEdgeClick={(_event, edge) => setEdges(edges.filter(e => e.id !== edge.id))}
                    onNodeClick={(_event, node) => {
                        if (removeMode){
                            setNodes(nodes.filter(n => n.id !== node.id));
                            setNodeCount(nodeCount - 1);
                        }
                        }}
                    snapToGrid={true}
                    snapGrid={[15, 15]}>
                        <Background variant={BackgroundVariant.Lines}/>
                </ReactFlow>
            
            </div>
            <div className="flex-auto">

            </div>
        </div>
        </>
    );
}