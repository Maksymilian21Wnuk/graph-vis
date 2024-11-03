import DirectedGraph from "../shared/models/directed_graph/directed_graph";
import { Steps } from "../shared/types/visualisation_types";


export default function kosaraju(g : DirectedGraph): Steps{


    return g.get_steps();
}