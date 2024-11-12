import { Edge, Node } from "@xyflow/react";
import DirectedGraph from "../../../../../shared/models/directed_graph/directed_graph";
import { useRef } from "react";
import Representation from "./representation/representation";


interface StructurePopupInterface {
    edges: Edge[],
    nodes: Node[],
    hideStructure: () => void;
}




export default function StructurePopup({ edges, nodes, hideStructure }: StructurePopupInterface) {

    const graph = new DirectedGraph(nodes, edges);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const opacityChange = () => {
        if (modalRef.current) {
            modalRef.current.style.opacity = "0.15";
        }
    }

    const opacityClear = () => {
        if (modalRef.current) {
            modalRef.current.style.opacity = "1";
        }
    }

    return (
        <dialog id="structure_modal" className="modal" open>
            <div ref={modalRef} className="modal-box text-black">
                <div className="grid grid-cols-5">
                    <h1 className="h1-custom col-span-4">
                        Graph representation
                    </h1>
                    <p className="border-2 p-5 rounded-2xl w-fit font-bold bg-lime-200"
                        onMouseOver={opacityChange}
                        onMouseOut={opacityClear}>
                        Hide
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <Representation graph={graph} />
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