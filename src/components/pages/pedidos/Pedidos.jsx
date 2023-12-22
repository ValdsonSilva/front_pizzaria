import React from "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import { BiSolidShow  } from 'react-icons/bi'
import '../pedidos/Pedidos.style.css'
import { Link } from "react-router-dom";

function Pedidos() {
    return (

        <div className="father">
            
            <HeaderComum/> 
            
            <BotaoVoltar/>

            <div className="container_topo">

                <div className="container_pedido">

                    <h1>Pedidos</h1>

                    <table className="tabela_pedido">

                        <thead>
                            <tr>
                                <th>Nº do Pedido</th>
                                <th>Pedido</th>
                                <th>Data e Horário</th> 
                                <th>Ver Detalhes</th>   
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>123456</td>
                                <td>Pizza frango com catupiry G, Coca Cola 2L</td>
                                <td>20/12/2023 18:45</td>            
                                <td >
                                    <Link className="icones_pedido" to="/detalhes"><BiSolidShow/></Link>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>   
           </div>
        </div>
    )
}

export default Pedidos