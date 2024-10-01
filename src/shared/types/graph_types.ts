
// format: `{$SOURCE}e{$TARGET}`

import Graph from "../models/graph";


export type Step = {
    nodes? : string[];
    edges? : string[];
    msg? : string;
};

export type AlgorithmFunction = (g : Graph) => Step[];

export type Algorithm = {
    foo : AlgorithmFunction;
    name : string;
};
