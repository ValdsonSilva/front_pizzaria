import 'react'
import seta from '../../../assets/seta-direita.svg'
import "./BotaoVoltar.style.css"

function BotaoVoltar() {
    return (
        <a href="#" className='botao_voltar'>
            <img src={seta} alt="seta para o lado esquerdo" />
        </a>
    )
}

export default BotaoVoltar;