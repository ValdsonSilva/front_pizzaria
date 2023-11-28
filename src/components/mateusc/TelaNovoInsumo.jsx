import React from "react";
import "./TelaNovoInsumo.style.css";
import HeaderComum from "../header/HeaderComum/HeaderComum";
import BotaoVoltar from "../button/Botao_voltar/BotaoVoltar";
import BotaoConfirmar from "../button/BotaoConfirmar"


function TelaNovaComposicao() {

    return (
        <div className="container">
            <div className="container-form">
                <form action="" className="form">
                    <div>
                        <span>Nome:</span>
                        <input type="text" required />
                    </div>
                    <div>
                        <span>Preço:</span>
                        <input type="text" required />
                    </div>
                    <div>
                        <span>Quantidade:</span>
                        <input type="number" required />
                    </div>
                    <BotaoConfirmar/>
                </form>
            </div>
            
        </div>
    );
}

export default TelaNovaComposicao;