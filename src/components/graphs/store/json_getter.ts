import { JsonFileAction } from "../../../shared/enumerations/enums";
import aggreg from "../../../algorithms/algorithms_description/algorithms_aggreg.json"
import description from "../../../algorithms/algorithms_description/description_algorithms.json"
import steps from "../../../algorithms/algorithms_description/step_algorithms.json"
import { StepInterface, AggregationInterface, DescriptionInterface } from "../../../algorithms/algorithms_description/json_interfaces";

/**
 * 
 * @param obj 
 * @param name 
 * @returns 
 */
function val_returner(obj : StepInterface[] | AggregationInterface[] | DescriptionInterface[], name : string) {
    return obj.find((x : StepInterface | AggregationInterface | DescriptionInterface ) => x.name === name)!;
}

/**
 * 
 * @param action file type for json getting
 * @param name 
 * @returns 
 */
export default function json_getter(action : JsonFileAction, name? : string) {
    switch (action) {
        case JsonFileAction.Aggregation:
            // is this correct typing?
            if (!name){
                return aggreg as AggregationInterface[];
            }
            else {
                return val_returner(aggreg as AggregationInterface[], name);
            }

        case JsonFileAction.Steps :
            return val_returner(steps as StepInterface[], name!);
            
        case JsonFileAction.Code:
            return val_returner(aggreg as AggregationInterface[], name!);
            
        case JsonFileAction.Description:
            return val_returner(description as DescriptionInterface[], name!);
        default:
            break;
    }
}
