import "react";
import "./HeaderComum.style.css"
import logo from "../../../assets/gigapizza_logo.svg"
import { BrowserRouter, Link, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function HeaderComum() {
    // hook useNavigate para voltar para a tela de login
    const navigate = useNavigate()
    const [state, setState] = useState(false)
    const location = useLocation()

    const IsInitialUi = () => {
        if (location.pathname === "/") {
            setState(true)
        } else {
            setState(false)
        }
    }
    
    useEffect(() => {
        IsInitialUi()
    },[])

    return (
        <header className="cabecalho_comum">
            <img src={logo} alt="logo gigapizza" onClick={() => navigate("/")} className="logo"/>

            <Link to="login/" className="logar" style={{display: state ? "flex" : "none"}}>Logar</Link>
        </header>
    )
}

export default HeaderComum;