import { GraphName } from "../../../../../../shared/types/graph_map_types";




export default function local_storage_get_names() : GraphName[] {
    let graph_names : GraphName[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        graph_names.push({name : localStorage.key(i)!});
    }

    return graph_names;
}