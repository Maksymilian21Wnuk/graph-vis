import dfs from "./dfs";
import bfs from "./bfs";
import { Algorithm } from "../../../../shared/types/graph_types";
import connectivity_check from "./connectivity";
import dijkstra from "./dijkstra";
import kruskal from "./kruskal";
import topological_sort from "./kahn";
import bipartite from "./bipartite";

export const algos : Algorithm[] = [
    { description:`Graph traversal with queue structure`, foo : bfs, name : "Breadth first search", require_weights: false, require_directed: false, require_non_directed: false},
    { description:`Stack using graph traversal`, foo : dfs, name : "Depth first search", require_weights: false, require_directed: false, require_non_directed: false},
    { description:`Check if given graph is connected`, foo : connectivity_check, name : "Connectivity check", require_weights: false, require_directed: false, require_non_directed: true},
    { description:`Find all shortest paths`, foo : dijkstra, name : "Dijkstra's shortest path", require_weights: true, require_directed: false, require_non_directed: false},
    { description:`Find spanning tree using sorted edge array and union-find data structure`, foo : kruskal, name: "Kruskal's MST", require_weights: true, require_directed: false, require_non_directed: true},
    { description:`Sort graph topologically`, foo : topological_sort, name: "Kahn's topological sort", require_weights: false, require_directed: true, require_non_directed: false},
    { description:`Check if given graph is bipartite`, foo : bipartite, name: "Biparte Graph check", require_weights: false, require_directed: false, require_non_directed: true},
    { description:`Randomly create spanning tree`, foo : kruskal, name: "TODO Randomized kruskal's MST", require_weights: false, require_directed: false, require_non_directed: true},
    { description:`lorem ipsum `, foo : kruskal, name: "TODO Tarjan's algorithm", require_weights: false, require_directed: true, require_non_directed: false},
    { description:`lorem ipsum give me description`, foo : kruskal, name: "TODO Kosaraju's algorithm", require_weights: false, require_directed: true, require_non_directed: false},
    { description:`Finding node, which distance to other nodes is maximized`, foo : kruskal, name: "TODO Finding diameter of tree", require_weights: false, require_directed: true, require_non_directed: false},
    { description: 'Minimal set of vertices containing each edge endpoints', foo: kruskal, name : `TODO Vertex cover`, require_weights: false, require_directed: false, require_non_directed: true},
    { description: 'Find spanning tree by greedily choosing lowest edges from given vertice', foo: kruskal, name : `TODO Prim's MST algorithm`, require_weights: true, require_directed: false, require_non_directed: true},

]