import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormInputInterface } from "../util/input_interface";
import CodeEditor from '@uiw/react-textarea-code-editor';


export default function CodeInput({input_info, bg, value, onChange} : FormInputInterface) {

    return (
        <li key={input_info.title}>
            <div>
                <div className={`p-5 ${bg ? "bg-slate-200" : "bg-slate-100"} grid grid-cols-9`}>
                    <label className="mr-5 col-span-2" >{`${input_info.title}: `}</label>
                    <div className="max-h-72 overflow-auto col-span-6">
                        <CodeEditor
                            id={input_info.name}
                            language="python"
                            value={value}
                            onChange={onChange}
                            name={input_info.name}
                            data-color-mode="light"
                            placeholder="def algorithm(g):"
                            minHeight={288}
                            className="text-[24px] bg-white rounded-md"
                        />
                    </div>
                    <div className="tooltip col-span-1" data-tip={input_info.desc}>
                        <button className="p-5 ml-5 bg-white rounded-3xl hover:bg-slate-100">
                            <FontAwesomeIcon icon={faQuestion} />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}