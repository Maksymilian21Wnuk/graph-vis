import { useState } from "react";
import DirectedGraph from "../../../../../../shared/models/directed_graph/directed_graph";
import Dropdown from "../../../../../utility/atoms/dropdown/dropdown";
import AdjacencyList from "../adjacency/adjacency_list";
import CodeRepresentation from "../code/code";
import MatrixRepresentation from "../matrix/matrix";
import DescNames from "../../../../../../shared/interfaces/desc_names.interface";



interface RepresentationInterface {
    graph: DirectedGraph;
}

const structures: DescNames[] = [{ name: "Adjacency List" }, { name: "Adjacency Matrix" }, { name: "Python Representation" }];


export default function Representation({ graph }: RepresentationInterface) {
    const [selectedVal, setSelectedVal] = useState(0);

    const onChange = (event: any) => {
        setSelectedVal(parseInt(event.target.value));
    }
    
    return (
        <>
            <div className="pb-5">
                <Dropdown selectedValue={selectedVal} handleChange={onChange} obj={structures} />
            </div>
            <div className={selectedVal === 0 ? "" : "hidden"}>
                <AdjacencyList graph={graph} />
            </div>
            <div className={selectedVal === 1 ? "" : "hidden"}>
                <MatrixRepresentation graph={graph} />
            </div>
            <div className={selectedVal === 2 ? "" : "hidden"}>
                <CodeRepresentation graph={graph} />
            </div>
        </>
    )
}