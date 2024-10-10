
// format: `{$SOURCE}e{$TARGET}`

import WeightedGraph from "../models/weighted_graph";

/*
Info about step structure
*/

export type Step = {
    // nodes to color, by default to orange,
    // since those are nodes being visited
    nodes? : string[];
    // edges destination, array of id's as strings
    edges? : string[];
    // message displayed to the right
    msg? : string;
    // edge source
    source_node? : string;
    // additional structure,
    // must be parsed by parse_additional
    // before adding to array of steps
    additional? : Additional[];
    // name of additional structure
    additional_name? : string;
    color? : string;
    // should visited be colored again? because visited
    // are by default not colored, for example in bfs
    // wouldnt make much sense
    should_color_visited? : boolean;
    // index of current step
    step_idx : number;
    // current node if needs being colored
    current_node? : string;
};

// additional might be queue of node id
// or it might be list of 
// for example distances ( dijkstra )

export type Additional = {
    id : string;
    value : string;
}

export type Message = {
    msg? : string;
    additional? : Additional[];
    additional_name? : string;
    modifyMode? : boolean;
    // must be explicitly given
    // for coloring the current step
    step_idx : number;
};

export type AlgorithmFunction = (g : WeightedGraph) => Step[];

export type Algorithm = {
    foo : AlgorithmFunction;
    name : string;
    require_weights : boolean;
    require_directed : boolean;
    require_non_directed : boolean;
};
