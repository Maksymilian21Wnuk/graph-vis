import { Edge } from "@xyflow/react";

export default function reset_edge_color(edges : Edge[]) : Edge[]{
    return edges.map((e : Edge) => ({...e , style : {...e.style, stroke:'black'}}));
}