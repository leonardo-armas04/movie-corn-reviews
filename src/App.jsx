import { useState } from 'react'
import Card from './views/Card'
import Navbar from './views/Navbar'
import Carousel from './views/Carousel'
import Footer from './views/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1>Hola mundo xd</h1>
        <p>Este es un párrafo xd</p>
        <div id='carousel'>
          <Carousel type="movies" />
          <br />
          <Carousel type="series" />
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
