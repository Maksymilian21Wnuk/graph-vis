import { ColorizeNodes } from "../../../../shared/types/graph_types";


const BLUE = false;
const RED = true;

// given color map return its representation for visualisation
export default function colorize_binary(color_map : Map<string, boolean>) : ColorizeNodes {
    let colorize : ColorizeNodes = [{color: "#8fd9fb", nodes: []}, {color:"#5ce65c", nodes: []}];
    color_map.forEach((v : boolean, k : string) => {
        if (v == BLUE){
            colorize[0].nodes.push(k);
        }
        else{
            colorize[1].nodes.push(k);
        }
    })
    return colorize;
}