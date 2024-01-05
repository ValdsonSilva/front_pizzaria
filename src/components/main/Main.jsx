import "react";
import "./Main.style.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { pedidosContext } from "../../context/pedidoscontext";
import Logo from "../../assets/Giga-PhotoRoom 3.svg"
import Footer from "../footer/Footer";

function Main({child}) {
    const {carrinhopedidos, mypizzas} = useContext(pedidosContext)
    carrinhopedidos.BuscarPedidos()
    console.log(mypizzas)
    return (
        <main className="conteudoContainer">
            <div className="conteudo">
                {child}
                {/* link para a tela de pedidos */}
                <div className="container-contagem-pedidos">
                    <Link to='/pedidos' className="botao-pedidos">
                        Pedidos
                    </Link>
                    <div className="contador-pedidos">{carrinhopedidos.tamanhopedidos}</div>
                </div>
            </div>
            <img src={Logo} className=".GigaLogoGrande" alt="Imagem grande da logo do giga pizza" />
            <Footer/>
        </main>
    )
}

export default Main;