import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import JsonGetter from "../../store/json_getter";
import { useMemo } from "react";

interface CodeDescProps {
    selectedValue: string;
    hideCodeDesc: () => void;
}


export default function CodeDesc({ selectedValue, hideCodeDesc }: CodeDescProps) {
    const code_text : string[] = useMemo(() => {
        return JsonGetter.getCode(selectedValue);
    }, [selectedValue])

    console.log(code_text)
    return (
        <dialog id="code_modal" className="modal gray-out" open>
            <div className="modal-box w-11/12 max-w-2xl">
                <SyntaxHighlighter language="python" style={docco} showLineNumbers>
                    {code_text.join("\n")}
                </SyntaxHighlighter>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={hideCodeDesc}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}