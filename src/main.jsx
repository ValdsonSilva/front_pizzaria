import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import TelaNovoItem from './components/pages/novoitem/TelaNovoItem.jsx'
import TelaNovaComposicao from './components/forms/formulário_insumo/TelaNovoInsumo.jsx'
import TelaItensCadastrados from "./components/pages/itenscadastrados/TelaItensCadastrados.jsx"
import InsumoEdit from './components/forms/forms_edit/InsumoEdit.jsx'

import Pedidos from './components/pages/pedidos/Pedidos.jsx'
import DetalhePedido from './components/pages/pedidos/DetalhePedido.jsx'
import SubcategoriaEdit from "./components/forms/forms_edit/SubcategoriaEdit.jsx"

// Configuração de rotas da minha aplicação
const router = createBrowserRouter([
    {
      // rota raiz/tela inicial
      path : "/",
      element : <App/>,
    },
    {
      path : "itens",
      element : <TelaNovoItem/>
    },
    {
      path : "insumo",
      element : <TelaNovaComposicao/>
    },
    {
      path : "cadastrados",
      element : <TelaItensCadastrados/>
    },
    {
      // para editar um insumo específico
      path : "editarinsumo/:insumoId",
      // path : "editarinsumo",
      element : <InsumoEdit/>
    },
    { 
      // tela de pedidos
      path : "pedidos",
      element : <Pedidos/>
    },
    {
      // tela detalhes de pedidos
      path : "detalhes",
      element : <DetalhePedido/>
    },
    {
      path : "editarsubcategoria/:SubcategoriaId",
      element : <SubcategoriaEdit/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      {/* <App/> */}
  </React.StrictMode>,
)
