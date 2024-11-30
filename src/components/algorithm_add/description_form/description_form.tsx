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
import { JsonRepresentation } from "../../../algorithms/algorithms_description/json_interfaces";

const one_line_info: InputInterface[] = [
    { title: "Algorithm name", desc: "This will be displayed algorithm name", name: "title" },
    { title: "Function name", desc: "Function name for algorithm implementation, no space required", name: "name" },
    { title: "Short info", desc: "Short info displayed in algorithm list", name: "text" },
    { title: "Time complexity", desc: "Time complexity of algorithm", name: "time" },
    { title: "Space complexity", desc: "Space complexity of algorithm", name: "space" }
]

const large_info: InputInterface[] = [
    { title: "Detailed description", desc: "Detailed description of algorithm", name: "description", placeholder: `This algorithm does something. It starts from visiting...` },
    { title: "Steps of algorithm", desc: "Algorithm's steps separated by endline", name: "steps", placeholder: `Get arbitrary node\nVisit its neighbours\nIf neighbour visited...\nTerminate`},
]

const code_info: InputInterface[] = [
    { title: "Code", desc: "Code representation of algorithm visualised. It should be written in python, since it's widely used.", name: "code", placeholder: "def algorithm(g):" },
]

const checkboxes: CheckboxInputInterface[] = [
    { name: "require_directed", title: "Directed" },
    { name: "require_weights", title: "Weighted" },
    { name: "require_non_directed", title: "Undirected" },
    { name: "require_tree", title: "Tree" }
]



const initialOutput : OutputInterface = {
    title: "",
    name: "",
    text: "",
    time: "",
    space: "",
    description: "",
    steps: "",
    code: "",
}

const exampleOutput : OutputInterface = {
    title: "Breadth first search",
    name: "bfs",
    text: "Graph traversal with queue structure",
    time: "O(V+E)",
    space: "O(V)",
    description: "Breadth first search is an algorithm used for traversing graph, by visiting adjacent neighbours and adding them to queue. Next step of algorithm extracts from queue and repeats previous step, as long as queue is not empty",
    steps: `Initialize queue Q
Extract node from Q
Add unvisited neighbours to Q
Repeat from 2, if Q is not empty
Q is empty
Terminate`,
    code: `def bfs(g)
visited = set({})
queue = Queue(g.arbitrary_node())
while (queue.length > 0):
    node = queue.pop()
    if (!visited.has(node)):
        visited.add(node)
        neighbours = g.get_neighbours(node)
        for (neighbour in neighbours)
            queue.push(neighbour) `,
}

interface DescriptionFormInterface {
    setTemplateJson : (repr : JsonRepresentation | null) => void
}

export default function DescriptionForm({setTemplateJson} : DescriptionFormInterface) {
    const [showExample, setExampleShow] = useState(false);

    const [output, setOutput] = useState<OutputInterface>(initialOutput);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
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
            const res = submit_json_parse(output, requirements);
            setTemplateJson(res);
        }
        else {
            setTemplateJson(null)
            alert(guard_res.text!);
        }
    }

    const onExampleShow = () => {
        if (showExample){
            setExampleShow(false);
            setOutput(initialOutput);
        }
        else{
            setExampleShow(true);
            setOutput(exampleOutput)
        }
    }

    return (
        <div className="bg-gray-200 m-5 lg:text-xl rounded-md">
            <div className="grid grid-cols-3">
                <h1 className="h1-custom col-span-2"> Step 2: Template generation </h1>
                <button className="btn m-2" onClick={onExampleShow}>
                    { showExample ? "Hide example" : "See example"}
                </button>
            </div>
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
                            <CodeInput input_info={info} bg={(idx + 1) % 2} onChange={handleChange} value={output[info.name]} />
                        )}
                        <CheckBoxes checkboxes={checkboxes} handleCheckbox={handleCheckbox} requirements={requirements} />
                    </ul>
                    <button className="btn btn-lg m-2" type="submit">Generate Template</button>
                </form>
            </div>
        </div>
    )
}