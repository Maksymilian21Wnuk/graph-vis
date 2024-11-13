import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import JsonGetter from "../../store/json_getter";

interface CodeDescProps {
    selectedValue: string;
    hideCodeDesc : () => void;
}


export default function CodeDesc({ selectedValue, hideCodeDesc }: CodeDescProps) {
    return (
        <dialog id="code_modal" className="modal" open>
            <div className="modal-box text-black">
                <SyntaxHighlighter language="python" style={docco} showLineNumbers wrapLines>
                    {JsonGetter.getCode(selectedValue).steps}
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