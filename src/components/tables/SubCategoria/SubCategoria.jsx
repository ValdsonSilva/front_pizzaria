import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../tables/SubCategoria/SubCategoria.style.css'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchCategorias from "../../requisições/useFetchCategorias";
import  useFecthSubcategorias  from "../../requisições/useFetchSubCategorias";

function TelaSubCategoria() {
    const {categorias} = useFetchCategorias()
    const {subcategorias, loading} = useFecthSubcategorias()

    console.log("Categorias: ", categorias)
    console.log("Subcategorias listadas: ", subcategorias);
      

    return (
        <div className="father">
            
            <div className="container_topo">

                <div className="container_lista">

                    <div className="pesquisar_sub">
                        
                        <div className="input-pesquisar">
                            <input type="text" placeholder="Pesquisar..."></input>
                        </div>

                        <div className="iconBox">
                            <i className='icone_pesquisar'><BiSearchAlt/></i>
                        </div>
                        
                    </div>

                    {loading ? <h1>Carregando...</h1> 
                        :   <table className="tabela_sub">
                                <thead >
                                    <tr>
                                        <th>Nome</th>
                                        <th>Categoria</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody >
                                    {subcategorias.map((subcategoria) => (
                                        
                                        <tr key={subcategoria.id_subcategoria}>
                                            <td>{subcategoria.nome_subcategoria}</td>
                                            <td>{categorias.filter((categoria) => categoria.id_categoria === subcategoria.id_categoria)
                                                .map((categoria) => categoria.nome_categoria)
                                            }</td>              
                                            <td >
                                                <Link to={`/editarsubcategoria/${subcategoria.id_subcategoria}`}>
                                                    <i className="icones_sub"><BiEditAlt/></i>
                                                </Link>
                                                <i className="icones_sub"><BiTrash/></i>
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
export default TelaSubCategoria;

