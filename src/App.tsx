import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import GraphVisualisationPage from './pages/graph_page'
import HomePage from './pages/home_page'
import Footer from './components/footer/footer'
import FundamentalConceptsPage from './components/fundamental_concepts/fundamental_concepts_page'
import BinaryTreesPage from './pages/binary_trees_page'



function App() {

  return (
    <div className='font-mono h-screen'>
        <Navbar />
        <Routes>
          <Route path="/graphs" element={<GraphVisualisationPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/concepts" element={<FundamentalConceptsPage/>}/>
          <Route path="/binarytrees" element={<BinaryTreesPage/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
