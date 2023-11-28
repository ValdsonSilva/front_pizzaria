import 'react'
import mais from '../../../assets/sinal-de-adicao.svg'
import "./BotaoAdicionar.style.css"
import { Link } from 'react-router-dom';

function BotaoAdicionar() {
    return (
        <Link to="/itens" className='botao_adicionar'>
            <img src={mais} alt="Adicionar" />
        </Link>
    )
}

export default BotaoAdicionar;

