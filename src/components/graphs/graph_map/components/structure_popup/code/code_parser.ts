import DirectedGraph from "../../../../../../shared/models/directed_graph/directed_graph";





export default function code_parser(graph : DirectedGraph) : string {
    let parsed : string[] = ["graph = \n{"];

    for (let node of graph.get_nodes()) {
        let current = "     " + node + ": ["
        for (let nei of graph.get_neighbours(node)) {
            current += nei + ","
        }
        parsed.push(current.slice(0, -1) + "]");
    }

    return parsed.join("\n") + "\n}";
}