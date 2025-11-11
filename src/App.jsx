import { useState } from 'react'
import Card from './views/Card'
import Navbar from './views/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <main>
        <h1>Hola mundo xd</h1>
        <p>Este es un párrafo xd</p>
        <Card></Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis similique beatae doloremque fuga expedita. Facere magnam, ab sint praesentium atque impedit minus voluptatem aliquid, hic deleniti ex sapiente fuga.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis similique beatae doloremque fuga expedita. Facere magnam, ab sint praesentium atque impedit minus voluptatem aliquid, hic deleniti ex sapiente fuga.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis similique beatae doloremque fuga expedita. Facere magnam, ab sint praesentium atque impedit minus voluptatem aliquid, hic deleniti ex sapiente fuga.</p>
      </main>
      
    </>
  )
}

export default App
