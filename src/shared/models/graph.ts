import { Node, Edge } from "@xyflow/react";



export default class Graph{
    edges : Map<string, string[]>;
    nodes : string[];

    constructor(nodes?: Node[], edges?: Edge[]){
        this.edges = new Map<string, string[]>();
        this.nodes = [];
        if (nodes && edges){
            this.edges = convert_flow(edges);
            this.nodes = nodes.map((node : Node) => node.id);
        }
    }

    get_neighbours(node : string) : string[]{
        return this.edges.get(node) || [];
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