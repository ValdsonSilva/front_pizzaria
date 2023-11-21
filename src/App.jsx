import { useState } from 'react'
import './App.css'
import Texto from './components/Texto'

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      <input type="text" 
             value={texto}
             onChange={(event) => setTexto(event.target.value)}/>
      <h1>{texto}</h1>
      <Texto/>
    </>
  )
}

export default App
