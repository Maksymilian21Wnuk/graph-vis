
// format: `{$SOURCE}e{$TARGET}`

import { Queue } from "queue-typescript";
import DirectedGraph from "../models/directed_graph/directed_graph";
import { DisjointSetCustom } from "../models/disjoint_set_custom/disjoint_set_custom";
import { Edge, Node } from "@xyflow/react";
import Graph from "../models/graph/graph";
import WeightedGraph from "../models/weighted_graph/weighted_graph";
import { TreeGraph } from "../models/tree_graph/tree_graph";
/*
Types used in visualisation and
writing own algorithms,
includes definition of step for algos,
message, algorithm
*/


export type ColorizeNode = {
    color: string;
    nodes : string[];
}
export type PlainEdge = {
    source: string;
    dest: string;
    value: number;
}

type Stack = string[];

export type AdditionalType = Map<string, number> | DisjointSetCustom | Set<string> | Queue<string> | Stack | Array<PlainEdge>;

export type ColorizeNodes = ColorizeNode[];

type Color = string;
type NodeId = string;

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
    additional? : AdditionalType;
    additional_parsed? : Additional[];
    // name of additional structure
    additional_snd_name? : string;
    additional_snd_parsed? : Additional[];
    // secondary additionals
    additional_snd? : AdditionalType;
    additional_name? : string;
    // should visited be colored again? because visited
    // are by default not colored, for example in bfs
    // wouldnt make much sense
    should_color_visited? : boolean;
    should_color_visited_edge? : boolean;
    // index of current step
    step_idx : number;
    // current node if needs being colored
    current_node? : string;
    // sometimes instead of coloring we want to remove some edges,
    // if true edges from 'edges' array will be deleted
    edge_removal? : boolean;
    // colorize nodes for coloring algorithms
    // key: color value: nodes to color given key
    colorize_nodes? : Map<NodeId, Color>;
};

export type PreviousStep = {
    nodes: Node[];
    edges: Edge[];
    previous: PreviousStep | undefined;
}

export type Steps = Step[]

// additional might be queue of node id
// or it might be list of 
// for example distances ( dijkstra )

export type Additional = {
    id : string;
    value : string;
}

export type Message = {
    msg? : string;
    // first additional showing on right side...
    additional? : Additional[];
    // name of additional 
    additional_name? : string;
    // ... and second
    additional_snd? : Additional[];
    additional_snd_name? : string;
    modifyMode? : boolean;
    // must be explicitly given
    // for coloring the current step
    step_idx : number;
};


// type of visualization algorithm
export type DirectedFunction = (g : DirectedGraph) => Steps;
export type GraphFunction = (g : Graph) => Steps;
export type WeightedFunction = (g : WeightedGraph) => Steps;
export type TreeFunction = (g : TreeGraph) => Steps;

/*
type Requirements = {
    weights: boolean;
    directed: boolean;
    non_directed: boolean;
    tree: boolean;
}*/

// algorithm requires: function, name of algorithm
// or some guards
export type Algorithm = {
    foo : DirectedFunction | GraphFunction | WeightedFunction | TreeFunction;
    name : string;
    require_weights : boolean;
    require_directed : boolean;
    require_non_directed : boolean;
    require_tree : boolean;
    description? : string;
    dev? : boolean;
};
