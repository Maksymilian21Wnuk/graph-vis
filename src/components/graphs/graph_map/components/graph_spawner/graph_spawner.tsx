import { FormEvent, useState } from "react";
import { AppState } from "../../../../../shared/types/graph_map_types";
import { graph_preset } from "./preset/graph_preset";
import { useReactFlow } from "@xyflow/react";
import RandomSpawner from "./random_spawner/random_spawner";
import useStore from "../../../store/store";
import { useShallow } from "zustand/shallow";
import check_weighted from "../../functions/check_weighted";
import check_undirected from "../../functions/check_directed";
import Button from "../../../../utility/atoms/button/button";
import SpawnerModal from "./spawner_modal/spawner_modal";
import storage_get_graphs from "./functions/storage_get_graphs";

const selector = (state: AppState) => ({
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setModifyMode: state.setModifyMode,
    setIsDirected: state.setIsDirected,
    setIsWeighted: state.setIsWeighted,
    edges: state.edges,
    nodes: state.nodes
});

export default function GraphSpawner() {
    const { setNodes, setEdges, setModifyMode, setIsDirected, setIsWeighted, nodes, edges } = useStore(useShallow(selector));

    const [graphPresets, setGraphPresets] = useState([...graph_preset, ...storage_get_graphs()]);
    const [showRandom, setShowRandom] = useState(false);
    const reactFlow = useReactFlow();
    const [graphName, setGraphName] = useState("");


    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        localStorage.setItem(graphName, JSON.stringify({ nodes: nodes, edges: edges }));
        setGraphPresets([...graphPresets, {name: graphName, nodes: nodes, edges: edges }])
        setGraphName("");
    }

    const fit_view = () => {
        reactFlow.fitView();
    }

    const changeGraph = (idx: number): void => {
        const chosen = graphPresets[idx];
        console.log(idx)
        setEdges(chosen.edges);
        setNodes(chosen.nodes);
        // additional checks for state change
        if (check_weighted(chosen.edges)) {
            setIsWeighted(true);
        }
        else {
            setIsWeighted(false);
        }

        if (check_undirected(chosen.edges)) {
            setIsDirected(false);
        }
        else {
            setIsDirected(true);
        }
        setTimeout(fit_view);
        setModifyMode(true);
    }

    const onClick = () => {
        (document.getElementById('spawner_modal') as HTMLDialogElement).showModal();
    }

    return (
        <div className="flex flex-col px-5 py-2 justify-center items-center">
            <div className="pl-36">
                <Button onClick={onClick} text="Graphs" style="w-72" />
                <form onSubmit={handleSubmit}>
                    <input className="input border-2 border-black"
                            type="text"
                            value={graphName}
                            onChange={(e) => setGraphName(e.target.value)}
                            placeholder="Graph name..."/>
                    <button className="btn" type="submit">Save</button>
                </form>
                <SpawnerModal setShowRandom={setShowRandom} onClose={changeGraph} graph_names={graphPresets} />
            </div>
            <div className="flex flex-col">
                {showRandom ? <RandomSpawner /> : null}
            </div>
        </div>
    );
}