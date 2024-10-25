import { ReactFlow, Rect, useReactFlow } from "@xyflow/react";
import useStore, { BinaryTreeState } from "./store/store";
import { useShallow } from "zustand/shallow";

const selector = (state: BinaryTreeState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onConnect: state.onConnect
});

export default function BinaryTreesMap() {
    const { nodes, edges, onConnect } = useStore(useShallow(selector));

    const reactFlow = useReactFlow();

    const nodeChange = () => {
        reactFlow.fitView();
    }

    return (
        <div className="bg-white w-screen md:w-3/5 max-auto h-[400px] font-sans border border-black">
            <ReactFlow
                onConnect={onConnect}
                nodes={nodes}
                onNodesChange={nodeChange}
                edges={edges}
                draggable={false}
                snapToGrid={true}
                snapGrid={[15, 15]}>
            </ReactFlow>
        </div>
    )
}