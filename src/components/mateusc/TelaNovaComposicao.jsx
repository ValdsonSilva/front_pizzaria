import React from "react";
import "./TelaNovaComposicao.style.css";
import HeaderComum from "../header/HeaderComum/HeaderComum";
import BotaoVoltar from "../button/Botao_voltar/BotaoVoltar";
import BotaoConfirmar from "../button/BotaoConfirmar"


function TelaNovaComposicao() {

    return (
        <div className="container">
            <HeaderComum />
            <BotaoVoltar />
            <div className="container-form">
                <form action="" className="form">
                    <h1>Cadastrando Insumo</h1>
                    <div>
                        <span>Nome:</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Preço:</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Quantidade:</span>
                        <input type="number" />
                    </div>
                    <BotaoConfirmar/>
                </form>
            </div>
            
        </div>
    );
}

export default TelaNovaComposicao;