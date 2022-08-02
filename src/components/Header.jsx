import '../styles/hero.scss'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <nav>
                <Link to='/' id='lizYoga'>LIZYOGA</Link>
                <Link to='/Contact' id='contactanos'>CONTÁCTANOS</Link>
            </nav>
        </div>
    )
}

export default Header;