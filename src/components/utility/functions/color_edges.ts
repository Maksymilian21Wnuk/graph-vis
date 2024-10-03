import { Edge } from "@xyflow/react";
import { Step } from "../../../shared/types/graph_types";
import { EdgeColor } from "../../../shared/enumerations/enums";


// changes to given color
// this should not color to current when it is visited!
function change_given_id(edges: Edge[], id: string): Edge[] {
    return edges.map((e: Edge) => e.id === id ? {
        ...e,
        style: {
            ...e.style,
            stroke: e.style?.stroke === EdgeColor.VISITED ? EdgeColor.VISITED : EdgeColor.CURRENT
        }
    }
        : e);
}

// function for making previously visited yellow
function change_to_visited(edges: Edge[]): Edge[] {
    return edges.map((e: Edge) => e.style?.stroke === EdgeColor.CURRENT ? { ...e, style: { ...e.style, stroke: EdgeColor.VISITED } } : e);
}

// returns ids to change
function parse_ids(source: string, neighbours: string[]): string[] {
    return neighbours.map((dest: string) => parseInt(source) > parseInt(dest) ? `${dest}-${source}` : `${source}-${dest}`);
}

// step spec: edges is neighbours, source is nei src
export default function colorEdges(step: Step, edges: Edge[]): Edge[] {
    edges = change_to_visited(edges);
    const edges_to_change: string[] = step.edges!;
    const src: string = step.source_node!;
    if (!edges_to_change && !src) {
        return edges;
    }
    const ids: string[] = parse_ids(src, edges_to_change);
    console.log(ids);
    for (const id of ids) {
        edges = change_given_id(edges, id);
    }

    return edges;
}