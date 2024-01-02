import 'react'
import gigaphoto from '../../assets/Giga-Photo.svg'
import "././logop.style.css"
import { Link } from 'react-router-dom';

function Gigaphoto() {
    return (
        <Link to="/" className='gigaphoto'>
            <img src={gigaphoto} alt="logo giga pizza" />
        </Link>
    )
}

export default Gigaphoto;
