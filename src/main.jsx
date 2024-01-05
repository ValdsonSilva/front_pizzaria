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
import ItemEdit from './components/forms/forms_edit/item_edit/ItemEdit.jsx'
import CategoriaEdit from './components/forms/forms_edit/categoria_edit/CategoriaEdit.jsx'
import TelaInicialCrud from './components/pages/TelaInicialCrud.jsx'
import TelaPedidoCliente from './components/pages/pedidos/TelaPedidoCliente.jsx'
import { PedidoProvider } from './context/pedidoscontext.jsx'

// Configuração de rotas da minha aplicação
const router = createBrowserRouter([
    {
      // rota raiz/tela de login
      path : "/",
      element : <App/>,
    },
    {
      // tela da visão do user adm
      path : "/telainicial",
      element : <PedidoProvider><TelaInicialCrud/></PedidoProvider>
    },
    {
      // tela da visão do user cliente
      path : "/meuspedidos",
      element : <PedidoProvider><TelaPedidoCliente/></PedidoProvider>
    },
    {
      path : "/itens",
      element : <TelaNovoItem/>
    },
    {
      path : "/insumo",
      element : <TelaNovaComposicao/>
    },
    {
      path : "/cadastrados",
      element : <TelaItensCadastrados/>
    },
    {
      // para editar um insumo específico
      path : "/editarinsumo/:insumoId",
      // path : "editarinsumo",
      element : <InsumoEdit/>
    },
    {
      // para editar um item específico
      path : "/editaritem/:itemId",
      element : <ItemEdit/>
    },
    { 
      // tela de pedidos
      path : "/pedidos",
      element : <PedidoProvider><Pedidos/></PedidoProvider>
    },
    {
      // tela detalhes de pedidos
      path : "/detalhes/:id",
      element : <DetalhePedido/>
    },
    {
      path : "/editarsubcategoria/:SubcategoriaId",
      element : <SubcategoriaEdit/>
    },
    {
      // para editar uma categoria específica
      path : "/editarcategoria/:categoriaId",
      element : <CategoriaEdit/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      {/* <App/> */}
  </React.StrictMode>,
)
