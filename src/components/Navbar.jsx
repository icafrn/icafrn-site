import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

import { FaInstagram } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef()
    useEffect(() => {
        const handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
    })
    return (
        <header ref={menuRef}>
            <Link to={'/icafrn-site'} className="brand"> ICAF-RN </Link>
            <ul className={menuOpen ? 'nav__navigation show' : 'nav__navigation'}>
                <li>
                    <NavLink to={'/icafrn-site'}>Início</NavLink>
                </li>
                <li>
                    <NavLink to={'/icafrn-site/sobre-nos/'}>Sobre nós</NavLink>
                </li>
                <li>
                    <NavLink to={'/icafrn-site/noticias/'}>Notícias</NavLink>
                </li>
            </ul>
            <div className="nav__right">
                <a href="#"><FaInstagram className="nav-right-icon" size={30} color="#fff" /></a>
            </div>
            <div className='nav__toggle' onClick={() => setMenuOpen(!menuOpen)}>
                <IoMenu size={30} color="#fff" />
            </div>
        </header>
    )
}

export default Navbar