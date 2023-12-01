import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../itenscadastrados/TelaItensCadastrados.style.css'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import BotaoAdicionar from "../../button/Botao_adicionar/BotaoAdicionar";
import Insumo from "../../ItensCadastrados/Insumo/Insumo"
import Itens from "../../ItensCadastrados/Itens/Itens"
import SubCategoria from "../../ItensCadastrados/SubCategoria/SubCategoria"
import Categoria from "../../ItensCadastrados/Categoria/Categoria"
import { useState } from "react";

function TelaItensCadastrados() {

    const [categoria, setCategoria] = useState(false)
    const [subcategoria, setSubcategoria] = useState(false)
    const [item, setItem] = useState(false)
    const [insumo, setInsumo] = useState(true)

    function handleCategoria() {
        setCategoria(true);
        setSubcategoria(false);
        setItem(false);
        setInsumo(false);  
    }

    function handleSubcategoria() {
        setSubcategoria(true);
        setCategoria(false);
        setItem(false);
        setInsumo(false);
    }

    function handleItem() {
        setItem(true);
        setCategoria(false);
        setSubcategoria(false);
        setInsumo(false);
    }

    function handleInsumo() {
        setInsumo(true)
        setCategoria(false);
        setSubcategoria(false);
        setItem(false);        
    }

    const titulos = {
        categoria_titulo : 'Categorias Cadastradas',
        subcategoria_titulo : 'Subcategorias Cadastradas',
        item_titulo : 'Itens Cadastrados',
        insumo_titulo : 'Insumos Cadastrados'
        
    }

    var titulo

    if (categoria) {
        titulo = titulos.categoria_titulo
    }
    else if (subcategoria){
        titulo = titulos.subcategoria_titulo
    }
    else if (item) {
        titulo = titulos.item_titulo
    }
    else if (insumo){
        titulo = titulos.insumo_titulo
    }

    return (
        <div className="father">
            {/* componente reaproveitado */}
            <HeaderComum/> 
            {/* comp reaproveitado */}
            <BotaoVoltar/> 
            
            <div className="container_topo">

                <div className="container_lista">
                    
                    <h1>{titulo}</h1>

                    <nav className="Nav_listagem_forms">
                        <button className={`Categoria ${categoria ? "on" : ""}`}
                            onClick={handleCategoria}>
                            Categoria
                        </button>

                        <button className={`Subcategoria ${subcategoria ? "on" : ""}`}
                            onClick={handleSubcategoria}>
                            Subcategoria
                        </button>

                        <button className={`Item ${item ? "on" : ""}`}
                            onClick={handleItem}>
                            Item
                        </button>

                        <button className={`Insumo ${insumo ? "on" : ""}`}
                            onClick={handleInsumo}>
                            Insumo
                        </button>
                        
                    </nav>

                    {categoria && (
                        <Categoria/>
                    )}
                    {subcategoria && (
                        <SubCategoria/>
                    )}
                    {item && (
                        <Itens />
                    )}
                    {insumo && (
                        <Insumo />
                    )}

                </div>   
                <BotaoAdicionar/>
           </div>
        </div>
    )
}  
export default TelaItensCadastrados;


