import "react";
import "./HeaderComum.style.css"
import logo from "../../../assets/gigapizza_logo.svg"


function HeaderComum() {

    return (
        <header className="cabecalho_comum">
            <img src={logo} alt="logo gigapizza" className="logo"/>
        </header>
    )
}

export default HeaderComum;