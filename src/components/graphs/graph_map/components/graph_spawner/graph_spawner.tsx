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
import storage_get_graphs from "./functions/local_get_graphs";
import reset_node_color from "../../../util/reset_node_color";
import reset_edge_color from "../../../util/reset_edge_color";
import storage_exists from "./functions/local_exists";

const selector = (state: AppState) => ({
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setModifyMode: state.setModifyMode,
    setIsDirected: state.setIsDirected,
    setIsWeighted: state.setIsWeighted,
    edges: state.edges,
    nodes: state.nodes
});


/**
 * 
 * @returns Component used for spawning presets of graph
 * defined either by user (saved in local storage),
 * by spawning randomly or by selecting one of prepared
 * graph presets
 */
export default function GraphSpawner() {
    const { setNodes, setEdges, setModifyMode, setIsDirected, setIsWeighted, nodes, edges } = useStore(useShallow(selector));

    const [graphPresets, setGraphPresets] = useState([...graph_preset, ...storage_get_graphs()]);
    const [showRandom, setShowRandom] = useState(false);
    const reactFlow = useReactFlow();
    const [graphName, setGraphName] = useState("");


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (graphName === "") {
            alert("Graph name must not be empty")
        }
        else {
            const nodes_to_save = reset_node_color(nodes);
            const edges_to_save = reset_edge_color(edges);
            setGraphName("");
            // check if name exists
            if (storage_exists(graphName)) {
                setGraphPresets([...graphPresets.filter(g => g.name !== graphName), { name: graphName, nodes: nodes_to_save, edges: edges_to_save }])
            }
            else{
                setGraphPresets([...graphPresets, { name: graphName, nodes: nodes_to_save, edges: edges_to_save }])

            }
            localStorage.setItem(graphName, JSON.stringify({ nodes: nodes_to_save, edges: edges_to_save }));
        }

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

    const onRemove = (idx: number) => {
        const key = graphPresets[idx].name;
        localStorage.removeItem(key);
        setGraphPresets([...graphPresets.filter(g => g.name !== key)]);
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
                        placeholder="Graph name..." />
                    <button className="btn" type="submit">Save</button>
                </form>
                <SpawnerModal setShowRandom={setShowRandom} onClose={changeGraph} graph_names={graphPresets} onRemove={onRemove} />
            </div>
            <div className="flex flex-col">
                {showRandom ? <RandomSpawner /> : null}
            </div>
        </div>
    );
}