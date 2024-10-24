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
        console.log(nodes[nodes.length - 1]);
        const node_to_check = nodes[nodes.length - 1];
        //const r1 : Rect = {width: 10, height: 10, x: node_to_check.position.x + 53, y: node_to_check.position.y + 53};
        const r1 : Rect = {width: 10, height: 10, x: 1000, y: 1000};
        const inter = reactFlow.isNodeIntersecting(node_to_check, r1)
        console.log(inter);
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