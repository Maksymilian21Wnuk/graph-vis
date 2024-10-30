import {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
} from '@xyflow/react';
import { Message } from './visualisation_types';
import { ActionType } from '../enumerations/enums';
/*
Props used for graph map spawning,
includes state of storage, reducer types etc.
*/ 

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
    selectedValue : number;
    setSelectedValue : (n : number) => void;
    isDirected : boolean;
    setIsDirected : (b : boolean) => void;
    isWeighted : boolean;
    setIsWeighted : (b : boolean) => void;
};

export type GraphState = {
    removeMode: boolean;
    addMode: boolean;
    first: number;
    connect: boolean;
    edge_to_change : Edge;
}

export type Coordinates = {
    x: number;
    y: number;
}

export type GraphAction = {
    type: ActionType;
    payload?: any | Coordinates | boolean | number;
}


export type GraphButtonsProps = {
    dispatch: React.Dispatch<GraphAction>;
    setEdges: (edges: Edge[]) => void;
    edges: Edge[];
    setNodes: (nodes : Node[]) => void;
    nodes : Node[];
    setModifyMode : () => void;
}

export type GraphName = {
    name: string;
}