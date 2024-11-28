import { GraphFunctionAbstract } from "../../shared/types/visualisation_types";


/**
 * guards interface representation
 * for requirements of graph
 */
export interface GuardsInterface {
    require_weights : boolean,
    require_directed : boolean,
    require_non_directed : boolean,
    require_tree : boolean, 
}
/**
 * aggregation representation interface
 */
export interface AggregationInterface extends GuardsInterface{
    description: string,
    title : string,
}

export interface AggregationInterfaceNamed extends AggregationInterface {
    name: string; 
}

export interface DescriptionInterface {
    text: string,
    space: string,
    time: string
}

export interface ParsedAggregationInterface extends AggregationInterface {
    algorithm : GraphFunctionAbstract;
}

export interface JsonValues {
    aggregation : AggregationInterface;
    description: DescriptionInterface;
    code: string[];
    steps : string[]
}
/**
 * representation of json
 * key is variable
 */
export interface JsonRepresentation {
    [key : string] : JsonValues;
}

export enum JsonFields {
    Aggregation = "aggregation",
    Steps = "steps",
    Description = "description",
    Code = "code"
} 