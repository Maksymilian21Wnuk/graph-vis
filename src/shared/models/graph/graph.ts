import { Node, Edge } from "@xyflow/react";
import { Additional, AdditionalType, PlainEdge, Step, Steps } from "../../types/visualisation_types";
import { Queue } from "queue-typescript";
import { DisjointSetCustom } from "../disjoint_set_custom/disjoint_set_custom";
import get_currently_clicked from "../../../components/utility/functions/get_currently_clicked";


export default class Graph{
    protected edges : Map<string, string[]>;
    protected nodes : string[];
    protected start_node : string;
    protected steps : Steps =  [];
    protected is_directed : boolean = false;
    protected is_weighted : boolean = false;
    protected is_tree : boolean = false;

    constructor(nodes?: Node[], edges?: Edge[]){
        this.edges = new Map<string, string[]>();
        this.nodes = [];
        this.start_node = "1";
        this.steps = [];

        if (nodes && edges){
            this.edges = this.convert_flow(edges);
            this.nodes = nodes.map((node : Node) => node.id);
            this.start_node = get_currently_clicked(nodes);
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

    get_neighbours(node : string) : string[]{
        return this.edges.get(node) || [];
    }

    private add_additional(additional : AdditionalType) : Additional[] {
        let res : Additional[] = [];
        if (!additional) {
            return res;
        }

        else if (additional instanceof Queue) {
            additional.toArray().forEach((element: string) => {
                res.push({ id: element, value: "" })
            });
        }

        else if (additional instanceof Map) {
            additional = new Map([...additional].sort((a, b) => a[1] - b[1]));
            additional.forEach((value: number, key: string) => {
                res.push({ id: key, value: String(value) });
            })
        }
        else if (additional instanceof DisjointSetCustom) {
            additional.get_sets().forEach((value : string[], key : string) => {
                res.push({id: key + `)`, value: value.join(" ")});
            }
        )
        }
    
        // handle set, that is visited
        else if (additional instanceof Set) {
            additional.forEach((value: string) => {
                res.push({ id: value, value: "" });
            })
        }
        // handle stack
        else if (Array.isArray(additional) && additional.every(a => typeof a === 'string')) {
            additional.forEach((value: string) => {
                res.push({ id: value, value: "" });
            })
        }
    
        // handle case of edge type
        else if (Array.isArray(additional)) {
            additional.forEach((edge: PlainEdge) => {
                res.push({ id: `${edge.source}e${edge.dest}`, value: String(edge.value) });
            })
        }
        return res;
    }

    add_step(step : Step) : void {
        step.additional_parsed =  step.additional_parsed ? step.additional_parsed : this.add_additional(step.additional!);
        step.additional_snd_parsed = step.additional_snd_parsed ? step.additional_snd_parsed :this.add_additional(step.additional_snd!);
        step.colorize_nodes = step.colorize_nodes?.clone();
        this.steps.push(step);
    }

    get_steps() : Steps {
        return this.steps;
    }

    get_is_weighted() : boolean {
        return this.is_weighted;
    }

    get_node_count() : number {
        return this.nodes.length;
    }

    get_edge_count() : number { 
        return Array.from(this.edges.values()).reduce((sum, arr) => sum + arr.length, 0) / 2;
    }

    get_start_node() : string {
        return this.start_node;
    }

    get_is_directed() : boolean {
        return this.is_directed;
    }

    get_nodes() : string[] {
        return this.nodes;
    }

    get_is_tree() : boolean {
        return this.is_tree;
    }

    get_edges() : Map<string, string[]> {
        return this.edges;
    }

}


