import {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from '@xyflow/react';
  
  
export type AppState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange<Node>;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
};

export type GraphState = {
    newNode: Node,
    removeMode: boolean;
    addMode: boolean;
    nodeCount: number;
    first: number;
    second: number;
    dragMode: boolean;
}

export type GraphAction = {
    type: string;
    payload?: any;
}