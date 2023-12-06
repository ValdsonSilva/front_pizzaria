import "react";
import { BiEditAlt, BiTrash, BiSearchAlt } from 'react-icons/bi'
import '../../ItensCadastrados/Insumo/Insumo.style.css'
import { useState } from "react";
import useFetchCategorias from "../../requisições/useFetchCategorias";
import useFetchInsumos from "../../requisições/useFetchInsumos";

function TelaInsumo() {
    const insumos = useFetchInsumos();

    console.log('Na tabela de insumos:',insumos)

    return (
        <div className="father">
            
            <div className="container_topo">

                <div className="container_lista">

                    <div className="pesquisar_insumo">
                        
                        <div className="input-pesquisar">
                            <input type="text" placeholder="Pesquisar..."></input>
                        </div>

                        <div className="iconBox">
                            <i className='icone_pesquisar'><BiSearchAlt/></i>
                        </div>
                        
                    </div>

                    <table className="tabela_insumo">
                        <thead >
                            <tr>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Quantidade</th>  
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody >
                            {insumos.map((insumo) => (
                                <tr key={insumo}>
                                    <td>{insumo.nome_item_comprado}</td>
                                    <td>{insumo.preco_item_comprado}</td>
                                    <td>{insumo.quantidade_item_comprado}</td>                
                                    <td >
                                        <i className="icones_insumo"><BiEditAlt/></i>
                                        <i className="icones_insumo"><BiTrash/></i>
                                    </td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td>Xxxxxxx</td>
                                <td>7,50</td>
                                <td>21</td>                
                                <td >
                                    <i className="icones_insumo"><BiEditAlt/></i>
                                    <i className="icones_insumo"><BiTrash/></i>
                                </td>
                            </tr> */}
                        </tbody>

                    </table>

                </div>   
           </div>
        </div>
    )
}  
export default TelaInsumo;


