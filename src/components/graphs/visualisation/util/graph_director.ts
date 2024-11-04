import { GraphAbstract, Guard } from "../../../../shared/types/visualisation_types";
import Graph from "../../../../shared/models/graph/graph";
import TreeGraph from "../../../../shared/models/tree_graph/tree_graph";
import WeightedGraph from "../../../../shared/models/weighted_graph/weighted_graph";
import DirectedGraph from "../../../../shared/models/directed_graph/directed_graph";
import { Edge, Node } from "@xyflow/react";



export default function graph_director(guard : Guard, nodes : Node[], edges : Edge[]) : GraphAbstract | null {
    if (guard.directed && guard.undirected || guard.directed && guard.tree) {
        return null;
    }
    else if (guard.directed || !(guard.undirected || guard.tree)){
        return new DirectedGraph(nodes, edges);
    }
    else if (guard.tree){
        return new TreeGraph(nodes, edges);
    }
    else if (guard.weighted) {
        return new WeightedGraph(nodes, edges);
    }
    else {
        return new Graph(nodes, edges);
    }

}