import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges, Edge, Node } from '@xyflow/react';

import { AppState } from '../../shared/types/types';


const initialNodes : Node[]  = [
]

const initialEdges : Edge[] = [
]

// this is from documentation, appropriate way of storing graph data
const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
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
  },
}));

export default useStore;
