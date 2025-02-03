import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

import { FaInstagram } from "react-icons/fa6";  
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header>
            <Link to={'/'} className="brand"> ICAF-RN </Link>
            <ul className={menuOpen ? 'nav__navigation show' : 'nav__navigation'}>
                <li>
                    <NavLink to={'/site-icafrn'}>Início</NavLink>
                </li>
                <li>
                    <NavLink to={'/site-icafrn/sobre-nos/'}>Sobre nós</NavLink>
                </li>
                <li>
                    <NavLink to={'/site-icafrn/noticias/'}>Notícias</NavLink>
                </li>
            </ul>
            <div className="nav__right">
                <a href="#"><FaInstagram className="nav-right-icon" size={30} color="#fff"/></a>
            </div>
            <div className='nav__toggle' onClick={() => setMenuOpen(!menuOpen)}>
                <IoMenu size={30} color="#fff"/>
            </div>
        </header>
    )
}

export default Navbar