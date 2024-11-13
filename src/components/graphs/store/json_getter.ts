import aggreg from "../../../algorithms/algorithms_description/algorithms_aggreg.json"
import description from "../../../algorithms/algorithms_description/description_algorithms.json"
import steps from "../../../algorithms/algorithms_description/step_algorithms.json"
import { StepInterface, AggregationInterface, DescriptionInterface } from "../../../algorithms/algorithms_description/json_interfaces";
import { AlgorithmsMap } from "../../../algorithms/Algorithms_map";
import { GraphFunctionAbstract } from "../../../shared/types/visualisation_types";


/**
 * Json getter class with static methods for
 * getting json data for steps, descriptions or code.
 * It also implements a way of parsing function name to
 * it's functional representation.
 */
export default class JsonGetter {

    static getSteps(name : string) : StepInterface {
        return (steps as StepInterface[]).find((x : StepInterface ) => x.name === name)!;
    }

    static getCode(name : string) : StepInterface {
        return (steps as StepInterface[]).find((x : StepInterface ) => x.name === name)!;
    }

    static getDescription(name : string) : DescriptionInterface {
        return (description as DescriptionInterface[]).find((x : DescriptionInterface ) => x.name === name)!;
    }
    
    static getAggregation(name : string) : AggregationInterface {
        return (aggreg as AggregationInterface[]).find((x : AggregationInterface ) => x.name === name)!;
    }

    static getAggregationFull() : AggregationInterface[] {
        return aggreg as AggregationInterface[];
    }

    static parseAlgorithm(a : AggregationInterface) : GraphFunctionAbstract {
        return AlgorithmsMap.get(a.name)!;
    }

}
