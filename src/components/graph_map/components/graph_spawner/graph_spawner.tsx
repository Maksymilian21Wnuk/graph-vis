import { useState } from "react";
import { GraphName } from "../../../../shared/types/interactive_types";
import { mocked_graphs } from "./mock_data/mock_graph";
import { mockNames } from "./mock_data/mock_names";
import { Node, Edge } from "@xyflow/react";
import RandomSpawner from "./random_spawner/random_spawner";
import Dropdown from "../../../utility/atoms/dropdown";

interface GraphSpawnerProps {
    setNodes: (n: Node[]) => void;
    setEdges: (e: Edge[]) => void;
    fit_view: () => void;
    setModifyMode: (mode : boolean) => void;
}


export default function GraphSpawner({ setNodes, setEdges, fit_view, setModifyMode }: GraphSpawnerProps) {

    const [selectedValue, setSelectedValue] = useState(-1);

    

    const onChange = (event: any) => {
        const chosen = mocked_graphs[event.target.value];
        if (!chosen){
            return;
        }
        setSelectedValue(event.target.value)
        setEdges(chosen.edges);
        setNodes(chosen.nodes);
        // is this correct solution?
        setTimeout(fit_view);
        setModifyMode(true);
    }

    return (
        <div className="flex flex-col px-5 py-2 justify-center col">
            <div>
                <Dropdown selectedValue={selectedValue} handleChange={onChange} obj={mockNames} />
            </div>
            <div className="flex flex-col">
                <RandomSpawner selectedValue={selectedValue} />
            </div>
        </div>
    );
}