import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import TelaNovoItem from './components/pages/novoitem/TelaNovoItem'

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      {/*<TelaInicialCrud/>*/}
      {/*<TelaItensCadastrados/>*/}
      {/* <TelaItensCadastradosItem/> */}
      <TelaNovoItem/>
    </>
  )
}

export default App
