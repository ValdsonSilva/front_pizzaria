import "react";
import "./Main.style.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import Gigaphoto from "../../assets/Giga-PhotoRoom 3.svg";
import Footer from "../footer/Footer";

function Main({child}) {

    return (
        <main className="conteudoContainer">
            <div className="conteudo">
                {/* link para a tela de pedidos */}
                <div className="container-contagem-pedidos">
                    <Link to='/pedidos' className="botao-pedidos">
                        Pedidos
                    </Link>
                    <div className="contador-pedidos">0</div>
                </div>
            </div>
            <img src={Gigaphoto} alt="Logo grande do gigapizza" className="GigaLogoGrande"/>
            <Footer/>
        </main>
    )
}

export default Main;