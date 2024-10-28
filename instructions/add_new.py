from pick import pick

STEPS_PATH = "../src/components/graphs/visualisation/algorithms/algorithms_description/step_algorithms.ts"
CONCEPTS_PATH = "../src/components/fundamental_concepts/data.ts"
ALGORITHMS_PATH = "../src/components/graphs/visualisation/algorithms/algorithms_aggreg.ts"


def input_wrapper(text, **kwargs) :
    val = input(text) 
    boolean = kwargs.get('boolean', None)
    require_non_string = kwargs.get('require_non_string', None)
    if (val == ""):
       print("Must not be empty")
       exit(0)
    
    elif (boolean) :
        if (val != "y" and val != "n" and val != "yes" and val != "no"):
            print("Boolean value must be y or n")
            exit(0)
        else:
            return "true" if val == "y" or val == "yes" else "false"
    else: 
        if (require_non_string) :
             return val
        else:
             return """`""" + val + """`"""
         
def get_bool(text) :
    return input_wrapper(text, boolean = True)

def get_text(text) : 
     return input_wrapper(text)

def get_non_string(text):
     return input_wrapper(text, require_non_string = True)

def append_to_file(file_name, parsed) :
        with open(file_name, "r") as file :
            lines = file.readlines()[0:-1]
        

        lines.append(parsed + "\n]")
        with open(file_name, "w") as file : 
             file.writelines(lines)
            

title = "Pick option to add"
options = ["Add new algorithm to visualisation", "Add concept to essential concepts page"]


option, chosen_value = pick(options, title)

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

            parsed ="description: {}, foo: {}, name: {}, require_weights: {}, require_directed: {}, require_non_directed: {}, require_tree: {}".format(description, foo_name, name, weights, directed, undirected, tree)
            
            parsed = "{" + parsed + "}, "

            append_to_file(ALGORITHMS_PATH, parsed)

    case 1 : 
        
        title = get_text("Enter title: ")
        description = get_text("Enter description: ")

        parsed = """   {}\n        title: {},\n        desc: {}\n   {}""".format("{", title, description, "},")

        append_to_file(CONCEPTS_PATH, parsed)


