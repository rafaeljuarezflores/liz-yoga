import '../styles/hero.scss'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
            <nav>
                <Link to='/' id='lizYoga'>LizYoga</Link>
                <Link to='/Contact' id='contactanos'>contáctanos</Link>
            </nav>
        </div>
    )
}

export default Header;