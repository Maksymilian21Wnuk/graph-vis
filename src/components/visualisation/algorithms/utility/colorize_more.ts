// colorize more than 2 colors

import { ColorizeNodes } from "../../../../shared/types/graph_types";


// given color map return its representation for visualisation, key: node value : color
export default function colorize_nodes(color_map : Map<string, string>) : ColorizeNodes {
    let colorize : ColorizeNodes = new Set(color_map.values());

    return colorize;
}