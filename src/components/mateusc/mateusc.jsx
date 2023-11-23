import React, { useState } from "react";
import "./mateusc.style.css";
import logo from "../../assets/gigapizza_logo.svg";

function Mateusc() {

    const [state, setState] = useState(false)

    const handleState = (event) => {
        event.preventDefault()
        setState(!state)
    }

    console.log(state)

    return (
        <div>
            <header className="cabecalho">
                <img src={logo} alt="logo gigapizza" className="logo" />
                <div className="botoes_container">
                    <button className="botao_cadastros"
                        onClick={handleState}>
                        {/* Novos cadastros */}
                    </button>

                    {/* <button className="botao_itens_cadastros">Itens cadastrados</button> */}
                </div>

            </header>
        </div>


    );
}

export default Mateusc;
