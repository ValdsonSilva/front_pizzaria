import React from "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import '../pedidos/DetalhePedido.style.css'

function TelaPedidos() {

    return (
        <div className="father">
            
            <HeaderComum/> 
            
            <BotaoVoltar/>

            <div className="container_conteudo">

                <div className="conteudo_pedido">

                    <div className="texto">
                        Nº do pedido: 123456<br/><br/>
                        Itens: Pizza Frango com Catupiry G, Coca cola 2l<br/><br/>
                        Endereço de entrega: Bairro Tal, Rua Irineu, nº 99<br/><br/>
                        Cliente: Lucas Aires<br/><br/>Forma de pagamento: PIX<br/><br/>
                        Valor: 50,00<br/><br/>
                        Horário de pedido: 18:45<br/><br/>
                        Data: 11/12/23
                    </div>

                </div>

            </div>

        </div>
    )
}
export default TelaPedidos;



