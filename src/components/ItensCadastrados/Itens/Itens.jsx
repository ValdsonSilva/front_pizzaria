import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../ItensCadastrados/Itens/Itens.style.css'
import { useState } from "react";
import useFetchItem from "../../requisições/useFetchItem";
import useFecthSubcategorias from "../../requisições/useFetchSubCategorias";

function TelaItens() {
    const {itens, loading} = useFetchItem()
    const {subcategorias} = useFecthSubcategorias()

    console.log("subcategorias aqui: ", subcategorias)

    console.log("Itens listados: ",itens)

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

                    {loading ? <h1>Carregando...</h1> : 
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

                        <tbody>
                            {itens.map((item) => (
                                <tr key={item.id_item_venda}>
                                    <td>{item.nome_item_venda}</td>
                                    <td>{item.descricao_item_venda}</td>
                                    <td>{item.preco_item_venda}</td>
                                    <td>{subcategorias.filter((sub) => sub.id_subcategoria === item.id_subcategoria_item_venda)
                                                      .map((sub) => sub.nome_subcategoria)
                                    }</td>              
                                    <td >
                                        <i className="icones_item"><BiEditAlt/></i>
                                        <i className="icones_item"><BiTrash/></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>}

                        {/* <tbody >
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
                        </tbody> */}

                </div>   
           </div>
        </div>
    )
}  
export default TelaItens;


