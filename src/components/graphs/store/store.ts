import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges, Edge, Node } from '@xyflow/react';
import { Message } from '../../../shared/types/visualisation_types';
import { AppState } from '../../../shared/types/graph_map_types';

const initialNodes: Node[] = [{"id":"1","position":{"x":225,"y":225},"data":{"label":"1"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":false,"dragging":false},{"id":"2","position":{"x":30,"y":225},"data":{"label":"2"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":false,"dragging":false},{"id":"3","position":{"x":60,"y":90},"data":{"label":"3"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":false,"dragging":false},{"id":"4","position":{"x":360,"y":195},"data":{"label":"4"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":false,"dragging":false},{"id":"5","position":{"x":270,"y":105},"data":{"label":"5"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":false,"dragging":false},{"id":"6","position":{"x":120,"y":0},"data":{"label":"6"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":true,"dragging":false},{"id":"7","position":{"x":510,"y":60},"data":{"label":"7"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":false,"dragging":false},{"id":"8","position":{"x":300,"y":15},"data":{"label":"8"},"style":{"borderRadius":"100%","width":50,"height":50,"display":"flex","alignItems":"center","justifyContent":"center"},"measured":{"width":50,"height":50},"selected":false,"dragging":false}]
const initialEdges: Edge[] = [{"id":"1-5","source":"1","target":"5","type":"straight","label":"","style":{"stroke":"black"}},{"id":"1-2","source":"1","target":"2","type":"straight","label":"","style":{"stroke":"black"}},{"id":"3-5","source":"3","target":"5","type":"straight","label":"","style":{"stroke":"black"}},{"id":"2-3","source":"2","target":"3","type":"straight","label":"","style":{"stroke":"black"}},{"id":"4-5","source":"4","target":"5","type":"straight","label":"","style":{"stroke":"black"}},{"id":"1-4","source":"1","target":"4","type":"straight","label":"","style":{"stroke":"black"}},{"id":"6-8","source":"6","target":"8","type":"straight","label":"","style":{"stroke":"black"}},{"id":"7-8","source":"7","target":"8","type":"straight","label":"","style":{"stroke":"black"}},{"id":"5-8","source":"5","target":"8","type":"straight","label":"","style":{"stroke":"black"}},{"id":"4-7","source":"4","target":"7","type":"straight","label":"","style":{"stroke":"black"}}]

const initialMessage : Message  = {msg : "", step_idx: -1};
const initialModifyMode : boolean = true;
const initialSelectedValue : string = "";
const initialDirected : boolean  = false;
const initialWeighted : boolean = false;

// this is from documentation, appropriate way of storing graph data
const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  message: initialMessage,
  modifyMode: initialModifyMode,
  selectedValue: initialSelectedValue,
  isDirected: initialDirected,
  isWeighted: initialWeighted,
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
  setMessage: (message) => {
    set({message});
  },
  setModifyMode: (modifyMode) => {
    set({modifyMode});
  },
  setSelectedValue: (selectedValue) => {
    set({selectedValue});
  },
  setIsDirected: (isDirected) => {
    set({isDirected})
  },
  setIsWeighted: (isWeighted) => {
    set({isWeighted})
  }
}));

export default useStore;
