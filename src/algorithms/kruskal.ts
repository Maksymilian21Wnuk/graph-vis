import { Steps } from "../shared/types/visualisation_types";
import WeightedGraph from "../shared/models/weighted_graph/weighted_graph";
import { DisjointSetCustom } from "../shared/models/disjoint_set_custom/disjoint_set_custom";


interface Edge {
    source : string;
    dest : string;
    value : number;
}

function sort_edges(edges : Edge[]) : Edge[] {
    return edges.sort((e1 : Edge, e2 : Edge) => e1.value - e2.value);
}


export default function kruskal(g : WeightedGraph) : Steps{
    // initialization of disjoint set O(V)
    let disjoint_set = new DisjointSetCustom(g.get_nodes());
    // array as object for type checking
    let edges : Edge[] = new Array<Edge>();
    
    for (const node of g.get_nodes()){
        // initialization of array of edge values
        // important for sorting value array
        const neighbours = g.get_neighbours(node);
        for (const nei of neighbours){
            // trick for not doubling edges
            if (parseInt(node) > parseInt(nei)){
                edges.push({source : nei, dest : node, value : g.get_weight(node, nei)!});
            }
        }
    }

    // sort edges nlogn
    edges = sort_edges(edges);
    g.add_step({step_idx: 0, additional_name: "Sorted edges: ", additional: edges})

    let result : Edge[] = [];

    let edges_additional : Edge[] = Array.from(edges);

    for (const e of edges) {
        disjoint_set.get_sets();
        // if not in same set append to result and make union
        if (disjoint_set.find(e.source) != disjoint_set.find(e.dest)){
            disjoint_set.union(e.source, e.dest);
            result.push(e);
            g.add_step({source_node : e.source, edges : [e.dest], nodes : [e.dest, e.source], should_color_visited: true,
                step_idx: 1,
                additional_name: "Edges: ", additional: edges_additional,
                additional_snd_name: `Sets`, additional_snd: disjoint_set
            }
            );
        }
        else{
            g.add_step({nodes : [e.dest, e.source], 
                step_idx: 2,
                additional_name: "Creates cycle", additional: edges_additional,
                should_color_visited : true,
                edges: [e.dest],
                source_node: e.source,
                additional_snd_name: `Sets`, additional_snd: disjoint_set
            });
            g.add_step({nodes : [e.dest, e.source], 
                step_idx: 2,
                additional_name: "Edges: ", additional: edges_additional,
                should_color_visited : true,
                edge_removal: true,
                source_node: e.source,
                edges: [e.dest],
                additional_snd_name: `Sets`, additional_snd: disjoint_set
            });
        }
        edges_additional.shift();
    }
    g.add_step({step_idx: 3})
    g.add_step({step_idx: 4})

    return g.get_steps();
}