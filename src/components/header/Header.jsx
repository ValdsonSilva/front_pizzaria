'use client';
import "react";
import "./Header.style.css"
import logo from "../../assets/gigapizza_logo.svg"
import { useState } from "react";

function Header() {

    const [state, setState] = useState(false)

    const handleState = (event) => {
        event.preventDefault()
        setState(!state)
    }

    console.log(state)

    return (
        <header className="cabecalho">
            <img src={logo} alt="logo gigapizza" className="logo"/>

            <div className="botoes_container">
                <button className="botao_cadastros"
                        onClick={handleState}>
                            Novos cadastros
                </button>

                <button className="botao_itens_cadastros">Itens cadastrados</button>

                <nav className={`navegacao ${state ? 'on' : ''}`}>

                    <a href="#" className="sabor">Sabor</a>
                    <div className="barrinha_nav"/>
                    <a href="#" className="itens">Itens</a>
                    <div className="barrinha_nav"/>
                    <a href="#" className="composicao">Composição</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;