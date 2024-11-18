import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CheckboxAtom from "./checkbox_atom"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"
import { CheckboxInputInterface, CheckboxValuesInterface } from "../input_interface"
import { useState } from "react"
import guard_checkbox from "./guard_checkbox"
import { CheckboxInputName } from "../input_types"




const checkboxes: CheckboxInputInterface[] = [
    { name: "require_directed", title: "Directed" },
    { name: "require_weights", title: "Weighted" },
    { name: "require_non_directed", title: "Undirected" },
    { name: "require_tree", title: "Tree" }
]

export default function CheckBoxes() {
    const [selections, setSelections] = useState<CheckboxValuesInterface>(
        {
            require_directed: false,
            require_non_directed: false,
            require_weights: false,
            require_tree: false
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setSelections(guard_checkbox(name as CheckboxInputName, checked, selections));
    }

    return (
        <li key="checkbox" className="grid grid-cols-9">
            <div className="p-5 bg-slate-200 col-span-8">
                <ul className="flex flex-row justify-between items-center">
                    {checkboxes.map((c: CheckboxInputInterface) =>
                        <CheckboxAtom info={c} value={selections[c.name]} onChange={handleChange} />
                    )}
                </ul>
            </div>
            <div className="tooltip col-span-1" data-tip={"a"}>
                <button className="p-5 ml-5 bg-white rounded-3xl hover:bg-slate-100">
                    <FontAwesomeIcon icon={faQuestion} />
                </button>
            </div>
        </li>
    )
}