import 'react';
import '../button/BotaoConfirmar.style.css'

function BotaoConfirmar({funcao}) {
    return (
        <button className='botaoCon' onClick={funcao} type="submit">Confirmar</button>
    )
}

export default BotaoConfirmar;