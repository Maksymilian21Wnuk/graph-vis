import { Node, Edge } from "@xyflow/react";
import { Step } from "../types/graph_types";

export default class Graph{
    edges : Map<string, string[]>;
    nodes : string[];
    start_node : string;
    steps : Step[];

    constructor(start_node_id? : string, nodes?: Node[], edges?: Edge[]){
        this.edges = new Map<string, string[]>();
        this.nodes = [];
        this.start_node = "1";
        this.steps = [];

        if (nodes && edges && start_node_id){
            this.edges = convert_flow(edges);
            this.nodes = nodes.map((node : Node) => node.id);
            this.start_node = nodes?.find((n : Node) => n.id = start_node_id)!.id;
        }
    }

    get_neighbours(node : string) : string[]{
        return this.edges.get(node) || [];
    }

    add_step(step : Step) : void {
        this.steps.push(step);
    }

    get_steps() : Step[] {
        return this.steps;
    }

    get_node_count() : number {
        return this.nodes.length;
    }

}


function convert_flow(edges : Edge[]) : Map<string, string[]>{
    const neighbours = new Map<string, string[]>();
    for (let edge of edges){
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