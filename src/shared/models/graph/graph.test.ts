import Graph from "./graph";
import { Node, Edge } from "@xyflow/react";


let nodes: Node[] = [{ id: "1", data: { "label": "1" }, position: { x: 1, y: 2 } }, { id: "2", data: { "label": "2" }, position: { x: 1, y: 2 } }];
let edges: Edge[] = [{ id: "1-2", source: "1", target: "2" }];

let g: Graph = new Graph(nodes, edges);



describe("Plain graph test", () => {
    test('Get nodes test', () => {
        // get nodes test
        expect(g.get_nodes())
            .toStrictEqual(["1", "2"]);
    })
    test('Start node test', () => {
        // get nodes test
        expect(g.get_start_node())
        .toBe("1");
    })
    test('Neighbours test', () => {
        // get nodes test
        expect(g.get_neighbours(g.get_start_node()))
        .toStrictEqual(["2"]);
    })
    test('Edge conversion', () => {
        // get nodes test
        expect(g.get_edges())
        .toStrictEqual(new Map<string, string[]>([
            ["1", ["2"]],
            ["2", ["1"]]
        ]))
    })
    test('Edge length', () => {
        // get nodes test
        expect(g.get_edge_count())
        .toStrictEqual(1);
    })
})