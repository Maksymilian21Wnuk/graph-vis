import { OutputInterface, OutputInterfaceJSON, RequirementsInterface } from "./input_interface";





export default function submit_json_parse(out : OutputInterface, requirements : RequirementsInterface) : OutputInterfaceJSON {

    return {
        ...out,
        steps: out.steps.split("\n"),
        code: out.code.split("\n"),
        requirements: requirements
    }
}