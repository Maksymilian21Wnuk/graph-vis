


export type Node = {
    id : string;
}


// format: `{$SOURCE}e{$TARGET}`
export type Edge = {
    id : string;
}

export type ReturnObj = {
    nodes? : Node[];
    edges? : Edge[];
    msg? : string;
}