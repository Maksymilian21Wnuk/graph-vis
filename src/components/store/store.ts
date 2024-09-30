import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges, Edge, Node } from '@xyflow/react';

import { AppState } from '../../shared/types/interactive_types';
import { nodeDefaultStyle } from '../../shared/constants';
import { Weight } from '../../shared/enumerations/enums';
import { edgeDefaultStyle } from '../../shared/constants';

const initialNodes : Node[]  = [
  {id : "1", position : {x : 200, y : 200}, data : {label : "1"}, ...nodeDefaultStyle},
  {id : "2", position : {x : 100, y : 100}, data : {label : "2"}, ...nodeDefaultStyle},
  {id : "3", position : {x : 500, y : 50}, data : {label : "3"}, ...nodeDefaultStyle},
  {id : "4", position : {x : 50, y : 300}, data : {label : "4"}, ...nodeDefaultStyle},
  {id : "5", position : {x : 50, y : 20}, data : {label : "5"}, ...nodeDefaultStyle}
]

const initialEdges : Edge[] = [
  {id: "1e2", source: "1", target: "2", type: 'straight', label: Weight.UNWEIGHTED, ...edgeDefaultStyle},
  {id: "2e4", source: "2", target: "4", type: 'straight', label: Weight.UNWEIGHTED, ...edgeDefaultStyle},
  {id: "2e5", source: "2", target: "5", type: 'straight', label: Weight.UNWEIGHTED, ...edgeDefaultStyle},
  {id: "2e3", source: "2", target: "3", type: 'straight', label: Weight.UNWEIGHTED, ...edgeDefaultStyle},
]

// this is from documentation, appropriate way of storing graph data
const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  currentlyClicked: "1",
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
  }
}));

export default useStore;
