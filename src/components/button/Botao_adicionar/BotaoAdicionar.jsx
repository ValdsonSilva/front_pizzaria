import 'react'
import mais from '../../../assets/sinal-de-adicao.svg'
import "./BotaoAdicionar.style.css"

function BotaoAdicionar() {
    return (
        <a href="#" className='botao_adicionar'>
            <img src={mais} alt="Adicionar" />
        </a>
    )
}

export default BotaoAdicionar;

