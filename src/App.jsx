import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'

function App() {
  const [texto, setTexto] = useState('')

  document.title = "Pizzaria"

  document.location = "pt-br"

  return (
    <>
      <TelaInicialCrud/>
    </>
  )
}

export default App
