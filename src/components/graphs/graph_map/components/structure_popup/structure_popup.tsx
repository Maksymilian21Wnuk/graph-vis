import { Edge, Node} from "@xyflow/react";
import AdjacencyList from "./adjacency/adjacency_list";
import Code from "./code/code";
import MatrixRepresentation from "./matrix/matrix";
import DirectedGraph from "../../../../../shared/models/directed_graph/directed_graph";
import { useState } from "react";


interface StructurePopupInterface {
    edges: Edge[],
    nodes : Node[],
    hideStructure: () => void;
}


export default function StructurePopup({edges, nodes, hideStructure} : StructurePopupInterface) {

    const [graph] = useState(new DirectedGraph(nodes, edges));

    return (
        <dialog id="structure_modal" className="modal" open>
            <div className="modal-box text-black hover:opacity-25">
                <h1 className="h1-custom"> Graph representation </h1>

                <div className="grid grid-cols-3">
                    <AdjacencyList graph={graph} />
                    <MatrixRepresentation />
                    <Code />
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={hideStructure} className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}