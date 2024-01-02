import React from "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import '../pedidos/DetalhePedido.style.css'
import Retro from "../../imgs/papel"
import Gigaphoto from "../../imgs/logop";

function TelaPedidos() {

    return (
        <div className="father">
            
            <HeaderComum/> 
            
            <BotaoVoltar/>
                
            <div className="container_conteudo">
                
                <div className="conteudo_pedido">

                    <Retro/> 

                    <Gigaphoto/>
                    
                    <div className="numpedido">Nº do pedido: 123456</div> 

                    <div className="tabelas">

                        <table className="tabela_p01">

                            <thead >
                                <tr>
                                    <th className="itens">Itens</th>
                                    <th className="valor_u">Valor Unitário</th>
                                </tr>
                            </thead>

                            <tbody className="tabela1">

                                <tr>
                                    <td>Pizza Frango com Catupiry G</td>
                                    <td>R$ 50,00</td>
                                </tr>

                                <tr>
                                    <td>Coca cola 2l</td>
                                    <td>R$ 10,00</td>
                                </tr>

                                <tr>
                                    <td className="total">Total:</td>
                                    <td>R$ 60,00</td>
                                </tr>

                            </tbody>

                        </table>

                        <table className="tabela_p02">

                            <tbody>

                                <tr>
                                    <td className="cliente">Cliente</td>
                                    <td>Lucas Aires</td>
                                </tr>

                                <tr>
                                    <td className="forma_pagamento">Forma de Pagamento</td>
                                    <td>Pix</td>
                                </tr>

                                <tr>
                                    <td className="horario_pedido">Horário do pedido</td>
                                    <td>18:45</td>
                                </tr>

                                <tr>
                                    <td className="data">Data</td>
                                    <td>09/09/2023</td>
                                </tr>

                            </tbody>

                        </table>

                    </div> 

                </div>

            </div>

        </div>
    )
}
export default TelaPedidos;



