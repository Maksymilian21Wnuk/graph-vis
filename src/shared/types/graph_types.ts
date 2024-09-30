
// format: `{$SOURCE}e{$TARGET}`

import Graph from "../models/graph";


export type ReturnObj = {
    nodes? : string[];
    edges? : string[];
    msg? : string;
};

export type AlgorithmFunction = (g : Graph) => Generator<ReturnObj>;

export type Algorithm = {
    foo : AlgorithmFunction;
    name : string;
};
