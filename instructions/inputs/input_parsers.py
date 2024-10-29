from inputs.input_wrapper import input_wrapper


def get_bool(text) :
    return input_wrapper(text, boolean = True)

def get_text(text) : 
     return input_wrapper(text)

def get_non_string(text):
     return input_wrapper(text, require_non_string = True)

def get_text_allow_empty(text):
     return input_wrapper(text, allow_empty = True)

