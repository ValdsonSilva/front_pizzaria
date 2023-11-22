import { useState } from 'react'
import './App.css'
import Texto from './components/Texto'
import Header from './components/header/Header'
import Main from "./components/main/Main"
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
