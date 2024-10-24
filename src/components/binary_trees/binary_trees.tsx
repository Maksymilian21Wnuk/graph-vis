import { ReactFlow } from "@xyflow/react";
import useStore, { BinaryTreeState } from "./store/store";
import { useShallow } from "zustand/shallow";

const selector = (state: BinaryTreeState) => ({
    nodes: state.nodes,
    edges: state.edges,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    onConnect: state.onConnect,
});

export default function BinaryTrees() {
    const {nodes, edges, setNodes, setEdges, onConnect} = useStore(useShallow(selector));

    return (
        <div className="flex justify-center">
            <div className="bg-white w-screen md:w-3/5 max-auto h-[400px] font-sans">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    draggable={false}
                    snapToGrid={true}
                    snapGrid={[15, 15]}>
                </ReactFlow>
            </div>
        </div>
    )
}