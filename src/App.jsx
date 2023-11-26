import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import TelaNovoItem from './components/pages/novoitem/TelaNovoItem'
import TelaNovaComposicao from './components/mateusc/TelaNovaComposicao'

function App() {
  const [texto, setTexto] = useState('')

  return (
    <>
      {/* <TelaInicialCrud/> */}
      {/* <TelaNovoItem/> */}
      <TelaNovaComposicao/>
    </>
  )
}

export default App
