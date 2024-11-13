import { GraphFunctionAbstract } from "../../shared/types/visualisation_types";

interface RequiredInterface {
    name : string;
}

export interface AggregationInterface extends RequiredInterface {
    description: string,
    foo : string,
    require_weights : boolean,
    require_directed : boolean,
    require_non_directed : boolean,
    require_tree : boolean
}

export interface ParsedAggregationInterface extends AggregationInterface {
    algorithm : GraphFunctionAbstract;
}

export interface DescriptionInterface extends RequiredInterface {
    text: string,
    space: string,
    time: string
}

export interface StepInterface extends RequiredInterface {
    steps: string[]
}