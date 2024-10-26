import WeightedGraph from "../weighted_graph/weighted_graph";
import { Node, Edge } from "@xyflow/react";




export class TreeGraph extends WeightedGraph {

    constructor(start_node_id?: string, nodes?: Node[], edges?: Edge[]) {
        super(start_node_id, nodes, edges);
        this.is_tree = this.tree_check();
    }

    private dfs_cycle(node : string, parent : string | null, visited : Set<string>) : boolean {
        visited.add(node);
        for (const nei of this.get_neighbours(node)) {
            if (!visited.has(nei)) {
                if (this.dfs_cycle(nei, node, visited)) {
                    return true
                }
            }
            else if (nei !== parent) {
                return true
            }
        }

        return false;
    }

    private tree_check() : boolean {
        if (this.get_node_count() - 1 !== this.get_edge_count()) {
            return false;

        }

        return !this.dfs_cycle(this.get_start_node(), null, new Set<string>());
    }

}