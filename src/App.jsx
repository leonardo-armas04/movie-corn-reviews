import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './views/Navbar'
import Footer from './views/Footer'
import Home from './views/Home'
import Movies from './views/Movies'
import Series from './views/Series'
import NotFound from './views/NotFound'

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
