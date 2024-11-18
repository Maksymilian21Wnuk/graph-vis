import { OutputInterface, OutputInterfaceJSON } from "../input_interface";





export default function submit_json_parse(out : OutputInterface) : OutputInterfaceJSON {

    return {
        ...out,
        steps: out.steps.split("\n"),
        code: out.code.split("\n")
    }
}