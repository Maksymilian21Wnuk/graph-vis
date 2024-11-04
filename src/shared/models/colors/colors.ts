

type NodeId = string;

/**
 * Pair that holds number, which 
 * is abstraction to color
 * in graph algorithms, and string
 * which is used for proper visualisation
 * in page
 */
type Color = [number, string];

/**
 * Class for algorithms
 * that needs vertice coloring
 * Colors currently supports 10 colors, in case of coloring vertices for
 * more than 10 colors, next vertices will be colored black
 */

export default class Colors {
    private colors_preset : Color[] = [[0, "#8fd9fb"], [1, "#5ce65c"]];
    private color_map : Map<NodeId, Color>;
    private error_color : Color = [-1, "black"];
    
    /**

     * @param color_map additional argument for previously initiated map color
     * @param colors_preset colors preset for extending current colors preset
     */
    constructor(color_map? : Map<NodeId, Color>, colors_preset? : Color[]) {
        this.color_map = new Map<NodeId, Color>();
        if (color_map) {
            this.color_map = new Map(color_map);
        }
        if (colors_preset){
            this.colors_preset = colors_preset;
        }
    }
    /**
     * 
     * @param id id of node
     * @param color color usually indicated by number in algorithm
     */
    set_color(id : NodeId, color : number) : void {
        if (color > this.colors_preset.length || color < 0) {
            this.color_map.set(id, this.error_color);
        }
        else{
            this.color_map.set(id, this.colors_preset[color]);
        }
    }

    /**
     * getter for color of given id
     * @param id id of node
     * @returns current color string representation
     */
    get_color(id : NodeId) : number {
        return this.color_map.get(id)![0];
    }

    /**
     * get map of colors
     * @returns map which key is node id and value color
     */
    get_colors_map() : Map<NodeId, Color> {
        return this.color_map;
    }

    /**
     * cloning method for Colors class
     * @returns new cloned Colors instance
     */
    clone() : Colors {
        return new Colors(new Map(this.color_map));
    }
}