import { useState } from 'react'
import Navbar from './views/Navbar'
import Start from './views/Start'
import Carousel from './views/Carousel'
import Awa from './views/Awa'
import Footer from './views/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <main>
        <Start></Start>
        <div id='carousel'>
          <h4>Películas</h4>
          <Carousel type="movies" />
          <br />
          <h4>Series</h4>
          <Carousel type="series" />
        </div>
      </main>
      <Awa/>
      <Footer/>
    </>
  )
}

export default App
