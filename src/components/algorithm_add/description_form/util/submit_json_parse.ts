import { JsonRepresentation } from "../../../../algorithms/algorithms_description/json_interfaces";
import { OutputInterface, RequirementsInterface } from "./input_interface";





export default function submit_json_parse(out : OutputInterface, requirements : RequirementsInterface) : JsonRepresentation {

    return {
        [out.name] : {
            aggregation : {
                description: out.text,
                title: out.title,
                require_weights: requirements.require_weights,
                require_directed: requirements.require_directed,
                require_non_directed: requirements.require_non_directed,
                require_tree: requirements.require_tree
            },
            description : {
                text: out.description,
                space: out.space,
                time: out.time
            },
            steps: out.steps.split("\n"),
            code: out.code.split("\n")
        }
    }
}