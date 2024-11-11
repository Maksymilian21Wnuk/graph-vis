
ALGO_PATH = "../../src/algorithms/"
ALGORITHMS_AGGREG_PATH = "../../src/algorithms/algorithms_aggreg.ts"

GRAPH = {"path" : "/graph/grah", "type" : "Graph"}
WEIGHTED = {"path" : "/weighted_graph/weighted_graph", "type": "WeightedGraph"}
DIRECTED = {"path" : "/directed_graph/directed_graph", "type": "DirectedGraph"}
TREE = {"path" : "/tree_graph/tree_graph", "type": "TreeGraph"}


def parse_algorithm(foo_name, undirected, weights, directed, tree) :

    NEW_ALGO_PATH = ALGO_PATH + foo_name + ".ts"

    with open(ALGORITHMS_AGGREG_PATH, "r") as old :
        old_data = old.read()

    new_str = "import {} from {}\n".format(foo_name, "\"./{}\"".format(foo_name))
    
    with open(ALGORITHMS_AGGREG_PATH, "w") as new:
        new.write(new_str + old_data)
    
    if ((undirected == False and directed == False) or directed == True) :
        chosen = DIRECTED
    elif (tree):
        chosen = TREE
    elif(weights):
        chosen = WEIGHTED
    else:
        chosen = GRAPH
    assert(chosen != None)
    
    with open(NEW_ALGO_PATH, "a") as new_algo :
        new_algo.write("import {} from \"../shared/models{}\";\n".format(chosen["type"], chosen["path"]))
        new_algo.write("import { Steps } from \"../shared/types/visualisation_types\";\n\n\n")
        new_algo.write("export default function {}(g : {}): Steps{}\n\n".format(foo_name, chosen["type"] ,"{"))
        new_algo.write("\n    return g.get_steps();\n}")