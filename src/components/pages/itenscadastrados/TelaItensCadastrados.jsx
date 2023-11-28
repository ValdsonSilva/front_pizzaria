import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../itenscadastrados/TelaItensCadastrados.style.css'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import BotaoAdicionar from "../../button/Botao_adicionar/BotaoAdicionar";
import { useState } from "react";

function TelaItensCadastrados() {

    const [categoria, setCategoria] = useState(false)
    const [subcategoria, setSubcategoria] = useState(false)
    const [item, setItem] = useState(true)
    const [insumo, setInsumo] = useState(true)

    function handleCategoria() {
        setCategoria(true);
        setSubcategoria(false);
        setItem(false);
        setInsumo(false)
        
    }

    function handleSubcategoria() {
        setCategoria(true);
        setSubcategoria(false);
        setItem(false);
        setInsumo(false)
    }

    function handleItem() {
        setCategoria(true);
        setSubcategoria(false);
        setItem(false);
        setInsumo(false)
    }

    function handleInsumo() {
        setCategoria(true);
        setSubcategoria(false);
        setItem(false);
        setInsumo(false)
    }

    const titulos = {
        categoria_titulo : 'Cadastrando Categoria',
        subcategoria_titulo : 'Cadastrando Subcategoria',
        item_titulo : 'Cadastrando Novo Item',
        insumo_titulo : 'Cadastrando novo Insumo'
        
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
                    
                    <h1>Itens Cadastrandos</h1>

                    {/* <ul>
                        <li><a href="#">Categoria</a></li>
                        <li><a href="#">Subcategoria</a></li>
                        <li><a href="#">Itens</a></li>
                        <li><a href="#">Insumos</a></li>
                    </ul> */}
                
                    <nav className="nav_listagem_forms">
                        <button className={`categoria ${categoria ? "on" : ""}`}
                        onClick={handleCategoria}>
                            Categoria
                        </button>

                        <button className={`subcategoria ${subcategoria ? "on" : ""}`}
                        onClick={handleSubcategoria}>
                            Subcategoria
                        </button>

                        <button className={`item ${item ? "on" : ""}`}
                        onClick={handleItem}>
                            Item
                        </button>

                        <button className={`insumo ${insumo ? "on" : ""}`}
                        onClick={handleInsumo}>
                            Insumo
                        </button>
                        
                    </nav>

                    <div class="pesquisar">
                        
                        <div class="input-pesquisar">
                            <input type="text" placeholder="Pesquisar..."></input>
                        </div>

                        <div className="iconBox">
                        <i class='icone_pesquisar'><BiSearchAlt /></i>
                        </div>
                        
                    </div>

                    <table className="tabela">
                        <thead >
                            <tr>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Quantidade</th>  
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr>
                                <td>Coca-Cola 2L</td>
                                <td>7,50</td>
                                <td>21</td>                
                                <td >
                                    <i className="icones"><BiEditAlt/></i>
                                    <i className="icones"><BiTrash/></i>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>   
                <BotaoAdicionar/>
           </div>
        </div>
    )
}  
export default TelaItensCadastrados;


