import dfs from "./dfs";
import bfs from "./bfs";
import { Algorithm } from "../../../shared/types/graph_types";

export const algos : Algorithm[] = [
    {foo : bfs, name : "bfs"},
    {foo : dfs, name : "dfs"},
]