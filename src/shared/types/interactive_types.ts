import {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from '@xyflow/react';
import Heap from 'heap-js';
  
  
export type Graph = {
    nodes: Node[];
    edges: Edge[];
}

export type AppState = {
    nodes: Node[];
    edges: Edge[];
    currentlyClicked: string;
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
    connect: boolean;
    minHeap: Heap<string>;
}

export type Coordinates = {
    x: number;
    y: number;
}

export type GraphAction = {
    type: string;
    payload?: any | Coordinates;
}


export type GraphButtonsProps = {
    dispatch : React.Dispatch<GraphAction>;
    setEdges : (edges : Edge[]) => void;
    edges : Edge[];
}

export type GraphName = {
    name: string;
    description: string;
    id: string;
}