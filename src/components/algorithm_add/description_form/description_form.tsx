import { FormEvent, useState } from "react"
import OneLineInput from "./one_line_input/one_line_input";
import { InputInterface, OutputInterface } from "./input_interface";
import LargeInput from "./large_input/large_input";
import CodeInput from "./code_input/code_input";
import submit_guard from "./util/submit_guard";
import submit_json_parse from "./util/submit_json_parse";
import CheckBoxes from "./checkboxes/checkboxes";

const one_line_info: InputInterface[] = [
    { title: "Algorithm name", desc: "This will be displayed algorithm name", name: "title" },
    { title: "Function name", desc: "Function name for algorithm implementation, no space required", name: "foo_name" },
    { title: "Short info", desc: "Short info displayed in algorithm list", name: "short_info" },
    { title: "Time complexity", desc: "Time complexity of algorithm", name: "time" },
    { title: "Space complexity", desc: "Space complexity of algorithm", name: "space" }
]

const large_info: InputInterface[] = [
    { title: "Detailed description", desc: "Detailed description of algorithm", name: "desc" },
    { title: "Steps of algorithm", desc: "Algorithm's steps separated by endline", name: "steps" },
]

const code_info: InputInterface[] = [
    { title: "Code", desc: "Code representation of algorithm visualised. It should be written in python, since it's widely used.", name: "code" },
]




export default function DescriptionForm() {

    const [output, setOutput] = useState<OutputInterface>({
        title: "",
        foo_name: "",
        short_info: "",
        time: "",
        space: "",
        desc: "",
        steps: "",
        code: "",
    })

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
            const res = submit_json_parse(output);
            console.log(JSON.stringify(res))
        }
        else {
            alert(guard_res.text!);
        }
    }

    return (
        <div className="bg-gray-200 m-5 lg:text-xl rounded-md">
            <h1 className="h1-custom"> Step 1: Template generation </h1>
            <div className="">
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
                        <CheckBoxes />
                    </ul>
                    <button className="btn" type="submit">Get JSON</button>
                </form>
            </div>
        </div>
    )
}