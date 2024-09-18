import GraphMap from './components/graph_map/graph_map'
import Navbar from './components/utility/navbar'
import {Node, Edge, useNodesState, useEdgesState} from "@xyflow/react"
import React from 'react'

const initialNodes : Node[]  = [
]

const initialEdges : Edge[] = [
]

export const Context = React.createContext<any>(undefined);

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  return (
    <Context.Provider value = {[nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange]}>
      <Navbar/>
      <GraphMap/>    
    </Context.Provider>
  )
}

export default App
