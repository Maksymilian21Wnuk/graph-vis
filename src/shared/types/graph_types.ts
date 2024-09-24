

export type NodeId = string
export type EdgeId = string

export type DataToChange = {
    nodes: NodeId[],
    edges: EdgeId[],
    msg: string
}

type Node = {
    id : string;
}

type Edge = {
    source: string;
    target: string;
}

export type Graph = {
    nodes: Node[];
    edges: Edge[];
}