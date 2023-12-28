import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../tables/Categoria/Categoria.style.css'
import { useEffect, useState } from "react";
import axios from "axios";
import useFetchCategorias from "../../requisições/useFetchCategorias";
import { Link } from "react-router-dom";

function TelaICategoria() {
    const { categorias, loading } = useFetchCategorias();
    console.log("Na tabela de categorias: ", categorias)

    const nomes_categorias = categorias.filter((cat) => cat.is_active === true)
        .map((cat) => cat.nome_categoria)

    console.log('nomes_categorias_tabela: ', nomes_categorias)

    async function desativarCategoria(id_categoria) {
        try {
            // busca pela categoria específica
            const categoriaSelecionada = categorias.find((categoria) => categoria.id_categoria === id_categoria);

            // desativar categoria
            if (categoriaSelecionada.is_active === true) {
                console.log(`A categoria de ${id_categoria} foi encontrada e está ${categoriaSelecionada.is_active === true ? "ativa" : "inativa"}`);

                const response = await axios.post(`http://localhost:3000/inativar/categoria`, {
                    id_categoria: categoriaSelecionada.id_categoria,
                })

                console.log(response.data.msg);
                window.location.reload();
                setCategorias((prevCategorias) =>
                    prevCategorias.map((categoria) =>
                        categoria.id_categoria === id_categoria ? { ...categoria, is_active: false } : categoria
                ))

            } 
            // ativar a categoria desativada
            else {
                console.log(`A categoria com ${id_categoria} não está ativa.`);

                // Lógica para ativar a categoria, se necessário
                const response = await axios.post(`http://localhost:3000/ativar/categoria`, {
                    id_categoria: categoriaSelecionada.id_categoria,
                });

                console.log(response.data);
                window.location.reload();
                setCategorias((prevCategorias) =>
                    prevCategorias.map((categoria) =>
                        categoria.id_categoria === id_categoria ? { ...categoria, is_active: true } : categoria
                ));

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
                            <i className='icone_pesquisar'><BiSearchAlt /></i>
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

                            <tbody>
                                {categorias.map((categoria) => (
                                    <tr key={categoria.id_categoria}>
                                        <td className={categoria.is_active ? "" : "inativado"}>{categoria.nome_categoria}</td>
                                        {/* Adicione outras colunas conforme necessário */}
                                        <td className={categoria.is_active ? "" : "inativado"}>
                                            <Link to={`/editarcategoria/${categoria.id_categoria}`} className="icones_categoria">
                                                <BiEditAlt />
                                            </Link>

                                            <i className={`icones_categoria_acao ${categoria.is_active ? "on" : ""}`} onClick={() => desativarCategoria(categoria.id_categoria)}>{categoria.is_active ? "off" : "on"}</i>

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
