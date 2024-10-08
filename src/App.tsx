import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import GraphVisualisation from './pages/graph_page'
import HomePage from './pages/home_page'
import Footer from './components/footer/footer'



function App() {

  return (
    <div className='font-mono'>
        <Navbar />
        <Routes>
          <Route path="/visualise" element={<GraphVisualisation/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
