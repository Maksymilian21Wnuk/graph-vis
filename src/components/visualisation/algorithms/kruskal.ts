import WeightedGraph from "../../../shared/models/weighted_graph";
import { Step } from "../../../shared/types/graph_types";
import { DisjointSet } from "disjoint-set-ds/dist";


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
    let edges : Edge[] = [];

    // initialization of disjoint set O(E + V)
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
    edges = sort_edges(edges);
    let result : Edge[] = [];

    for (const e of edges) {
        if (disjoint_set.find(e.source) != disjoint_set.find(e.dest)){
            disjoint_set.union(e.source, e.dest);
            result.push(e);
            g.add_step({source_node : e.source, edges : [e.dest], nodes : [e.dest, e.source]});
        }
        else{
            console.log("Forms cycle");
        }
    }

    g.add_step({msg : "Minimum spanning tree finished"})
    
    return g.get_steps();
}