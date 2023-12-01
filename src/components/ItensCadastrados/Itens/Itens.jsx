import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../ItensCadastrados/Itens/Itens.style.css'
import { useState } from "react";

function TelaItens() {

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
            
            <div className="container_topo">

                <div className="container_lista">

                    <div className="pesquisar_item">
                        
                        <div className="input-pesquisar">
                            <input type="text" placeholder="Pesquisar..."></input>
                        </div>

                        <div className="iconBox">
                            <i className='icone_pesquisar'><BiSearchAlt/></i>
                        </div>
                        
                    </div>

                    <table className="tabela_item">
                        <thead >
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Preço</th> 
                                <th>Categoria</th>   
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr>
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>7,50</td>
                                <td>xxxxxx</td>              
                                <td >
                                    <i className="icones_item"><BiEditAlt/></i>
                                    <i className="icones_item"><BiTrash/></i>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>   
           </div>
        </div>
    )
}  
export default TelaItens;


