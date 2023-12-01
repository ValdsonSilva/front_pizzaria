import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../ItensCadastrados/Categoria/Categoria.style.css'
import { useState } from "react";

function TelaICategoria() {

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

                    <div className="pesquisar_categoria">
                        
                        <div className="input-pesquisar">
                            <input type="text" placeholder="Pesquisar..."></input>
                        </div>

                        <div className="iconBox">
                            <i className='icone_pesquisar'><BiSearchAlt/></i>
                        </div>
                        
                    </div>

                    <table className="tabela_categoria">
                        <thead >
                            <tr>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr>
                                <td>Xxxxxxxxx</td>              
                                <td >
                                    <i className="icones_categoria"><BiEditAlt/></i>
                                    <i className="icones_categoria"><BiTrash/></i>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>   
           </div>
        </div>
    )
}  
export default TelaICategoria;


