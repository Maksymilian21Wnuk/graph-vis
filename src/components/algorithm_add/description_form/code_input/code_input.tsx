import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormInputInterface } from "../util/input_interface";
import { useRef } from "react";

/*
                        <CodeEditor
                            id={input_info.name}
                            language="python"
                            value={value}
                            onChange={onChange}
                            name={input_info.name}
                            data-color-mode="light"
                            placeholder="def algorithm(g):"
                            minHeight={288}
                            className="bg-white rounded-md"
                        />
*/

export default function CodeInput({ input_info, bg, value, onChange }: FormInputInterface) {

    const handleTab = (e : React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const area = e.target as HTMLTextAreaElement;
            const start = area.selectionStart;
            const end = area.selectionEnd;
            area.value = area.value.substring(0, start) + "\t" + area.value.substring(end);
            area.selectionStart = area.selectionEnd = start + 1;
        }
    }

    const code_ref = useRef(null);

    return (
        <li key={input_info.title}>
            <div>
                <div className={`p-5 ${bg ? "bg-slate-200" : "bg-slate-100"} grid grid-cols-9`}>
                    <label className="mr-5 col-span-2" >{`${input_info.title}: `}</label>
                    <textarea
                        onKeyDown={handleTab}
                        id={input_info.name}
                        value={value}
                        ref={code_ref}
                        onChange={onChange}
                        name={input_info.name}
                        data-color-mode="light"
                        placeholder={input_info.placeholder ? input_info.placeholder : ""}
                        className="textarea h-72 lg:text-xl col-span-6"
                    />
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