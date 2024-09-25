import { OnEdgesChange, OnNodesChange, Edge, Node} from '@xyflow/react'



export interface GraphStore{
    nodes: Node[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    onNodesChange: OnNodesChange<Node>;
    edges: Edge[],
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    onEdgesChange: OnEdgesChange<Edge>;
  };