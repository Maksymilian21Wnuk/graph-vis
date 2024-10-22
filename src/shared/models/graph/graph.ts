import { Node, Edge } from "@xyflow/react";
import { Step } from "../../types/graph_types";
import { Queue } from "queue-typescript";

interface GraphEdge {
    source : string;
    dest : string;
}

export default class Graph{
    protected edges : Map<string, string[]>;
    protected nodes : string[];
    protected start_node : string;
    protected steps : Queue<Step>;

    constructor(start_node_id? : string, nodes?: Node[], edges?: Edge[]){
        this.edges = new Map<string, string[]>();
        this.nodes = [];
        this.start_node = "1";
        this.steps = new Queue<Step>();

        if (nodes && edges && start_node_id){
            this.edges = this.convert_flow(edges);
            this.nodes = nodes.map((node : Node) => node.id);
            this.start_node = nodes?.find((n : Node) => n.id = start_node_id)!.id;
        }
    }

    // function for converting react flow representation
    // to graph grepresentation
    protected convert_flow(edges : Edge[]) : Map<string, string[]>{
        let neighbours = new Map<string, string[]>();
        for (const edge of edges){
            if (neighbours.has(edge.source)){
                neighbours.set(edge.source, [...neighbours.get(edge.source)!, edge.target]);
            }
            else{
                neighbours.set(edge.source, [edge.target]);
            }
    
            if (neighbours.has(edge.target)){
                neighbours.set(edge.target, [...neighbours.get(edge.target)!, edge.source]);
            }
            else{
                neighbours.set(edge.target, [edge.source]);
            }
        }
    
        return neighbours;
    
    }

    create_edge(v1 : string, v2 : string) : GraphEdge {
        return parseInt(v1) > parseInt(v2) ? {source : v1, dest : v2} : {source : v2, dest : v1};
    }

    get_neighbours(node : string) : string[]{
        return this.edges.get(node) || [];
    }

    add_step(step : Step) : void {
        this.steps.enqueue(step);
    }

    get_steps() : Step {
        return this.steps || [];
    }

    get_node_count() : number {
        return this.nodes.length;
    }

    get_start_node() : string {
        return this.start_node;
    }

    get_nodes() : string[] {
        return this.nodes;
    }

    get_edges() : Map<string, string[]> {
        return this.edges;
    }

}


