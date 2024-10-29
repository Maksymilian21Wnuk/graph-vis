from inputs.input_parsers import get_text


def description_parser(name):
    description = get_text("Short description: ")
    time = get_text("Time complexity: ")
    space = get_text("Space complexity: ")

    parsed_desc = "//Description for " + name + "\n{\ntext:" + description + ",\ntime: " + time + ",\nspace: " + space + "\n}," 
    return parsed_desc