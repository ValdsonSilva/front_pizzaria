import 'react'
import retro from '../../assets/retro-1.svg'
import "././Papel.style.css"
import { Link } from 'react-router-dom';

function Retro() {
    return (
        <Link to="/" className='retro'>
            <img src={retro} alt="papel pedididos" />
        </Link>
    )
}

export default Retro;