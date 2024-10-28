
ALGO_PATH = "../src/components/graphs/visualisation/algorithms/"
ALGORITHMS_AGGREG_PATH = "../src/components/graphs/visualisation/algorithms/algorithms_aggreg.ts"


def parse_algorithm(foo_name, **kwargs) :
    
    NEW_ALGO_PATH = ALGO_PATH + foo_name + ".ts"

    with open(ALGORITHMS_AGGREG_PATH, "r") as old :
        old_data = old.read()

    new_str = "import {} from {}\n".format(foo_name, "\"./{}\"\n\n".format(foo_name))
    
    with open(ALGORITHMS_AGGREG_PATH, "w") as new:
        new.write(new_str + old_data)
    
    
    
    with open(NEW_ALGO_PATH, "a") as new_algo :
        new_algo.write("import Graph from \"../../../../shared/models/graph/graph\";\n")
        new_algo.write("import { Steps } from \"../../../../shared/types/visualisation_types\";\n")
        new_algo.write("export default function {}(g : Graph): Steps{}\n\n\n\n".format(foo_name, "{"))
        new_algo.write("\n    return g.get_steps();\n}")