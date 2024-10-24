import { ReactFlow } from "@xyflow/react";



export default function BinaryTrees() {
    return (
        <div className="flex justify-center">
            <div className="bg-white w-screen md:w-3/5 max-auto h-[400px] font-sans">
                <ReactFlow
                    snapToGrid={true}
                    snapGrid={[15, 15]}>
                </ReactFlow>
            </div>
        </div>
    )
}