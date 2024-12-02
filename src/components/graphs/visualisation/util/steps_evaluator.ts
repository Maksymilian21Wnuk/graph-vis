import { GraphAbstract, GraphFunctionAbstract, Steps } from "../../../../shared/types/visualisation_types";
import DirectedGraph from "../../../../shared/models/directed_graph/directed_graph";
import { DirectedFunction } from "../../../../shared/types/visualisation_types";
import { TreeFunction } from "../../../../shared/types/visualisation_types";
import TreeGraph from "../../../../shared/models/tree_graph/tree_graph";
import WeightedGraph from "../../../../shared/models/weighted_graph/weighted_graph";
import { GraphFunction } from "../../../../shared/types/visualisation_types";
import { WeightedFunction } from "../../../../shared/types/visualisation_types";


export default function steps_evaluator(graph: GraphAbstract, foo: GraphFunctionAbstract): Steps | never {
    // run chosen algo on given graph
    if (graph instanceof DirectedGraph) {
        const f = foo as DirectedFunction;
        return f(graph);
    }
    else if (graph instanceof TreeGraph) {
        const f = foo as TreeFunction;
        return f(graph);

    }
    else if (graph instanceof WeightedGraph) {
        const f = foo as WeightedFunction;
        return f(graph);

    }
    else {
        const f = foo as GraphFunction;
        return f(graph);

    }
}