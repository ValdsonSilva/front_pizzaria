import React, { useState } from "react";
import "./TelaNovaComposicao.style.css";
import logo from "../../assets/gigapizza_logo.svg";
import HeaderComum from "../header/HeaderComum/HeaderComum"

function TelaNovaComposicao() {

    const [state, setState] = useState(false)

    const handleState = (event) => {
        event.preventDefault()
        setState(!state)
    }

    console.log(state)

    return (
        <div>
            <HeaderComum/>
        </div>


    );
}

export default TelaNovaComposicao;
