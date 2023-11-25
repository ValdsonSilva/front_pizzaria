import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
<<<<<<<<< Temporary merge branch 1
import TelaNovoItem from './components/pages/novoitem/TelaNovoItem'

=========
import Mateusc from './components/mateusc/mateusc'
>>>>>>>>> Temporary merge branch 2

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      {/* <TelaInicialCrud/> */}
<<<<<<<<< Temporary merge branch 1
      <TelaNovoItem/>
=========
      <Mateusc/>
>>>>>>>>> Temporary merge branch 2
    </>
  )
}

export default App
