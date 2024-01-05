import React from "react";

//componente criado para dinamizar o conteudo de detalhes do pedido
function PedidoTabelaDetalhe({numero, item, endereco, cliente,pagamento,valor, Horario, data}) {

    return (
        

                <div className="conteudo_pedido">

                    <div className="texto">
                        Nº do pedido:{numero} <br/><br/>
                        Itens:{item}<br/><br/>
                        Endereço de entrega: {endereco}<br/><br/>
                        Cliente: {cliente}<br/><br/>Forma de pagamento:{pagamento}<br/><br/>
                        Valor:{valor} <br/><br/>
                        Horário de pedido:{Horario} <br/><br/>
                        Data:{data} 
                    </div>

                </div>

    )
}
export default PedidoTabelaDetalhe;
