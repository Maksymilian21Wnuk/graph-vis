import { ReactFlowProvider } from '@xyflow/react'
import GraphMap from './components/graph_map/graph_map'
import Navbar from './components/navbar/navbar'
import Visualisation from './components/visualisation/visualisation'




function App() {

  return (
    <div className='font-mono'>
      <ReactFlowProvider>
        <Navbar />
        <GraphMap />
        <Visualisation />
      </ReactFlowProvider>
    </div>
  )
}

export default App
