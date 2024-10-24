import { useState } from "react";
import { AppState } from "../../../../../shared/types/interactive_types";
import { mocked_graphs } from "./mock_data/mock_graph";
import { mockNames } from "./mock_data/mock_names";
import { useReactFlow } from "@xyflow/react";
import RandomSpawner from "./random_spawner/random_spawner";
import Dropdown from "../../../../utility/atoms/dropdown/dropdown";
import useStore from "../../../store/store";
import { useShallow } from "zustand/shallow";


const selector = (state: AppState) => ({
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setModifyMode: state.setModifyMode,
    setIsDirected: state.setIsDirected,
});

export default function GraphSpawner() {
    const { setNodes, setEdges, setModifyMode, setIsDirected } = useStore(useShallow(selector));

    const [selectedValue, setSelectedValue] = useState(-1);
    const reactFlow = useReactFlow();

    const fit_view = () => {
        reactFlow.fitView();
    }    

    const onChange = (event: any) => {
        const chosen = mocked_graphs[event.target.value];
        if (!chosen){
            return;
        }
        setSelectedValue(event.target.value)
        setEdges(chosen.edges);
        setNodes(chosen.nodes);
        setTimeout(fit_view);
        setModifyMode(true);
        setIsDirected(false);
    }

    return (
        <div className="flex flex-col px-5 py-2 justify-center items-center col">
            <div>
                <Dropdown selectedValue={selectedValue} handleChange={onChange} obj={mockNames} />
            </div>
            <div className="flex flex-col">
                <RandomSpawner selectedValue={selectedValue} />
            </div>
        </div>
    );
}