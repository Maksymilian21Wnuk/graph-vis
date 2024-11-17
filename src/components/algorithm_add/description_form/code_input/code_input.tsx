import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputInterface } from "../input_interface";
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from "react";


export default function CodeInput({ name, desc, bg }: InputInterface) {
    const [code, setCode] = useState("");

    return (
        <div>
            <div>
                <div className={`p-5 ${bg ? "bg-slate-200" : "bg-slate-100"} grid grid-cols-9`}>
                    <label className="mr-5 col-span-2" >{`${name}: `}</label>
                    <div className="max-h-72 overflow-auto col-span-6">
                        <CodeEditor
                            language="python"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            data-color-mode="light"
                            placeholder="def algorithm(g):"
                            minHeight={288}
                            className="text-[24px]"
                        />
                    </div>
                    <div className="tooltip col-span-1" data-tip={desc}>
                        <button className="p-5 ml-5 bg-white rounded-3xl hover:bg-slate-100">
                            <FontAwesomeIcon icon={faQuestion} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}