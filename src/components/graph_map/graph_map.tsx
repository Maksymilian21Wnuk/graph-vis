import { useContext, useState } from "react";
import Button from "../utility/button";
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
import { WIDTH, HEIGHT } from "../../shared/constants";
import CodeField from "../code_field/code_field";
import { Context } from "../../App";

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




export default function GraphMap() {
    const [nodeCount, setNodeCount] = useState(0);
    const [removeMode, setRemoveMode] = useState(false);
    const [nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange] = useContext(Context);

    function spawnNode(_e : React.MouseEvent<HTMLElement>) {
        setNodeCount(nodeCount + 1);
        setRemoveMode(false);
        setNodes([...nodes, 
            { id: String(nodeCount), position: { x: WIDTH / 2, y: HEIGHT / 2 }, data: { label: String(nodeCount) }, ...nodeDefaults }]);
    }

    function removeNode(_e : React.MouseEvent<HTMLElement>) {
        setRemoveMode(!removeMode);
    }

    let mapSize = `w-[700px] h-[500px] border-2 border-black`;

    return (
        <>
        <div className="w-[100px] h-[100px]">
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
            <div className="flex-auto px-5">
                <CodeField/>
            </div>
        </div>
        </>
    );
}