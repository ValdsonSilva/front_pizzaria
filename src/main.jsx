import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TelaNovoItem from './components/pages/novoitem/TelaNovoItem.jsx'
import TelaNovaComposicao from './components/formulário_insumo/TelaNovoInsumo.jsx'
import TelaItensCadastrados from './components/pages/itenscadastrados/TelaItensCadastrados.jsx'
import InsumoEdit from './components/forms_edit/InsumoEdit.jsx'

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
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
      {/* <App/> */}
  </React.StrictMode>,
)
