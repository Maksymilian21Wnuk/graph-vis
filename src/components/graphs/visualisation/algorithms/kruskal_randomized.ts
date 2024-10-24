import { DisjointSet } from "disjoint-set-ds/dist";
import Graph from "../../../../shared/models/graph/graph"
import { Steps } from "../../../../shared/types/graph_types"

interface Edge {
    source : string;
    dest : string;
    value : number;
}

export default function kruskal_randomized(g : Graph) : Steps {
    let disjoint_set = new DisjointSet<string>();
    // array as object for type checking
    let edges : Edge[] = new Array<Edge>();
    
    // initialization of disjoint set O(E + V)
    g.add_step({step_idx: 0})
    for (const node of g.get_nodes()){
        disjoint_set.makeSet(node);
    }

    let result : Edge[] = [];

    let edges_additional : Edge[] = Array.from(edges);

    for (const e of edges) {
        // if not in same set append to result and make union
        if (disjoint_set.find(e.source) != disjoint_set.find(e.dest)){
            disjoint_set.union(e.source, e.dest);
            result.push(e);
            g.add_step({source_node : e.source, edges : [e.dest], nodes : [e.dest, e.source], should_color_visited: true,
                step_idx: 1,
                additional_name: "Sorted edges: ", additional: edges_additional
            }
            );
        }
        else{
            g.add_step({nodes : [e.dest, e.source], 
                step_idx: 2,
                additional_name: "Creates cycle", additional: edges_additional,
                should_color_visited : true,
            });
            g.add_step({nodes : [e.dest, e.source], 
                step_idx: 2,
                additional_name: "Sorted edges: ", additional: edges_additional,
                should_color_visited : true,
                edge_removal: true,
                source_node: e.source,
                edges: [e.dest]
            });
        }
        edges_additional.shift();
    }
    g.add_step({step_idx: 3})
    g.add_step({step_idx: 4})


    return g.get_steps()
}