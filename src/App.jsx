import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import TelaItensCadastrados from './components/pages/itenscadastrados/TelaItensCadastrados'
import TelaItensCadastradosItem from './components/pages/itenscadastrados/TelaItensCadastradosItem'

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      {/*<TelaInicialCrud/>*/}
      {/*<TelaItensCadastrados/>*/}
      <TelaItensCadastradosItem/>
    </>
  )
}

export default App
