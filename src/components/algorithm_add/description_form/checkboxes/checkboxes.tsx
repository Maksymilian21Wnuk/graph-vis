import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CheckboxAtom from "./checkbox_atom"
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion"
import { CheckboxInputInterface, RequirementsInterface } from "../util/input_interface"


interface CheckboxesGroupInterface {
    checkboxes: CheckboxInputInterface[];
    requirements: RequirementsInterface;
    handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function CheckBoxes({ checkboxes, requirements, handleCheckbox}: CheckboxesGroupInterface) {

    return (
        <li key="checkbox" className="bg-slate-100 grid grid-cols-9">
            <div className="p-5 col-span-8">
                <ul className="flex flex-row justify-between items-center">
                    {checkboxes.map((c: CheckboxInputInterface) =>
                        <CheckboxAtom info={c} value={requirements[c.name]} onChange={handleCheckbox} />
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