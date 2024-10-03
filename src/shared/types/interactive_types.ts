import {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from '@xyflow/react';
import { Message } from './graph_types';


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
    message: Message;
    setMessage: (msg : Message) => void;
    modifyMode: boolean;
    setModifyMode : (mode : boolean) => void;
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
    setNodes: (nodes : Node[]) => void;
}

export type GraphName = {
    name: string;
    description: string;
    id: string;
}