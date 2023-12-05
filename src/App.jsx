import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'

function App() {
  const [texto, setTexto] = useState('')

  return (
    <>
      <TelaInicialCrud/>
    </>
  )
}

export default App
