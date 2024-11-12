import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { code_text } from "../../../../algorithms/algorithms_description/code_algorithms";

interface CodeDescProps {
    selectedValue: number;
    hideCodeDesc : () => void;
}


export default function CodeDesc({ selectedValue, hideCodeDesc }: CodeDescProps) {
    return (
        <dialog id="code_modal" className="modal" open>
            <div className="modal-box text-black">
                <SyntaxHighlighter language="python" style={docco} showLineNumbers wrapLines>
                    {code_text[selectedValue]}
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