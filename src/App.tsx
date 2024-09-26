import { ReactFlowProvider } from '@xyflow/react'
import GraphMap from './components/graph_map/graph_map'
import Navbar from './components/navbar/navbar'
import Visualisation from './components/visualisation/visualisation'




function App() {

  return (
    <>
    <ReactFlowProvider>
      <Navbar/>
      <GraphMap/>    
      <Visualisation/>
    </ReactFlowProvider>
    </>
  )
}

export default App
