import { useState } from 'react'
import Card from './views/Card'
import Navbar from './views/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1>Hola mundo xd</h1>
      <p>Este es un párrafo xd</p>
      <Card></Card>
    </>
  )
}

export default App
