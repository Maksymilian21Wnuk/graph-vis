import { Edge } from "@xyflow/react";
import { useState } from "react";

// this component returns a popup whenever edge is clicked when
// its add mode and graph is weighted
// it allows to change edge's weight


interface EdgePopupInterface {
    updateEdge : (id: string, edgeUpdate: Partial<Edge> | ((edge: Edge) => Partial<Edge>), options?: { replace: boolean; } | undefined) => void;
    edge_to_change: Edge;
}

export default function EdgePopup({updateEdge, edge_to_change} : EdgePopupInterface) {
    const [inputVal, setInputVal] = useState("");

    const onClick = () => {
        if (inputVal === ""){
            updateEdge(edge_to_change.id, {label: "0"});
        }
        else{
            updateEdge(edge_to_change.id, {label: inputVal});
        }
        setInputVal("");
    }

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }

    return (
        <dialog id="edge_modal" className="modal">
            <div className="modal-box text-black">
                <p className="py-4">Weight: </p>
                <input type="text" onChange={onChange} className="input border border-black"></input>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={onClick} className="btn">Set</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}