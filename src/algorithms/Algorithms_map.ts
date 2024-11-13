import bfs from "./bfs";
import bipartite from "./bipartite";
import connectivity_check from "./connectivity";
import dfs from "./dfs";
import dijkstra from "./dijkstra";
import kahn from "./kahn";
import kosaraju from "./kosaraju";
import kruskal from "./kruskal";
import tarjan from "./tarjan";
import { GraphFunctionAbstract } from "../shared/types/visualisation_types";

export const AlgorithmsMap = new Map<string, GraphFunctionAbstract> ([
    ["bfs", bfs],
    ["dfs", dfs],
    ["bipartite", bipartite],
    ["connectivity_check", connectivity_check],
    ["dijkstra", dijkstra],
    ["kahn", kahn],
    ["kosaraju", kosaraju],
    ["kruskal", kruskal],
    ["tarjan", tarjan]
])