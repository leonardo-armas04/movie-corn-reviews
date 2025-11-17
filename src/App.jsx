import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './views/screens/Home'
import Movies from './views/screens/Movies'
import Series from './views/screens/Series'
import Navbar from './views/components/Navbar'
import Footer from './views/components/Footer'
import NotFound from './views/screens/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/*" element= {<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
