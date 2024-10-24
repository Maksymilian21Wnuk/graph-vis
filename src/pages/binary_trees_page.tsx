import { ReactFlowProvider } from "@xyflow/react";
import BinaryTrees from "../components/binary_trees/binary_trees";
import BinaryTreesSpawner from "../components/binary_trees/components/spawner/binary_spawner";
import BinaryTreesDescription from "../components/binary_trees/components/description/binary_trees_description";




export default function BinaryTreesPage() {
    return (
        <div className="min-h-page">
            <BinaryTreesDescription />
            <ReactFlowProvider>
                <BinaryTrees />
                <BinaryTreesSpawner />
            </ReactFlowProvider>
        </div>
    )
}