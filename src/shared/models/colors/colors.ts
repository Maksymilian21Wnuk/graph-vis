

type NodeId = string;
type Color = string;


export default class Colors {
    private colors_preset : Color[] = ["#8fd9fb", "#5ce65c"];
    private color_map : Map<NodeId, Color>;
    private error_color : Color = "pink";
    
    constructor(color_map? : Map<NodeId, Color>) {
        this.color_map = new Map<NodeId, Color>();
        if (color_map) {
            this.color_map = color_map;
        }
    }

    set_color(id : NodeId, idx : number) : void {
        if (idx > this.colors_preset.length || idx < 0) {
            this.color_map.set(id, this.error_color);
        }
        else{
            this.color_map.set(id, this.colors_preset[idx]);
        }
    }

    get_color(id : NodeId) : Color {
        return this.color_map.get(id)!;
    }

    get_colors_map() : Map<NodeId, Color> {
        return this.color_map;
    }

    clone() : Colors {
        return new Colors(this.color_map);
    }
}