import { useState } from "react";
import { AppState } from "../../../../../shared/types/graph_map_types";
import { mocked_graphs } from "./mock_data/mock_graph";
import { mocked_names } from "./mock_data/mock_names";
import { useReactFlow } from "@xyflow/react";
import RandomSpawner from "./random_spawner/random_spawner";
import Dropdown from "../../../../utility/atoms/dropdown/dropdown";
import useStore from "../../../store/store";
import { useShallow } from "zustand/shallow";
import check_weighted from "../../functions/check_weighted";
import check_undirected from "../../functions/check_directed";


const selector = (state: AppState) => ({
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setModifyMode: state.setModifyMode,
    setIsDirected: state.setIsDirected,
    setIsWeighted: state.setIsWeighted,
});

export default function GraphSpawner() {
    const { setNodes, setEdges, setModifyMode, setIsDirected, setIsWeighted } = useStore(useShallow(selector));

    const [selectedValue, setSelectedValue] = useState(-1);
    const [graphPresets] = useState(mocked_graphs);
    const [graphNames] = useState(mocked_names);
    const reactFlow = useReactFlow();

    const fit_view = () => {
        reactFlow.fitView();
    }    

    const onChange = (event: any) => {
        const chosen = graphPresets[event.target.value];
        setSelectedValue(event.target.value)
        setEdges(chosen.edges);
        setNodes(chosen.nodes);
        if (check_weighted(chosen.edges)){
            setIsWeighted(true);
        }
        else{
            setIsWeighted(false);
        }
        
        if (check_undirected(chosen.edges)){
            setIsDirected(false);
        }
        else{
            setIsDirected(true);
        }
        setTimeout(fit_view);
        setModifyMode(true);
    }

    return (
        <div className="flex flex-col px-5 py-2 justify-center items-center col">
            <div>
                <Dropdown selectedValue={selectedValue} handleChange={onChange} obj={graphNames} />
            </div>
            <div className="flex flex-col">
                <RandomSpawner selectedValue={selectedValue} />
            </div>
        </div>
    );
}