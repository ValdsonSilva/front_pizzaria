import "react";
import "./Header.style.css"
import logo from "../../assets/gigapizza_logo.svg"

function Header() {
    return (
        <header className="cabecalho">
            <img src={logo} alt="logo gigapizza" className="logo"/>

            <div className="botoes_container">
                <button className="botao_cadastros">Novos cadastros</button>

                <button className="botao_cadastros">Itens cadastrados</button>

                <nav className="navegacao">
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