import { useState } from 'react'
import './App.css'
import Texto from './components/Texto'
import Header from './components/header/Header'
import Main from "./components/main/Main"
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import Mateusc from './components/mateusc/mateusc'

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      {/* <TelaInicialCrud/> */}
      <Mateusc/>
    </>
  )
}

export default App
