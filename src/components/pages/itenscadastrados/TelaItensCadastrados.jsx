import "react";
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../itenscadastrados/TelaItensCadastrados.style.css'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"

function TelaItensCadastrados() {
    return (
        <div className="father">
            {/* componente reaproveitado */}
            <HeaderComum/> 
            {/* comp reaproveitado */}
            <BotaoVoltar/>
            <div className="container_topo">
                <div className="container_lista">

                    <h1>Itens Cadastrandos</h1>

                    <ul>
                        <li><a href="#">Categoria</a></li>
                        <li><a href="#">Subcategoria</a></li>
                        <li><a href="#">Itens</a></li>
                        <li><a href="#">Insumos</a></li>
                    </ul>

                    <table className="tabela">
                        <thead >
                            <tr>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Quantidade</th>  
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr>
                                <td>Coca-Cola 2L</td>
                                <td>7,50</td>
                                <td>21</td>                
                                <td >
                                    <i className="icones"><BiEditAlt/></i>
                                    <i className="icones"><BiTrash/></i>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>   
           </div>
        </div>
    )
}

export default TelaItensCadastrados;

