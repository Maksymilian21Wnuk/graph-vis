import { FormEvent, useState } from "react"
import OneLineInput from "./one_line_input/one_line_input";
import { CheckboxInputInterface, RequirementsInterface, InputInterface, OutputInterface } from "./util/input_interface";
import LargeInput from "./large_input/large_input";
import CodeInput from "./code_input/code_input";
import submit_guard from "./util/submit_guard";
import submit_json_parse from "./util/submit_json_parse";
import CheckBoxes from "./checkboxes/checkboxes";
import guard_checkbox from "./checkboxes/guard_checkbox";
import { CheckboxInputName } from "./util/input_types";

const one_line_info: InputInterface[] = [
    { title: "Algorithm name", desc: "This will be displayed algorithm name", name: "title" },
    { title: "Function name", desc: "Function name for algorithm implementation, no space required", name: "name" },
    { title: "Short info", desc: "Short info displayed in algorithm list", name: "text" },
    { title: "Time complexity", desc: "Time complexity of algorithm", name: "time" },
    { title: "Space complexity", desc: "Space complexity of algorithm", name: "space" }
]

const large_info: InputInterface[] = [
    { title: "Detailed description", desc: "Detailed description of algorithm", name: "description" },
    { title: "Steps of algorithm", desc: "Algorithm's steps separated by endline", name: "steps" },
]

const code_info: InputInterface[] = [
    { title: "Code", desc: "Code representation of algorithm visualised. It should be written in python, since it's widely used.", name: "code" },
]

const checkboxes: CheckboxInputInterface[] = [
    { name: "require_directed", title: "Directed" },
    { name: "require_weights", title: "Weighted" },
    { name: "require_non_directed", title: "Undirected" },
    { name: "require_tree", title: "Tree" }
]


interface DescriptionFormInterface {
    setTemplateJson: (s : string) => void;
}

export default function DescriptionForm({setTemplateJson} : DescriptionFormInterface) {

    const [output, setOutput] = useState<OutputInterface>({
        title: "",
        name: "",
        text: "",
        time: "",
        space: "",
        description: "",
        steps: "",
        code: "",
    })

    const [requirements, setRequirements] = useState<RequirementsInterface>(
        {
            require_directed: false,
            require_non_directed: false,
            require_weights: false,
            require_tree: false
        }
    );

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setRequirements(guard_checkbox(name as CheckboxInputName, checked, requirements));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setOutput(
            {
                ...output,
                [name]: value
            }
        )
    }


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const guard_res = submit_guard(output);
        if (guard_res.pass) {
            const res = JSON.stringify(submit_json_parse(output, requirements));
            setTemplateJson(res);
        }
        else {
            alert(guard_res.text!);
        }
    }

    return (
        <div className="bg-gray-200 m-5 lg:text-xl rounded-md">
            <h1 className="h1-custom"> Step 1: Template generation </h1>
            <div className="bg-white">
                <form onSubmit={onSubmit}>
                    <ul>
                        {one_line_info.map((info: InputInterface, idx: number) =>
                            <OneLineInput input_info={info} bg={idx % 2} onChange={handleChange} value={output[info.name]}/>
                        )}
                        {large_info.map((info: InputInterface, idx: number) =>
                            <LargeInput input_info={info} bg={(idx + 1) % 2} onChange={handleChange} value={output[info.name]} />
                        )}
                        {code_info.map((info: InputInterface, idx: number) =>
                            <CodeInput input_info={info} bg={idx % 2} onChange={handleChange} value={output[info.name]} />
                        )}
                        <CheckBoxes checkboxes={checkboxes} handleCheckbox={handleCheckbox} requirements={requirements} />
                    </ul>
                    <button className="btn btn-lg m-2" type="submit">Get template</button>
                </form>
            </div>
        </div>
    )
}