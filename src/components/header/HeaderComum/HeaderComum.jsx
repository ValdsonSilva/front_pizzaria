import "react";
import "./HeaderComum.style.css"
import logo from "../../../assets/gigapizza_logo.svg"
import { useNavigate } from "react-router-dom";


function HeaderComum() {
    // hook useNavigate para voltar para a tela de login
    const navigate = useNavigate()

    return (
        <header className="cabecalho_comum">
            <img src={logo} alt="logo gigapizza" onClick={() => navigate("/")} className="logo"/>
        </header>
    )
}

export default HeaderComum;