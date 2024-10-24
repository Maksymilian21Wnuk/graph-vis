import { ReactFlowProvider } from "@xyflow/react";
import BinaryTreesMap from "../components/binary_trees/binary_trees";
import BinaryTreesDescription from "../components/binary_trees/description/binary_trees_description";
import BinaryTreesVisualisation from "../components/binary_trees/visualisation/binary_spawner";




export default function BinaryTreesPage() {
    return (
        <div className="min-h-page flex justify-center p-5">
            <BinaryTreesDescription />
            <ReactFlowProvider>
                <BinaryTreesMap />
                <BinaryTreesVisualisation />
            </ReactFlowProvider>
        </div>
    )
}