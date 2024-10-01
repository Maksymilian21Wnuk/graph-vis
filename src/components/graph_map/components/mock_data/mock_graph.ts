import { Graph } from "../../../../shared/types/interactive_types";
import { nodeDefaultStyle } from "../../../../shared/constants";

const graphs : Map<string, Graph> = new Map<string, Graph>(
    [["0", {
        nodes: [
            { id: "1", position: { x:300, y: 200}, data: { label: "1" }, ...nodeDefaultStyle},
            { id: "2", position: { x:300, y: 200}, data: { label: "2" }, ...nodeDefaultStyle},
            { id: "3", position: { x:300, y: 200}, data: { label: "3" }, ...nodeDefaultStyle},
            { id: "4", position: { x:300, y: 200}, data: { label: "4" }, ...nodeDefaultStyle},
            { id: "5", position: { x:300, y: 200}, data: { label: "5" }, ...nodeDefaultStyle},
            { id: "6", position: { x:300, y: 200}, data: { label: "6" }, ...nodeDefaultStyle},
            { id: "7", position: { x:300, y: 200}, data: { label: "7" }, ...nodeDefaultStyle}

        ],
        edges: [
            { id: "4-6", source: "4", target: "6"},
            { id: "4-5", source: "4", target: "5"},
            { id: "1-3", source: "1", target: "3"},
            { id: "2-3", source: "2", target: "3"},
            { id: "3-7", source: "3", target: "7"},
            { id: "4-7", source: "4", target: "7"}
        ]
    }
    ]]
);