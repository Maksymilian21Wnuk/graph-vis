import { Node, Edge } from "@xyflow/react";
import { Graph } from "../../../shared/types/graph_types";

// given react flow representation give
// representation of graph


export default function convert_flow(nodes : Node[], edges : Edge[]) : Graph{
    const graph : Graph = {
        nodes : nodes.map((node : Node) => node.id),
        edges : nodes.map((edge : Edge) => {return {edge.id, edge.id}})
    }

    return graph;

}

