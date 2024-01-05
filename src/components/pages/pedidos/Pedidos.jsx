import React, { useEffect } from "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"
import { BiSolidShow  } from 'react-icons/bi'
import '../pedidos/Pedidos.style.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { pedidosContext } from "../../../context/pedidoscontext";
import Pedidostable from '../../tables/Pedido/Pedido'
function Pedidos() {
    //inicializaçao de variaveis de contexto
    const {carrinhopedidos, mypizzas} = useContext(pedidosContext)
    
        //inicializaçao do funçao do contexto para buscar pedidos existentes
        // caso venha da api transformar em funçao async
        carrinhopedidos.BuscarPedidos()
        //a principios de teste current corresponde ao valor estatico da variavel
        
    
    
    return (

        <div className="father">
      <HeaderComum />
      <BotaoVoltar />

      <div className="container_topo">
        <div className="container_pedido">
          <h1>Pedidos</h1>
          {carrinhopedidos.allpedidos.map((element, index) => (
            <Pedidostable numero={element.numero} pedido={element.item} data={element.data} key={index} />
          ))}
        </div>
      </div>
    </div>
    )
}

export default Pedidos