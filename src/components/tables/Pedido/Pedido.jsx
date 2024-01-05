import React, { useEffect } from "react";
import { BiSolidShow  } from 'react-icons/bi'
import '../../pages/pedidos/Pedidos.style.css'
import { Link } from "react-router-dom";
//componente criado para dinamizar o processo de pedidos
function Pedidostable({numero, pedido, data}) {
  
    return (

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
                                <td>{numero}</td>
                                <td>{pedido}</td>
                                <td>{data}</td>            
                                <td >
                                    <Link className="icones_pedido" to={`/detalhes/${numero}`}><BiSolidShow/></Link>
                                </td>
                            </tr>
                        </tbody>

                    </table>

       
    )
}

export default Pedidostable


