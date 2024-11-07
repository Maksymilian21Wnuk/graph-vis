import { Node, Edge } from "@xyflow/react";
import DirectedGraph from "./directed_graph";
import { Weight } from "../../enumerations/enums";
import { ARROW_SVG_ID } from "../../constants";


const nodes: Node[] = [{ id: "1", data: { "label": "1" }, position: { x: 1, y: 2 } }, { id: "2", data: { "label": "2" }, position: { x: 1, y: 2 } }];
const non_weighted_edges: Edge[] = [{ id: "1-2", source: "1", target: "2", label: Weight.UNWEIGHTED}];
const weighted_edges: Edge[] = [{ id: "1-2", source: "1", target: "2", label: 42 }];

const directed_edges: Edge[] = [{ id: "1-2", source: "1", target: "2", label: 42, markerEnd: ARROW_SVG_ID }];


const not_weighted: DirectedGraph = new DirectedGraph(nodes, non_weighted_edges);
const weighted: DirectedGraph = new DirectedGraph(nodes, weighted_edges);
const directed: DirectedGraph = new DirectedGraph(nodes, directed_edges);
let directed_transposed : DirectedGraph = new DirectedGraph(nodes, directed_edges);
directed_transposed.transpose()


describe("Weighted graph test", () => {
    test("Should not be directed", () => {  
        expect(weighted.get_is_directed() || not_weighted.get_is_directed())
            .toBe(false);
    });
    test("Should be directed", () => {
        expect(directed.get_is_directed())
            .toBe(true);
    });

    test("Should be transposed", () => {
        expect(directed_transposed.get_neighbours("2"))
            .toStrictEqual(["1"])
    })


})