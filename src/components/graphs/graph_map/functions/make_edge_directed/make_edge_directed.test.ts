import { Edge } from "@xyflow/react";
import { ARROW_SVG_ID, NO_ARROW } from "../../../../../shared/constants";
import make_edge_directed from "./make_edge_directed";


const undirected: Edge = { id: "1-2", source: "1", target: "2", label: 42, markerEnd: NO_ARROW };
const undirected_no_marker: Edge = { id: "1-2", source: "1", target: "2", label: 42 };

const directed_possibility1 = { id: "1-2", source: "1", target: "2", label: 42, markerEnd: ARROW_SVG_ID }
const directed_possibility2 = { id: "2-1", source: "2", target: "1", label: 42, markerEnd: ARROW_SVG_ID }
/**
 * because of randomness output must
 * contain one of possibilities
 */
describe("Making edge directed tests", () => {
    test(`Undirected with marker`, () => {
        const e : Edge = make_edge_directed(undirected);

    })

    test(`Undirected without marker`, () => {
        const e = make_edge_directed(undirected_no_marker);
    })

})