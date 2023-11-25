import { useState } from 'react'
import './App.css'
import TelaInicialCrud from './components/pages/TelaInicialCrud'
import TelaNovoItem from "./components/pages/novoitem/TelaNovoItem"
import TelaCategoria from './components/pages/categoria/TelaCategoria'
import ItemForm from './components/formulários_item/ItemForm'
import CategoriaForm from './components/formulário_categoria/CategoriaForm'
import SubCategoriaForm from './components/formulário_subcategoria/SubCategoriaForm'

function App() {

  const [texto, setTexto] = useState('')

  return (
    <>
      {/*<TelaInicialCrud/>*/}
      {/* <TelaItensCadastrados/> */}
      {/* <TelaItensCadastradosItem/> */}
      {/* <TelaCategoria/> */}
      <SubCategoriaForm/>
      
    </>
  )
}

export default App
