import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { code_text } from "../../../../algorithms/algorithms_description/code_algorithms";

interface CodeDescProps {
    selectedValue: number;
}


export default function CodeDesc({ selectedValue }: CodeDescProps) {
    if (!code_text[selectedValue]) {
        return "you must add code text";
    }
    return (
        <div className="animate-appear">
            <SyntaxHighlighter language="python" style={docco} showLineNumbers wrapLines>
                {code_text[selectedValue]}
            </SyntaxHighlighter>
        </div>
    )
}