import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../ItensCadastrados/SubCategoria/SubCategoria.style.css'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useFetchCategorias from "../../requisições/useFetchCategorias";
import  useFecthSubcategorias  from "../../requisições/useFetchSubCategorias";

function TelaSubCategoria() {
    const categorias = useFetchCategorias()
    const subcategorias = useFecthSubcategorias()

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

                    <table className="tabela_sub">
                        <thead >
                            <tr>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody >
                            {/* {subcategorias.map((subcategoria) => (
                                 <tr key={subcategoria}>
                                    <td>{subcategoria.nome}</td>
                                    <td>Xxxxxxxx</td>              
                                    <td >
                                        <i className="icones_sub"><BiEditAlt/></i>
                                        <i className="icones_sub"><BiTrash/></i>
                                    </td>
                             </tr>
                            ))} */}
                            <tr>
                                <td>Xxxxxxxx</td>
                                <td>Xxxxxxxx</td>              
                                <td >
                                    <i className="icones_sub"><BiEditAlt/></i>
                                    <i className="icones_sub"><BiTrash/></i>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>   
           </div>
        </div>
    )
}  
export default TelaSubCategoria;


