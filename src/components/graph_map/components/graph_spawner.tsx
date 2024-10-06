import { useState } from "react";
import { GraphName } from "../../../shared/types/interactive_types";
import { mockNames } from "./mock_data/mock_names";
import { Value } from "../../../shared/enumerations/enums";
import { mocked_graphs } from "./mock_data/mock_graph";
import { Node, Edge } from "@xyflow/react";

interface GraphSpawnerProps {
    setNodes : (n : Node[]) => void;
    setEdges : (e : Edge[]) => void;
    fit_view : () => void;
}

export default function GraphSpawner({setNodes, setEdges, fit_view} : GraphSpawnerProps) {

    const [selectedValue, setSelectedValue] = useState(Value.NOT_SELECTED);

    const onChange = (event: any) => {
        const chosen = mocked_graphs[event.target.value];
        setSelectedValue(event.target.value)
        setEdges(chosen.edges);
        setNodes(chosen.nodes);
        // is this correct solution?
        setTimeout(fit_view);
    }

    return (
        <div className="flex justify-center">
            <select className="select select-bordered w-full max-w-xs"
                value={selectedValue} onChange={onChange}>
                {mockNames.map((graph_name: GraphName, i: number = 0) => (<option key={graph_name.name} value={i++}>{graph_name.name}</option>))}
            </select>
        </div>
    );
}