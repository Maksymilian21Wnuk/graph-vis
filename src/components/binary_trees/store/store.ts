import { create } from 'zustand';
import { addEdge, Edge, Node, OnConnect } from '@xyflow/react';
import { BinaryNode } from '../models/binary_node';
import { nodeDefaultStyle } from '../../../shared/constants';


const initialEdges : Edge[] = [];
const initialNodes : BinaryNode[] = [{id:"1", position: {x: 350, y: 0}, data: {}, value: 0, style: nodeDefaultStyle.style}];

export type BinaryTreeState = {
    nodes : Node[];
    edges : Edge[];
    setNodes : (n : BinaryNode[]) => void;
    setEdges : (e : Edge[]) => void;
    onConnect? : OnConnect;
}

// this is from documentation, appropriate way of storing graph data
const useStore = create<BinaryTreeState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
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
