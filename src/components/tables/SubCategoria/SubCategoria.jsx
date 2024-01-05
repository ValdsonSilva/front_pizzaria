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
    const {subcategorias, loading, setSubcategorias} = useFecthSubcategorias()

    console.log("Categorias: ", categorias)
    console.log("Subcategorias listadas: ", subcategorias);


    async function desativarSubcategoria(id_subcategoria) {
        try {
  
          const subcategoria_selecionada = subcategorias.find((subcategoria) => subcategoria.id_subcategoria === id_subcategoria);
  
          // desativar subcategoria
          if (subcategoria_selecionada.is_active === true) {
            console.log(`A subcategoria com ${id_subcategoria} foi encontrada na filtragem com id ${subcategoria_selecionada.id_subcategoria}`);
            console.log(`A subctaegoria de ${id_subcategoria} foi encontrada e está ${subcategoria_selecionada.is_active === true ? "ativo" : "inativo"}`);
  
            const response = await axios.post("https://integracao-giga-pizza.vercel.app/inativar/subcategoria", {
              id_subcategoria: subcategoria_selecionada.id_subcategoria,
            });
  
            console.log(response.data.msg);
  
            setSubcategorias((prevSubcategorias) =>
              prevSubcategorias.map((subcategoria) =>
                subcategoria.id_categoria === id_subcategoria ? { ...subcategoria, is_active: false } : subcategoria
              )
            );
  
            // para atualizar obrigatoriamente a tela
            window.location.reload()
            // setShouldReload(true)
          }
          // ativar subcategoria
          else {
            console.log('Subcategoria ativada');
            console.log(`A subcategoria de id ${id_subcategoria} foi encontrado e está ${subcategoria_selecionada.is_active === true ? "ativo" : "inativo"}`);
            
  
            const response = await axios.post("https://integracao-giga-pizza.vercel.app/ativar/subcategoria", {
                id_subcategoria: subcategoria_selecionada.id_subcategoria,
            })
  
            console.log(response.data)
  
            setSubcategorias((prevSubcategorias) =>
              prevSubcategorias.map((subcategoria) =>
                subcategoria.id_categoria === id_subcategoria ? { ...subcategoria, is_active: false } : subcategoria
              )
            );
  
            // para atualizar obrigatoriamente a tela
            window.location.reload()
            // setShouldReload(true)
          }
        } catch (error) {
          console.error("Erro na requisição: ", error.response ? error.response.data : error.message);
        }
      }
  
      const encryptFunction = (id) => {
        // Lógica de criptografia aqui (exemplo simples: inversão)
        return id.split('').reverse().join('');
    };
      

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
                                            <td className={subcategoria.is_active ? "" : "inativado"}>{subcategoria.nome_subcategoria}</td>
                                            <td className={subcategoria.is_active ? "" : "inativado"}>{categorias.filter((categoria) => categoria.id_categoria === subcategoria.id_categoria)
                                                .map((categoria) => categoria.nome_categoria)
                                            }</td>              
                                            <td className={subcategoria.is_active ? "" : "inativado"}>
                                                <Link to={`/editarsubcategoria/${subcategoria.id_subcategoria}`}>
                                                    <i className="icones_sub"><BiEditAlt/></i>
                                                </Link>
                                        
                                                <a className={`icones_insumo_acao ${subcategoria.is_active ? "on" : ""}`} onClick={() => desativarSubcategoria(subcategoria.id_subcategoria)}>
                                                    {subcategoria.is_active ? "off" : "on"}
                                                </a>
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


