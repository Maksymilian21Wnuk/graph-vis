import dfs from "./dfs";
import bfs from "./bfs";
import { Algorithm } from "../../../shared/types/graph_types";
import connectivity_check from "./connectivity";
import dijkstra from "./dijkstra";
import kruskal from "./kruskal";

export const algos : Algorithm[] = [
    {foo : bfs, name : "Breadth first search", require_weights: false, require_directed: false, require_non_directed: false},
    {foo : dfs, name : "Depth first search", require_weights: false, require_directed: false, require_non_directed: false},
    {foo : connectivity_check, name : "Connectivity check", require_weights: false, require_directed: false, require_non_directed: true},
    {foo : dijkstra, name : "Dijkstra's shortest path", require_weights: true, require_directed: false, require_non_directed: false},
    {foo : kruskal, name: "Kruskal", require_weights: true, require_directed: false, require_non_directed: true}
]