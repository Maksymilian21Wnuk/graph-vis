import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DirectedGraph from "../../../../../../shared/models/directed_graph/directed_graph";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface AdjacencyListInterface {
    graph : DirectedGraph;
}


export default function AdjacencyList({graph} : AdjacencyListInterface) {


    return (
        <div>
            <h1>Adjacency List</h1>
            <ul>
                {graph.get_nodes().map((n : string) => 
                <li key={n} className="font-bold">
                    {n + " "} 
                    <FontAwesomeIcon icon={faArrowRight} />
                    {" " + graph.get_neighbours(n).join(" ")}
                </li>
                )}
            </ul>
        </div>
    )
}