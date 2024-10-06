
// format: `{$SOURCE}e{$TARGET}`

import Graph from "../models/graph";
import WeightedGraph from "../models/weighted_graph";


export type Step = {
    nodes? : string[];
    edges? : string[];
    msg? : string;
    source_node? : string;
    additional? : string;
    additional_name? : string;
};

// additional might be queue of node id
// or it might be list of 
// for example distances ( dijkstra )
export type Message = {
    msg : string;
    additional? : string;
    additional_name? : string;
    modifyMode? : boolean;
};

export type AlgorithmFunction = (g : WeightedGraph) => Step[];

export type Algorithm = {
    foo : AlgorithmFunction;
    name : string;
    require_weights : boolean;
};
