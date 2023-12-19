import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../ItensCadastrados/Categoria/Categoria.style.css'
import { useEffect, useState } from "react";
import axios from "axios";
import useFetchCategorias from "../../requisições/useFetchCategorias";

function TelaICategoria() {
    const {categorias, loading} = useFetchCategorias();
    console.log("Na tabela de categorias: ", categorias)

    const nomes_categorias = categorias.filter((cat) => cat.is_active === true)
                                    .map((cat) => cat.nome_categoria)

    console.log('nomes_categorias_tabela: ', nomes_categorias)

    
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

                    {loading ? <h1>Carregando...</h1> 
                    : <table className="tabela_categoria">
                            <thead >
                                <tr>
                                    <th>Nome</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody >
                                {/* listagem dos nomes das categorias */}
                                {nomes_categorias.map((nome_categoria) => (
                                    <tr key={nome_categoria}>
                                        <td>{nome_categoria}</td>
                                        <td >
                                            <i className="icones_categoria"><BiEditAlt/></i>
                                            <i className="icones_categoria"><BiTrash/></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>}

                </div>   
           </div>
        </div>
    )
}  
export default TelaICategoria;

        {/* <tr>
                                <td>Xxxxxxxxx</td>              
                                <td >
                                    <i className="icones_categoria"><BiEditAlt/></i>
                                    <i className="icones_categoria"><BiTrash/></i>
                                </td>
                            </tr> */}
