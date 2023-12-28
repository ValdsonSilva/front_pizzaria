import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../tables/Categoria/Categoria.style.css'
import { useEffect, useState } from "react";
import axios from "axios";
import useFetchCategorias from "../../requisições/useFetchCategorias";

function TelaICategoria() {
    const {categorias, loading} = useFetchCategorias();
    console.log("Na tabela de categorias: ", categorias)

    const nomes_categorias = categorias.filter((cat) => cat.is_active === true)
                                    .map((cat) => cat.nome_categoria)

    console.log('nomes_categorias_tabela: ', nomes_categorias)

    async function desativarCategoria(id_categoria) {
        try {

            const categoriaSelecionada = categorias.find((categoria) => categoria.id_categoria === id_categoria);

            if (categoriaSelecionada.is_active === true) {
                console.log(`A categoria com ${id_categoria} foi encontrada na filtragem com id ${categoriaSelecionada.id_categoria}`);
                console.log(`A categoria de ${id_categoria} foi encontrada e está ${categoriaSelecionada.is_active === true ? "ativa" : "inativa"}`);

                const response = await axios.post("http://localhost:3000/inativar/categoria", {
                    id_categoria: categoriaSelecionada.id_categoria,
                });

                console.log(response.data.msg);

                setCategorias((prevCategorias) =>
                    prevCategorias.map((categoria) =>
                        categoria.id_categoria === id_categoria ? { ...categoria, is_active: false } : categoria
                    )
                );
            } 
            else {
                console.log(`A categoria com ${id_categoria} não está ativa.`);

                const response = await axios.post("http://localhost:3000/ativar/categoria", {
                    id_categoria: categoriaSelecionada.id_categoria,
                });

                console.log(response.data);

                setCategorias((prevCategorias) =>
                    prevCategorias.map((categoria) =>
                        categoria.id_categoria === id_categoria ? { ...categoria, is_active: true } : categoria
                    )
                );
 
                window.location.reload();
            }
        } catch (error) {
            console.error("Erro ao desativar/ativar categoria:", error);
        }
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
