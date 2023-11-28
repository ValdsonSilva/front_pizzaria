'use client';
import "react";
import "./Header.style.css"
import logo from "../../assets/gigapizza_logo.svg"
import { useState } from "react";
import {Link} from "react-router-dom";

function Header() {

    const [isNavegationVisible,  setNavegacaoVisible] = useState(false)

    const handleToggleNavegacao = (event) => {
        event.preventDefault();
        setNavegacaoVisible(!isNavegationVisible)
    }

    console.log(isNavegationVisible);

    return (
        <header className="cabecalho">
            <img src={logo} alt="logo gigapizza" className="logo"/>

            <div className="botoes_container">

                <Link to="/itens" className="botao_cadastros">
                            Novos cadastros
                </Link>


                <Link to="/cadastrados" className="botao_itens_cadastros" >Itens cadastrados</Link>

                {/* <nav className={`navegacao ${isNavegationVisible ? 'on' : ''}`}>

                    <Link to="/itens" className="itens" id="link">Itens</Link>
                    <div className="barrinha_nav"/>
                    <Link to="/insumo" className="composicao" id="link">Insumo</Link>
                </nav> */}
            </div>
        </header>
    )
}

export default Header;