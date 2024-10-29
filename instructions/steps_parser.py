from inputs.input_parsers import get_text_allow_empty



def steps_parser(name):
    steps = []
    
    step = get_text_allow_empty("Give first step, finish by entering empty string\n")
    while(step != ""):
        steps.append(step)
        step = get_text_allow_empty("Next step: ")  
    if (len(steps) != 0) :
        parsed_steps = "//Steps for" + name + "\n{\n     steps:[\"" + "\",\n            \"".join(steps) + "\"\n]},"  
        return parsed_steps
    else:
        print("empty steps")
        exit(1)
