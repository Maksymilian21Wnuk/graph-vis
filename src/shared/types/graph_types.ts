
// format: `{$SOURCE}e{$TARGET}`

import WeightedGraph from "../models/weighted_graph";


export type Step = {
    nodes? : string[];
    // edges destination
    edges? : string[];
    msg? : string;
    // edge source
    source_node? : string;
    additional? : Additional[];
    additional_name? : string;
    color? : string;
    should_color_visited? : boolean;
};

// additional might be queue of node id
// or it might be list of 
// for example distances ( dijkstra )

export type Additional = {
    id : string;
    value : string;
}

export type Message = {
    msg : string;
    additional? : Additional[];
    additional_name? : string;
    modifyMode? : boolean;
};

export type AlgorithmFunction = (g : WeightedGraph) => Step[];

export type Algorithm = {
    foo : AlgorithmFunction;
    name : string;
    require_weights : boolean;
};
