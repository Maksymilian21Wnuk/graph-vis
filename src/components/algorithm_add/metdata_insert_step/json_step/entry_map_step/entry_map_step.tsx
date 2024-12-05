import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import { JsonRepresentation } from "../../../../../algorithms/algorithms_description/json_interfaces";



interface MapEntryStepInterface {
    json: JsonRepresentation;
}

SyntaxHighlighter.registerLanguage("typescript", typescript);


export default function MapEntryStep({json} : MapEntryStepInterface) {
    const algo_name = Object.keys(json)[0];

    return (
        <div className="">
            <div className="text-2xl p-2 m-4">
                {`Append function name: ${algo_name} to map in /src/algorithms/Algorithms_map.ts.
                It should look like this:`}
            </div>
            <SyntaxHighlighter language="typescript" style={docco} showLineNumbers>
                {`import bfs from "../bfs";
    // ... and so on
import ${algo_name} from "../${algo_name}"; // HERE paste import


export const AlgorithmsMap = new Map<string, GraphFunctionAbstract> ([
["bfs", bfs],
//... and so on
["kahn", kahn],
["kosaraju", kosaraju],
["${algo_name}", ${algo_name}], // HERE goes your function name entry
])`}
            </SyntaxHighlighter>
        </div>
    )
}