import "react";
import "./Main.style.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Main({child}) {

    return (
        <main className="conteudo">
            {child}
            {/* link para a tela de pedidos */}
            <div className="container-contagem-pedidos">
                <Link to='/pedidos' className="botao-pedidos">
                    Pedidos
                </Link>
                <div className="contador-pedidos">0</div>
            </div>
        </main>
    )
}

export default Main;