

type NodeId = string;

/**
 * Pair that holds number, which 
 * is abstraction to color
 * in graph algorithms, and string
 * which is used for proper visualisation
 * in page
 */
type Color = [number, string];

const INITIAL_COLORS : Color[] = [[0, "#8fd9fb"], [1, "#5ce65c"], 
            [2, "#f28b82"], [3, "#dabcff"], 
            [4, "#a77de8"], [5, "#ffb3ba"], 
            [6, "#ffcccb"], [7, "#c3e88d"], 
            [8, "#74b9ff"], [9, "#ff7675"]];

/**
 * Class for algorithms
 * that needs vertice coloring
 * Colors currently supports 10 colors, in case of coloring vertices for
 * more than 10 colors, next vertices will be colored white
 */

export default class Colors {
    private colors_preset : Color[] = INITIAL_COLORS;
    private color_map : Map<NodeId, Color>;
    private not_colored : Color = [-1, "white"];
    private generator : Generator<number, undefined, number>;
    public length = INITIAL_COLORS.length;
    static NOT_COLORED_ID = -1;
    /**

     * @param color_map additional argument for previously initiated map color
     * @param colors_preset colors preset for extending current colors preset
     */
    constructor(color_map? : Map<NodeId, Color>, colors_preset? : Color[]) {
        this.color_map = new Map<NodeId, Color>();
        this.generator = this.colors_generator();
        if (color_map) {
            this.color_map = new Map(color_map);
        }
        if (colors_preset){
            this.colors_preset = colors_preset;
            this.length = colors_preset.length;
        }
    }
    /**
     * 
     * @param id id of node
     * @param color color usually indicated by number in algorithm
     */
    set_color(id : NodeId, color : number) : void {
        if (color > this.colors_preset.length || color < 0) {
            this.color_map.set(id, this.not_colored);
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
        if (this.color_map.get(id)){
            return this.color_map.get(id)![0];
        }
        else{
            return Colors.NOT_COLORED_ID;
        }
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

    private *colors_generator() : Generator<number, undefined, number> {
        for (let i = 0; i < this.colors_preset.length; i++) {
            yield this.colors_preset[i][0];
        }
        while(1){
            yield this.not_colored[0];
        }
    }

    next_color() : number {
        return this.generator.next().value!;
    }

    get_not_colored() : number {
        return Colors.NOT_COLORED_ID;
    }
}