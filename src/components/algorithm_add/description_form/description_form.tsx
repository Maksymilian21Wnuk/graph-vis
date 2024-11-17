import { FormEvent } from "react"
import OneLineInput from "./one_line_input/one_line_input";
import { InputInterface } from "./input_interface";
import LargeInput from "./large_input/large_input";
import CodeInput from "./code_input/code_input";


const one_line_info: InputInterface[] = [
    { name: "Algorithm name", desc: "This will be displayed algorithm name" },
    { name: "Function name", desc: "Function name for algorithm implementation, no space required" },
    { name: "Short info", desc: "Short info displayed in algorithm list" },
    { name: "Time complexity", desc: "Time complexity of algorithm" },
    { name: "Space complexity", desc: "Space complexity of algorithm" }
]

const large_info: InputInterface[] = [
    { name: "Detailed description", desc: "Detailed description of algorithm" },
    { name: "Steps of algorithm", desc: "Algorithm's steps separated by space" },
]

const code_info: InputInterface[] = [
    { name: "Code", desc: "Code representation of algorithm visualised. It should be written in python, since it's widely used." },
]



export default function DescriptionForm() {

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="bg-gray-200 m-5 lg:text-xl rounded-md">
            <h1 className="h1-custom"> Step 1: Template generation </h1>
            <div className="">
                <form onSubmit={onSubmit}>
                    {one_line_info.map((info: InputInterface, idx: number) =>
                        <OneLineInput name={info.name} desc={info.desc} bg={idx % 2} />
                    )}
                    {large_info.map((info: InputInterface, idx: number) =>
                        <LargeInput name={info.name} desc={info.desc} bg={(idx + 1) % 2} />
                    )}
                    {code_info.map((info: InputInterface, idx: number) =>
                        <CodeInput name={info.name} desc={info.desc} bg={1} />
                    )}
                </form>
            </div>
        </div>
    )
}