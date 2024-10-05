import dfs from "./dfs";
import bfs from "./bfs";
import { Algorithm } from "../../../shared/types/graph_types";
import connectivity_check from "./connectivity";
import dijkstra from "./dijkstra";

export const algos : Algorithm[] = [
    {foo : bfs, name : "bfs"},
    {foo : dfs, name : "dfs"},
    {foo : connectivity_check, name : "connectivity check"},
    {foo : dijkstra, name : "dijkstra algorithm"}
]