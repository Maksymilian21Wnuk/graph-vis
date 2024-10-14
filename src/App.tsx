import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import GraphVisualisation from './pages/graph_page'
import HomePage from './pages/home_page'
import Footer from './components/footer/footer'
import FundamentalConceptsPage from './components/fundamental_concepts/fundamental_concepts_page'



function App() {

  return (
    <div className='font-mono'>
        <Navbar />
        <Routes>
          <Route path="/visualise" element={<GraphVisualisation/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/concepts" element={<FundamentalConceptsPage/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
