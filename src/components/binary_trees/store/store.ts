import { create } from 'zustand';
import { addEdge, Edge, OnConnect } from '@xyflow/react';
import { BinaryNode } from '../models/binary_node';


const initialEdges : Edge[] = [];
const initialNodes : BinaryNode[] = [];


export type BinaryTreeState = {
    nodes : BinaryNode[];
    edges : Edge[];
    setNodes : (n : BinaryNode[]) => void;
    setEdges : (e : Edge[]) => void;
    onConnect? : OnConnect;
    //rootNode : BinaryNode | undefined;
   // setRootNode : (n : BinaryNode) => void;
}

// this is from documentation, appropriate way of storing graph data
const useStore = create<BinaryTreeState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  //rootNode: undefined,

  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  }
}));

export default useStore;
