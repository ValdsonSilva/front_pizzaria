import 'react'
import seta from '../../../assets/seta-direita.svg'
import "./BotaoVoltar.style.css"
import { Link } from 'react-router-dom';

function BotaoVoltar() {
    return (
        <Link to="/" className='voltar'>
            <img src={seta} alt="seta para o lado esquerdo" />
        </Link>
    )
}

export default BotaoVoltar;