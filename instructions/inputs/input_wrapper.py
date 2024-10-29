

def input_wrapper(text, **kwargs) :
    val = input(text) 
    boolean = kwargs.get('boolean', None)
    require_non_string = kwargs.get('require_non_string', None)
    allow_empty = kwargs.get("allow_empty", None)
    if (val == "" and not allow_empty):
       print("Must not be empty")
       exit(0)
    
    elif (boolean) :
        if (val != "y" and val != "n" and val != "yes" and val != "no"):
            print("Boolean value must be y or n")
            exit(0)
        else:
            return "true" if val == "y" or val == "yes" else "false"
    else: 
        if (require_non_string or allow_empty) :
             return val
        else:
             return "\"" + val + "\""