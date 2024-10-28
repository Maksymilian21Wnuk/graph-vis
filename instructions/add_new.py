from pick import pick
from parse_algorithm import parse_algorithm
from input_parsers import *

STEPS_PATH = "../src/components/graphs/visualisation/algorithms/algorithms_description/step_algorithms.ts"
CONCEPTS_PATH = "../src/components/fundamental_concepts/data.ts"
ALGORITHMS_PATH = "../src/components/graphs/visualisation/algorithms/algorithms_aggreg.ts"


def append_to_file(file_name, parsed) :
        with open(file_name, "r") as file :
            lines = file.readlines()[0:-1]
        
        lines.append(parsed + "\n]")
        with open(file_name, "w") as file : 
             file.writelines(lines)

def main():
    TITLE = "Pick option to add"
    options = ["Add new algorithm to visualisation", "Add concept to essential concepts page"]


    option, chosen_value = pick(options, TITLE)

    match chosen_value: 
        case 0 :
                print("Adding algorithm: ")
                
                name = get_text("Enter algorithm's name that will be displayed on page: ")
                description = get_text("Enter description of algorithm: ")
                foo_name = get_non_string("Enter function's name: ")
                weights = get_bool("Require weights? Type y or n: ")
                directed = get_bool("Require directed? Type y or n: ")
                undirected = get_bool("Require undirected? Type y or n: ")
                tree = get_bool("Require tree? Type y or n: ")
                steps = []
                
                step = get_text_allow_empty("Give first step, finish by entering empty string\n")
                while(step != ""):
                    steps.append(step)
                    step = get_text_allow_empty("Next step: ")    

                if (len(steps) != 0) :
                    parsed_steps = "//Steps for" + name + "\n{\n     steps:[\"" + "\",\n            \"".join(steps) + "\"\n]},"  
                    
                else:
                    print("empty steps")
                    exit(1)
                
                
                parsed_algo = "description: {}, foo: {}, name: {}, require_weights: {}, require_directed: {}, require_non_directed: {}, require_tree: {}".format(description, foo_name, name, weights, directed, undirected, tree)
                
                parsed_algo = "    {" + parsed_algo + "}, "
                
                append_to_file(ALGORITHMS_PATH, parsed_algo)
                append_to_file(STEPS_PATH, parsed_steps)
                
                parse_algorithm(foo_name)
        case 1 : 
            
            title = get_text("Enter title: ")
            description = get_text("Enter description: ")

            parsed = """   {}\n        title: {},\n        desc: {}\n   {}""".format("{", title, description, "},")

            append_to_file(CONCEPTS_PATH, parsed)


if __name__ == "__main__" : 
    main()