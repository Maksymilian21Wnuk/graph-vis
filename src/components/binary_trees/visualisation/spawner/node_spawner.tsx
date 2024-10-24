import { useState } from "react";
import { BinaryTreeState } from "../../store/store";
import useStore from "../../store/store";
import { useShallow } from "zustand/shallow";
import InputSpawner from "./input_spawner";

const selector = (state: BinaryTreeState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
});

export default function NodeSpawner() {
    const { nodes, edges, setNodes, setEdges } = useStore(useShallow(selector));

    return (
        <div>
            <InputSpawner nodes={nodes} setNodes={setNodes} setEdges={setEdges} edges={edges} />
        </div>
    )
}
