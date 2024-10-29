from pick import pick
from parse_algorithm import parse_algorithm
import inputs.input_parsers as inputs
from steps_parser import steps_parser
from description_parser import description_parser

STEPS_PATH = "../src/algorithms/algorithms_description/step_algorithms.ts"
DESCRIPTIONS_PATH = "../src/algorithms/algorithms_description/description_algorithms.ts"
CONCEPTS_PATH = "../src/components/fundamental_concepts/data.ts"
ALGORITHMS_PATH = "../src/algorithms/algorithms_aggreg.ts"

def append_to_file(file_name, parsed) :
        with open(file_name, "r") as file :
            lines = file.readlines()[0:-1]
        
        lines.append(parsed + "\n]")
        with open(file_name, "w") as file : 
             file.writelines(lines)

def prepend_to_file(file_name, parsed) :
    pass

def main():
    TITLE = "Pick option to add"
    options = ["Add new algorithm to visualisation", "Add concept to essential concepts page", "Quit"]



    option, chosen_value = pick(options, TITLE)

    match chosen_value: 
        case 0 :
                print("Adding algorithm: ")
                
                name = inputs.get_text("Enter algorithm's name that will be displayed on page: ")
                description = inputs.get_text("Enter description of algorithm: ")
                foo_name = inputs.get_non_string("Enter function's name: ")
                weights = inputs.get_bool("Require weights? Type y or n: ")
                directed = inputs.get_bool("Require directed? Type y or n: ")
                undirected = inputs.get_bool("Require undirected? Type y or n: ")
                tree = inputs.get_bool("Require tree? Type y or n: ")

                parsed_steps = steps_parser(foo_name)
                parsed_description = description_parser(foo_name)

                parsed_algo = "description: {}, foo: {}, name: {}, require_weights: {}, require_directed: {}, require_non_directed: {}, require_tree: {}".format(description, foo_name, name, weights, directed, undirected, tree)
                
                parsed_algo = "    {" + parsed_algo + "}, "
                
                append_to_file(ALGORITHMS_PATH, parsed_algo)
                append_to_file(STEPS_PATH, parsed_steps)
                append_to_file(DESCRIPTIONS_PATH, parsed_description)
                
                parse_algorithm(foo_name, undirected, weights, directed, tree)
        case 1 : 
            
            title = inputs.get_text("Enter title: ")
            description = inputs.get_text("Enter description: ")

            parsed = """   {}\n        title: {},\n        desc: {}\n   {}""".format("{", title, description, "},")

            append_to_file(CONCEPTS_PATH, parsed)

        case 2 :
              print("Quitting")

if __name__ == "__main__" : 
    main()