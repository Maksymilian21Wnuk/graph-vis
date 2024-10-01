import {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from '@xyflow/react';


export type Graph = {
    nodes: Node[];
    edges: Edge[];
}

export type AppState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange<Node>;
    onEdgesChange: OnEdgesChange;
    onConnect?: OnConnect;
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
};

export type GraphState = {
    removeMode: boolean;
    addMode: boolean;
    first: number;
    connect: boolean;
    weighted: boolean;
}

export type Coordinates = {
    x: number;
    y: number;
}

export type GraphAction = {
    type: string;
    payload?: any | Coordinates | boolean | number;
}


export type GraphButtonsProps = {
    dispatch: React.Dispatch<GraphAction>;
    setEdges: (edges: Edge[]) => void;
    edges: Edge[];
}

export type GraphName = {
    name: string;
    description: string;
    id: string;
}