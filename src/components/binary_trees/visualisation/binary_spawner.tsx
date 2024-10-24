import { BinaryTreeState } from "../store/store";
import useStore from "../store/store"
import { useShallow } from "zustand/shallow";
import NodeSpawner from "./spawner/node_spawner";

const selector = (state: BinaryTreeState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    onConnect: state.onConnect,
});

export default function BinaryTreesVisualisation() {

    return (
        <div className="w-1/5 p-2">
            <NodeSpawner />
        </div>
    )
}