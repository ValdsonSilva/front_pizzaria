import "react";
import HeaderComum from '../../header/HeaderComum/HeaderComum'
import '../novoitem/TelaNovoItem.style.css'
import BotaoConfirmar from "../../button/BotaoConfirmar";
import BotaoVoltar from "../../button/Botao_voltar/BotaoVoltar"

function TelaNovoItem() {
    return (
        <div className="father">
            {/* componente reaproveitado */}
            <HeaderComum/> 
            {/* comp reaproveitado */}
            <BotaoVoltar/>
            <div className="container_topo">
                <div className="container_form">
                <h1>Cadastrando Novo Item</h1>
                    <form action="" >
                        <span>Nome:</span>
                        <input type="text" required/>
                        <span>Estoque:</span>
                        <input type="text" required/>
                        <span>Unidade:</span>
                        <input type="text" required/>
                        <span>Preço:</span>
                        <input type="text" required/>
                        {/* comp reaproveitado */}
                        <BotaoConfirmar/>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default TelaNovoItem;

