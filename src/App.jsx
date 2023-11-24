import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import TelaItensCadastrados from './components/pages/itenscadastrados/TelaItensCadastrados'

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      {/*<TelaInicialCrud/>*/}
      {/*<TelaItensCadastradosItem/>*/}
      <TelaItensCadastrados/>
    </>
  )
}

export default App
