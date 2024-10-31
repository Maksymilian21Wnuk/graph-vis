import { useState } from "react";
import { AppState } from "../../../../../shared/types/graph_map_types";
import { mocked_graphs } from "./mock_data/mock_graph";
import { mocked_names } from "./mock_data/mock_names";
import { useReactFlow } from "@xyflow/react";
import RandomSpawner from "./random_spawner/random_spawner";
import useStore from "../../../store/store";
import { useShallow } from "zustand/shallow";
import check_weighted from "../../functions/check_weighted";
import check_undirected from "../../functions/check_directed";
import Button from "../../../../utility/atoms/button/button";
import SpawnerModal from "./spawner_modal/spawner_modal";


const selector = (state: AppState) => ({
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setModifyMode: state.setModifyMode,
    setIsDirected: state.setIsDirected,
    setIsWeighted: state.setIsWeighted,
});

export default function GraphSpawner() {
    const { setNodes, setEdges, setModifyMode, setIsDirected, setIsWeighted } = useStore(useShallow(selector));

    const [graphPresets] = useState(mocked_graphs);
    const [graphNames] = useState(mocked_names);
    const [showRandom, setShowRandom] = useState(false);
    const reactFlow = useReactFlow();

    const fit_view = () => {
        reactFlow.fitView();
    }    

    const changeGraph = (idx : number) : void => {
        const chosen = graphPresets[idx];
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

    const onClick = () => {
        (document.getElementById('spawner_modal') as HTMLDialogElement).showModal();
    }

    return (
        <div className="flex flex-col px-5 py-2 justify-center items-center col">
            <div>
                <Button onClick={onClick} text="Graphs" style="w-72" />
                <SpawnerModal setShowRandom={setShowRandom} onClose={changeGraph} graph_names={graphNames} />
            </div>
            <div className="flex flex-col">
                {showRandom ? <RandomSpawner /> : null}
            </div>
        </div>
    );
}