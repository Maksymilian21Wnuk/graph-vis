import { Edge } from "@xyflow/react";
import { ARROW_SVG_ID, INVISIBLE_ARROW } from "../../../shared/constants";

export default function reset_edge_color(edges: Edge[]): Edge[] {
    return edges.map((e: Edge) => ({
        ...e,
        markerEnd: (e.markerEnd === INVISIBLE_ARROW ? ARROW_SVG_ID : e.markerEnd),
        style: { ...e.style, stroke: 'black' },
        labelStyle: { fill: 'black' }
    }));
}