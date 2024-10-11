import Description from "../components/description/description"
import GraphSpawner from "../components/graph_map/components/graph_spawner/graph_spawner"
import GraphMap from "../components/graph_map/graph_map"
import Visualisation from "../components/visualisation/visualisation"
import { ReactFlowProvider } from "@xyflow/react"

export default function GraphVisualisation() {
    return (
        <div className="animate-appear">
            <ReactFlowProvider>
                <GraphSpawner />
                <div className="flex justify-center">
                    <Description />
                    <GraphMap />
                </div>
                <Visualisation />
            </ReactFlowProvider>
        </div>
    )
}