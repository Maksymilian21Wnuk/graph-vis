import { Node, Edge } from "@xyflow/react";
import WeightedGraph from "./weighted_graph";
import { Weight } from "../../enumerations/enums";


let nodes: Node[] = [{ id: "1", data: { "label": "1" }, position: { x: 1, y: 2 } }, { id: "2", data: { "label": "2" }, position: { x: 1, y: 2 } }];
let non_weighted_edges: Edge[] = [{ id: "1-2", source: "1", target: "2", label: Weight.UNWEIGHTED}];
let weighted_edges: Edge[] = [{ id: "1-2", source: "1", target: "2", label: 42 }];


let not_weighted: WeightedGraph = new WeightedGraph("1", nodes, non_weighted_edges);
let weighted: WeightedGraph = new WeightedGraph("1", nodes, weighted_edges);


describe("Weighted graph test", () => {
    test('Non-weighted guard', () => {
        expect(not_weighted.get_is_weighted())
            .toBe(false);
    });
    test("Weighted guard", () => {
        expect(weighted.get_is_weighted())
            .toBe(true);
    });
    test("Get weight of edge test", () => {
        const given = weighted.get_weight("1", "2");
        expect(given)
            .toBe(42);
        expect(typeof given)
            .toBe("number");
    }

    )
})