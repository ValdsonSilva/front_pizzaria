import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import TelaNovaComposicao from './components/mateusc/TelaNovaComposicao'

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      <TelaInicialCrud/>
    </>
  )
}

export default App
