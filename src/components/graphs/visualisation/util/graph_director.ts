import { GraphAbstract, Guard } from "../../../../shared/types/visualisation_types";
import Graph from "../../../../shared/models/graph/graph";
import TreeGraph from "../../../../shared/models/tree_graph/tree_graph";
import WeightedGraph from "../../../../shared/models/weighted_graph/weighted_graph";
import DirectedGraph from "../../../../shared/models/directed_graph/directed_graph";
import { Edge, Node } from "@xyflow/react";



export default function graph_director(guard : Guard, currentClicked : string, nodes : Node[], edges : Edge[]) : GraphAbstract {
    if (guard.directed || !guard.undirected){
        return new DirectedGraph(currentClicked, nodes, edges);
    }
    else if (guard.tree){
        return new TreeGraph(currentClicked, nodes, edges);
    }
    else if (guard.weighted) {
        return new WeightedGraph(currentClicked, nodes, edges);
    }
    else {
        return new Graph(currentClicked, nodes, edges);
    }

}