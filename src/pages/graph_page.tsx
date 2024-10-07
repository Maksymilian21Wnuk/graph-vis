import GraphMap from "../components/graph_map/graph_map"
import Visualisation from "../components/visualisation/visualisation"
import { ReactFlowProvider } from "@xyflow/react"

export default function GraphVisualisation() {
    return (
        <>
            <ReactFlowProvider>
                <GraphMap />
                <Visualisation />
            </ReactFlowProvider>
        </>
    )
}