import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'

function App() {
  const [texto, setTexto] = useState('')

  document.title = "Pizzaria"

  return (
    <>
      <TelaInicialCrud/>
    </>
  )
}

export default App
