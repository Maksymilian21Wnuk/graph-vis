import { useState } from "react";
import DirectedGraph from "../../../../../../shared/models/directed_graph/directed_graph";
import AdjacencyList from "../adjacency/adjacency_list";
import CodeRepresentation from "../code/code";
import MatrixRepresentation from "../matrix/matrix";
import StructureTab from "./structure_tab";



interface RepresentationInterface {
    graph: DirectedGraph;
}


export default function Representation({ graph }: RepresentationInterface) {
    const [selectedVal, setSelectedVal] = useState(0);

    return (
        <div className="h-full overflow-auto text-sm lg:text-lg">
            <StructureTab selectedVal={selectedVal} setSelectedVal={setSelectedVal} />
            <div className={selectedVal === 0 ? "overflow-auto h-[200px] lg:h-[350px]" : "hidden"}>
                <AdjacencyList graph={graph} />
            </div>
            <div className={selectedVal === 1 ? "overflow-auto h-[200px] lg:h-[350px]" : "hidden"}>
                <MatrixRepresentation graph={graph} />
            </div>
            <div className={selectedVal === 2 ? "overflow-auto h-[200px] lg:h-[350px]" : "hidden"}>
                <CodeRepresentation graph={graph} />
            </div>
        </div>
    )
}