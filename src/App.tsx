import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import React, { Suspense } from 'react'
import Loading from './pages/loading_page';

/**
 * for optimization purpose lazily
 * load pages
 */
const GraphVisualisationPage = React.lazy(() => import('./pages/graph_page'));
const HomePage = React.lazy(() => import('./pages/home_page'));
const FundamentalConceptsPage = React.lazy(() => import('./pages/fundamental_concepts_page'));
const AlgorithmAddPage = React.lazy(() => import('./pages/algorithm_add_page'));



function App() {

  return (
    <div className='font-mono h-screen'>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/graphs" element={<GraphVisualisationPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/concepts" element={<FundamentalConceptsPage />} />
          <Route path="/developer" element={<AlgorithmAddPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
