import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../tables/Itens/Itens.style.css'
import useFetchItem from "../../requisições/useFetchItem";
import useFecthSubcategorias from "../../requisições/useFetchSubCategorias";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TelaItens() {
    // lista de itens cadastrados no sistema
    const {itens, loading, setItens} = useFetchItem()
    const {subcategorias} = useFecthSubcategorias()
    // const [item.is_active, setEstado] = useState(true)

    // função de ativar e desativar item no sistema
    async function handleItemComprado(id_item_venda) {

        try {      
            // busca pelo item_comprado específico
            const item_selecionado = itens.find((item) => item.id_item_venda === id_item_venda)

            // desativar o item_venda
            if (item_selecionado.is_active === true){
                console.log(`O insumo de id ${id_item_venda} foi encontrado e está ${item_selecionado.is_active === true ? "ativo" : "inativo"}`);
                // id do item venda
                const id = id_item_venda
                const response = await axios.post(`https://integracao-giga-pizza.vercel.app/inativar/venda`, {
                    id_item_venda : id
                })

                console.log(response.data.msg);

                setItens((prevItens) => 
                    prevItens.map((item) => 
                        item.id_item_venda === id_item_venda ? {...item, is_active: false} : item
                ))

                // forçando atualização da tela
                window.location.reload()
            }
            // ativar o item_venda
            else {
                console.log(`O insumo de id ${id_item_venda} foi encontrado e está ${item_selecionado.is_active === true ? "ativo" : "inativo"}`);
                // id do item venda
                const id = id_item_venda
                const response = await axios.post(`https://integracao-giga-pizza.vercel.app/ativar/venda`, {
                    id_item_venda : id
                })

                console.log(response.data.msg)

                setItens((prevItens) => 
                prevItens.map((item) => 
                    item.id_item_venda === id_item_venda ? {...item, is_active: true} : item
                ))

                // forçando atualização
                window.location.reload()
            }
        }
        catch (error){
            console.error(error)
        }

        // setEstado(!estado)
        // console.log("O estado é: ", estado)
    }

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
                                    <td className={item.is_active ? '' : 'inativado'}>{item.nome_item_venda}</td>
                                    <td className={item.is_active ? '' : 'inativado'}>{item.descricao_item_venda}</td>
                                    <td className={item.is_active ? '' : 'inativado'}>{item.preco_item_venda}</td>
                                    <td className={item.is_active ? '' : 'inativado'}>{subcategorias.filter((sub) => sub.id_subcategoria === item.id_subcategoria_item_venda)
                                                      .map((sub) => sub.nome_subcategoria)
                                    }</td>              
                                    <td className={item.is_active ? '' : 'inativado'}>
                                        
                                        <Link to={`/editaritem/${item.id_item_venda}`} className="icones_item">
                                            <BiEditAlt/>
                                        </Link>

                                        <i className={`icones_item_ativar ${item.is_active ? "on" : ""}`} onClick={() => handleItemComprado(item.id_item_venda)}>{item.is_active ? "off" : "on"}</i>
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
export default TelaItens;


