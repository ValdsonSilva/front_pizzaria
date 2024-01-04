import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import TelaPedidoCliente from './components/pages/pedidos/TelaPedidoCliente'
import Login from './components/pages/login/Login'

function App() {
  const [texto, setTexto] = useState('')

  document.title = "Pizzaria"


  return (
    <>
      {/* <TelaInicialCrud/> */}
      <Login/>
      {/* <TelaPedidoCliente/> */}
    </>
  )
}

export default App
