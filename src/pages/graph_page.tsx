import Description from "../components/graphs/description/description"
import GraphSpawner from "../components/graphs/graph_map/components/graph_spawner/graph_spawner"
import GraphMap from "../components/graphs/graph_map/graph_map"
import Visualisation from "../components/graphs/visualisation/visualisation"
import { ReactFlowProvider } from "@xyflow/react"

export default function GraphVisualisationPage() {
    return (
        <div className="animate-appear min-h-screen">
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