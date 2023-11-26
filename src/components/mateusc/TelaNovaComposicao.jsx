import React, { useState } from "react";
import "./TelaNovaComposicao.style.css";
import logo from "../../assets/gigapizza_logo.svg";
import HeaderComum from "../header/HeaderComum/HeaderComum";
import BotaoVoltar from "../button/Botao_voltar/BotaoVoltar";
import BotaoConfirmar from "../button/BotaoConfirmar"


function TelaNovaComposicao() {
    const [state, setState] = useState(false);

    const handleState = (event) => {
        event.preventDefault();
        setState(!state);
    };

    console.log(state);

    return (
        <div className="container">
            <HeaderComum />
            <BotaoVoltar />
            <div className="container-form">
                <h1>Cadastrando Insumo</h1>

                <form action="" className="form">
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
                </form>
                <BotaoConfirmar/>
            </div>
            
        </div>
    );
}

export default TelaNovaComposicao;