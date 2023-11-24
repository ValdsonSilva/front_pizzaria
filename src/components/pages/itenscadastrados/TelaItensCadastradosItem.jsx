import "react";
import { BiEditAlt, BiTrash } from 'react-icons/bi'
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../itenscadastrados/TelaItensCadastradosItem.style.css'
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"

function TelaItensCadastradosItem() {
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
                        <li><a href="#">Pizzas</a></li>
                        <li><a href="#">Itens</a></li>
                        <li><a href="#">Insumos</a></li>
                    </ul>

                    <h1>Item </h1>

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
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>                
                                <td >
                                    <i className="icones"><BiEditAlt/></i>
                                    <i className="icones"><BiTrash/></i>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                    <h1>Categoria</h1>

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
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>                
                                <td >
                                    <i className="icones"><BiEditAlt/></i>
                                    <i className="icones"><BiTrash/></i>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                    <h1>Subcategoria</h1>

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
                                <td>xxxx</td>
                                <td>xxxx</td>
                                <td>xxxx</td>                
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

export default TelaItensCadastradosItem;

