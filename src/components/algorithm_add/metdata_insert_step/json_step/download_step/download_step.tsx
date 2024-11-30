import { JsonRepresentation } from "../../../../../algorithms/algorithms_description/json_interfaces";
import Button from "../../../../utility/atoms/button/button";
import graph_type_parser, { GraphType } from "../functions/graph_type_parser/graph_type_parser";




const graph_file_map = new Map<GraphType, string>([
    ["DirectedGraph", "directed_graph"],
    ["Graph", "graph"],
    ["WeightedGraph", "weighted_graph"],
    ["TreeGraph", "tree_graph"]
]);


interface DownloadStepInterface {
    json: JsonRepresentation | null;
}

export default function DownloadStep({ json }: DownloadStepInterface) {
    const download_template = () => {
        const algo_name = Object.keys(json!)[0] as keyof JsonRepresentation;
        const graph_type: GraphType = graph_type_parser(json![algo_name].aggregation);
        const graph_file = graph_file_map.get(graph_type);
        const text = `# chosen graph model and step representation of visualisation
import ${graph_type} from "../shared/models/${graph_file}/${graph_file}";
import { Steps } from "../shared/types/visualisation_types";


# algorithm to implement
export default function ${algo_name}(g: ${graph_type}) : Steps {

    
    # returns steps of algorithm
    return g.get_steps();
}

`;
        const filename = `${algo_name}.ts`;

        const blob = new Blob([text], { type: "/text/plain" });


        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    return (
        <div className="grid grid-cols-4 bg-slate-100">
            <div className="col-span-3 text-2xl p-2 m-4">
                Paste template into algorithms folder
            </div>
            <div>
                <Button 
                    style="m-4"
                    disabled={json === null} onClick={download_template} text="Download code template" />
            </div>
        </div>
    )
}