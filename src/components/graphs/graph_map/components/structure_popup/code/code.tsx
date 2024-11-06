import { StructureInterface } from "../../../../../../shared/types/visualisation_types";
import code_parser from "./code_parser";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";






export default function CodeRepresentation({ graph }: StructureInterface) {
    const code_repr = code_parser(graph);


    return (
        <div>
            <ul>
                    <SyntaxHighlighter language="python" style={docco} showLineNumbers wrapLines>
                        {code_repr}
                    </SyntaxHighlighter>
            </ul>
        </div>
    )
}