import dfs from "./dfs";
import bfs from "./bfs";
import { Algorithm } from "../../../shared/types/graph_types";
import connectivity_check from "./connectivity";
import dijkstra from "./dijkstra";
import kruskal from "./kruskal";
import topological_sort from "./kahn";
import bipartite from "./bipartite";

export const algos : Algorithm[] = [
    {foo : bfs, name : "Breadth first search", require_weights: false, require_directed: false, require_non_directed: false},
    {foo : dfs, name : "Depth first search", require_weights: false, require_directed: false, require_non_directed: false},
    {foo : connectivity_check, name : "Connectivity check", require_weights: false, require_directed: false, require_non_directed: true},
    {foo : dijkstra, name : "Dijkstra's shortest path", require_weights: true, require_directed: false, require_non_directed: false},
    {foo : kruskal, name: "Kruskal's MST", require_weights: true, require_directed: false, require_non_directed: true},
    {foo : topological_sort, name: "Kahn's topological sort", require_weights: false, require_directed: true, require_non_directed: false},
    {foo : bipartite, name: "Biparte Graph check", require_weights: false, require_directed: false, require_non_directed: true},
    {foo : kruskal, name: "TODO Randomized kruskal's MST", require_weights: false, require_directed: false, require_non_directed: true},
    {foo : kruskal, name: "TODO Tarjan's algorithm", require_weights: false, require_directed: true, require_non_directed: false},
    {foo : kruskal, name: "TODO Kosaraju's algorithm", require_weights: false, require_directed: true, require_non_directed: false},
    {foo : kruskal, name: "TODO Finding diameter of tree", require_weights: false, require_directed: true, require_non_directed: false},
]