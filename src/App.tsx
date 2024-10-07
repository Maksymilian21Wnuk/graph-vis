import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import GraphVisualisation from './pages/graph_page'
import HomePage from './pages/home_page'



function App() {

  return (
    <div className='font-mono'>
        <Navbar />
        <Routes>
          <Route path="/visualise" element={<GraphVisualisation/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
    </div>
  )
}

export default App
