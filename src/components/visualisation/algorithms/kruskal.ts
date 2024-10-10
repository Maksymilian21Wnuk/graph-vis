import WeightedGraph from "../../../shared/models/weighted_graph";
import { Step } from "../../../shared/types/graph_types";
import { DisjointSet } from "disjoint-set-ds/dist";
import parse_additional from "./utility/parse_additional";


interface Edge {
    source : string;
    dest : string;
    value : number;
}

function sort_edges(edges : Edge[]) : Edge[] {
    return edges.sort((e1 : Edge, e2 : Edge) => e1.value - e2.value);
}



export default function kruskal(g : WeightedGraph) : Step[]{
    let disjoint_set = new DisjointSet<string>();
    // array as object for type checking
    let edges : Edge[] = new Array<Edge>();
    
    // initialization of disjoint set O(E + V)
    g.add_step({step_idx: 0})
    for (const node of g.get_nodes()){
        disjoint_set.makeSet(node);
        // initialization of array of edge values
        // important for sorting value array
        const neighbours = g.get_neighbours(node);
        for (const nei of neighbours){
            // trick for not doubling edges
            if (parseInt(node) > parseInt(nei)){
                edges.push({source : node, dest : nei, value : g.get_weight(node, nei)!});
            }
        }
    }

    // sort edges nlogn
    g.add_step({step_idx: 0})
    edges = sort_edges(edges);
    let result : Edge[] = [];

    for (const e of edges) {
        if (disjoint_set.find(e.source) != disjoint_set.find(e.dest)){
            disjoint_set.union(e.source, e.dest);
            result.push(e);
            g.add_step({source_node : e.source, edges : [e.dest], nodes : [e.dest, e.source], should_color_visited: true,
                step_idx: 1
            }
            );
        }
        else{
            g.add_step({nodes : [e.dest, e.source], 
                step_idx: 2
            });
        }
    }
    g.add_step({step_idx: 3})
    g.add_step({step_idx: 4})

    return g.get_steps();
}